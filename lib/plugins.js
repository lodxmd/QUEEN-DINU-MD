const config = require('../config')
const fs = require('fs')
const path = require('path')

function updateConfig(settingName, newValue) {
    const configPath = path.join(__dirname, '../config.js')
    let configContent = fs.readFileSync(configPath, 'utf8')
    const regex = new RegExp(`(${settingName}:\\s*)(true|false)`)
    configContent = configContent.replace(regex, `$1${newValue}`)
    fs.writeFileSync(configPath, configContent, 'utf8')
    delete require.cache[require.resolve('../config')]
}

module.exports = async (dragon, m) => {
    const body = m.mtype === "conversation" ? m.message.conversation :
        ["imageMessage", "videoMessage"].includes(m.mtype) ? m.message[m.mtype].caption :
        m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text : ""

    if (!body.startsWith(config.PREFIX)) return

    const from = m.key.remoteJid
    const [cmd, ...args] = body.slice(config.PREFIX.length).trim().split(/ +/)
    const text = args.join(" ")
    const command = cmd.toLowerCase()

    switch(command) {
        case 'settings': {
            if (!config.OWNER_NUMBER.includes(m.sender.split('@')[0])) {
                return m.reply('❌ Owner only command!')
            }

            const settings = [
                { name: 'ANTI_DELETE', value: config.ANTI_DELETE },
                { name: 'AUTO_READ_MESSAGE', value: config.AUTO_READ_MESSAGE },
                { name: 'AUTO_READ_STATUS', value: config.AUTO_READ_STATUS },
                { name: 'AUTO_TYPING', value: config.AUTO_TYPING },
                { name: 'WELCOME', value: config.WELCOME }
            ]

            const menu = settings.map((s, i) => 
                `${i+1}. ${s.name}: ${s.value ? '✅ ON' : '❌ OFF'}`).join('\n')

            const sentMsg = await m.reply(`⚙️ *Settings Menu*\n\n${menu}\n\nReply with number to toggle`)

            const handler = async (chatUpdate) => {
                const msg = chatUpdate.messages[0]
                if (!msg?.key?.fromMe && msg?.key?.remoteJid === from && 
                    msg?.message?.extendedTextMessage?.contextInfo?.stanzaId === sentMsg.key.id) {
                    
                    const num = parseInt(msg.message.extendedTextMessage.text)
                    if (isNaN(num) || num < 1 || num > settings.length) {
                        m.reply('Invalid number!')
                        dragon.ev.off('messages.upsert', handler)
                        return
                    }

                    const setting = settings[num-1]
                    const newValue = !setting.value
                    
                    updateConfig(setting.name, newValue)
                    config[setting.name] = newValue
                    
                    await m.reply(`⚙️ ${setting.name} set to ${newValue ? '✅ ON' : '❌ OFF'}`)
                    dragon.ev.off('messages.upsert', handler)
                }
            }

            dragon.ev.on('messages.upsert', handler)
            break
        }

        case 'help': {
            const helpText = `
🤖 *Bot Commands Menu*

🔹 ${config.PREFIX}settings - Bot settings (Owner only)
🔹 ${config.PREFIX}ping - Check bot response time
🔹 ${config.PREFIX}help - Show this menu

Owner: ${config.OWNER_NAME}
Prefix: ${config.PREFIX}
            `
            await m.reply(helpText)
            break
        }

        default:
            //await m.reply(`Unknown command. Type ${config.PREFIX}help for available commands`)
        break
    }
}
