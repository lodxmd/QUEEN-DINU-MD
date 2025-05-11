

const config = require("./config");
const {
  makeWASocket,
  useMultiFileAuthState,
  Browsers,
  downloadContentFromMessage,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  jidDecode,
  DisconnectReason,
  makeInMemoryStore,
} = require("@genuxofficial/nova");
const pino = require("pino");
const { Boom } = require("@hapi/boom");
const { color } = require("./lib/color");
const chalk = require("chalk");
const cfonts = require("cfonts");
const { getSizeMedia, fucksmg } = require("./lib/msg");
const FileType = require("file-type");
const fs = require("fs");
const path = require("path");
const { runtime } = require("./lib/darkcriminal");
const store = makeInMemoryStore({
  logger: pino().child({
    level: "silent",
    stream: "store",
  }),
});
module.exports = async function dragon(dragon, m, msg, chatUpdate, store) {
  // Your function code here
};  

const ai = {
  key: {  remoteJid: "status@broadcast", participant: "13135550002@s.whatsapp.net" },
  message: { extendedTextMessage: { text: 'Switch-Blade', } },
};

//const express = require('express')
//const PORT = process.env.PORT || 8080;
//const app = express()

//const sessionDir = path.join(__dirname, 'genux_session');
//if (!fs.existsSync(sessionDir)) {
  //  fs.mkdirSync(sessionDir, { recursive: true });
//}

//async function getSession() {
   // const credsPath = path.join(sessionDir, 'creds.json');
  //  if (!fs.existsSync(credsPath)) {
     //   if (!config.SESSION_ID) {
        //    throw new Error('Please add your session to SESSION_ID env !!');
       // }
        
       // const sessdata = config.SESSION_ID.replace(/GENUX-/g, "");
        
        //try {
           // const response = await fetch(`https://text.genux.me/api/texts?id=${sessdata}&raw=true`);
            
          //  if (!response.ok) {
              //  throw new Error(`HTTP error! status: ${response.status}`);
           // }
            
           // const data = await response.json();
            //fs.writeFileSync(credsPath, data.content);
           // console.log("Session downloaded ✅");
        // } catch (err) {
          //  console.error("Error downloading session:", err);
           // throw err;
       // }
   // }
//}


async function connectWA() {
  let { version, isLatest } = await fetchLatestBaileysVersion();
  const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');
  const dragon = makeWASocket({
    logger: pino({ level: "silent" }),
    printQRInTerminal: true,
    browser: Browsers.macOS("Desktop"),
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(
        state.keys,
        pino({ level: "fatal" }).child({ level: "fatal" })
      ),
    },
    markOnlineOnConnect: false,
    generateHighQualityLinkPreview: true,
  });

  store.bind(dragon.ev);
  setInterval(() => {
    store.writeToFile("./lib/src/store.json");
  }, 3000);

 dragon.ev.on("connection.update", async (update) => {
  const { connection, lastDisconnect } = update;

  try {
    if (connection === "close") {
      let reason;

      // Ensure lastDisconnect?.error is defined before using Boom
      if (lastDisconnect?.error) {
        const boomError = new Boom(lastDisconnect.error);
        reason = boomError.output?.statusCode; // Optional chaining used correctly
      }

      if (reason === DisconnectReason.badSession) {
        console.log(`Bad Session File, Please Delete Session and Scan Again`);
        connectWA();
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log("Connection closed, reconnecting....");
        connectWA();
      } else if (reason === DisconnectReason.connectionLost) {
        console.log("Connection Lost frosm Server, reconnecting...");
        connectWA();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log("Connection Replaced, Another New Session Opened, reconnecting...");
        connectWA();
      } else if (reason === DisconnectReason.loggedOut) {
        console.log(`Device Logged Out, Please Delete Session and Scan Again.`);
        connectWA();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("Restart Required, Restarting...");
        connectWA();
      } else if (reason === DisconnectReason.timedOut) {
        console.log("Connection TimedOut, Reconnecting...");
        connectWA();
      } else {
        console.log(`Unknown DisconnectReason: ${reason} | ${connection}`);
      }
    }

    if (
      update.connection == "connecting" ||
      update.receivedPendingNotifications == "false"
    ) {
      console.log(color(`\n🌿Connecting...`, "red"));
    }

    if (
      update.connection == "open" ||
      update.receivedPendingNotifications == "true"
    ) {
      console.log(color(` `, "magenta"));
      console.log(
        color(
          `🌿Connected to => ` + JSON.stringify(dragon.user, null, 2),
          "yellow"
        )
      );

     

    //  const inviteCode = 'BeWovnWKQ5u09BTqsoJ7jk';
    //  dragon.groupAcceptInvite(inviteCode);

      const metadata = await dragon.newsletterMetadata("jid", "120363401755639074@newsletter")	      
      if (metadata.viewer_metadata === null){
      await dragon.newsletterFollow("120363401755639074@newsletter")
      console.log(" CHANNEL FOLLOWRD DONE ")
      }	

      

    
    


      const generateGradientColors = () => {
        const generateHex = () =>
          `#${Math.floor(Math.random() * 0xffffff)
            .toString(16)
            .padStart(6, '0')}`;

        return {
          primary: generateHex(),
          secondary: generateHex(),
          tertiary: generateHex()
        };
      };

      const displayStyledText = async (text, options = {}) => {
        const colors = generateGradientColors();

        await cfonts.say(text, {
          // Modern font options
          font: 'block',        // More modern than 'chrome'

          // Gradient and color settings
          colors: [colors.primary, colors.secondary],
          gradient: [colors.primary, colors.secondary, colors.tertiary],
          independentGradient: true,
          transitionGradient: true,

          // Modern spacing and layout
          letterSpacing: 2,
          lineHeight: 1.2,
          space: true,
          maxLength: '0',

          // Clean background
          background: 'transparent',

          // Environment setting
          env: 'node',

          // Merge any custom options
          ...options
        });
      };

      // Usage example
      const displayBranding = async () => {
        await displayStyledText('QUEEN-DINU-MD');

        // Modern signature using chalk for subtle styling
        console.log(
          chalk.dim('[ ') +
          chalk.bold('POWERED BY QUEEN-DINU-MD IN LOD TEM') +
          chalk.dim(' ]')
        );
      };

      // Run the display
      displayBranding().catch(console.error);
    }
  } catch (err) {
    console.log("Error in Connection.update " + err);
    connectWA();
  }
}); 

     

  dragon.ev.on("creds.update", saveCreds);
  dragon.ev.on("messages.upsert", () => {});

  dragon.ev.on("messages.upsert", async (chatUpdate) => {
    mek = chatUpdate.messages[0];
    if (mek?.key?.remoteJid === 'status@broadcast') {
      try {
          const me = await dragon.decodeJid(dragon.user.id);

          const emojis = ['👙', '🖕',];
          const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];


          const participant = mek.key.participant || me;
          await dragon.sendMessage(
              mek.key.remoteJid,
              { react: { key: mek.key, text: randomEmoji } },
              { statusJidList: [participant, me] }
          );
        } catch (error) {
          console.error('Error reacting to status:', error);
      }
    }
  });

  //const id = m.key.server_id
     //       const heartEmojis = ["❤️", "🙏", "😮", "😪"];
       //     const randomHeart = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
          //  await dragon.newsletterReactMessage("120363364919754231@newsletter", id, randomHeart);

  dragon.ev.on("messages.upsert", async (chatUpdate) => {
    //console.log(JSON.stringify(chatUpdate, undefined, 2))
    try {
      mek = chatUpdate.messages[0];
      if (!mek.message) return;
      mek.message =
        Object.keys(mek.message)[0] === "ephemeralMessage"
          ? mek.message.ephemeralMessage.message
          : mek.message;
  mek = chatUpdate.messages[0]
        if(!mek.message) return

        if(config.AUTO_TYPING) {
        await dragon.sendPresenceUpdate('composing', mek.key.remoteJid);
        }
// alaways online

//======================================================================
if (config.ALLWAYS_OFFLINE === "true") {
  await dragon.sendPresenceUpdate('unavailable'); // Sets the bot's last seen status
}


    
      
      if (!dragon.public && !mek.key.fromMe && chatUpdate.type === "notify")
        return;
      if (mek.key.id.startsWith("Dragon") && mek.key.id.length === 16) return;
      if (mek.key.id.startsWith("BAE5")) return;
      m = await fucksmg(dragon, mek, store);

     

      if (config.AUTO_READ_MESSAGE) {
        await dragon.readMessages([m.key]);
      }
      require("./fucking")(dragon, m, chatUpdate, store);
      require('./lib/plugins')(dragon, m)

    } catch (err) {
      console.log(err);
    }
  });

  dragon.ev.on("group-participants.update", async (update) => {
    const { id, participants, action } = update;
    const groupMetadata = await dragon.groupMetadata(id);
    const groupName = groupMetadata.subject;

    let groupIconUrl =
      "https://miro.medium.com/v2/resize:fit:1400/0*5z6-qbmNcDW1Hk7m";

    participants.forEach(async (participant) => {
      let message = "";
      const getWelcome = () => global.WELCOME;
      if (action === "add") {
        const welcome = getWelcome();
        if (welcome === true) {
          message = `
┏━━━❮ Wa-bot ❯━━━┓  

*ʜᴇʏ @${participant.split("@")[0]}!* 👋  

ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ${groupName}`;
        }
      } else if (action === "remove") {
        const welcome = getWelcome();
        if (welcome === true) {
          message = `
┏━━━❮ Wa-bot ❯━━━┓

😔 *ɢᴏᴏᴅʙʏᴇ @${participant.split("@")[0]}!*  

ɢᴏᴏᴅ ʙʏᴇ ꜰʀᴏᴍ ${groupName}`;
        }
      }

      if (message) {
        const fgclink = {
          key: {
            participant: "0@s.whatsapp.net",
            remoteJid: "0@s.whatsapp.net",
          },
          message: {
            groupInviteMessage: {
              groupJid: "120363398829465928@g.us",
              inviteCode: "m",
              groupName: `Wa-bot`,
              caption: `Sandaru`,
            },
          },
        };
        await dragon.sendMessage(
          id,
          {
            document: fs.readFileSync("./yarn.lock"),
            mimetype:
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            fileName: "Paid only",
            caption: message,
          },
          { quoted: fgclink }
        );

        // await dragon.sendMessage(id, {
        //    image: { url: groupIconUrl },
        //    contextInfo: { mentionedJid: [participant] },
        //    caption: message,
        //  });
      }
    });
  });

  dragon.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };

  dragon.sendText = (jid, text, quoted = "", options) =>
    dragon.sendMessage(
      jid,
      {
        text: text,
        ...options,
      },
      {
        quoted,
        ...options,
      }
    );
  dragon.sendFile = async (
    jid,
    path,
    filename = "",
    caption = "",
    quoted,
    ptt = false,
    options = {}
  ) => {
    let type = await dragon.getFile(path, true);
    let { res, data: file, filename: pathFile } = type;

    if ((res && res.status !== 200) || file.length <= 65536) {
      try {
        throw {
          json: JSON.parse(file.toString()),
        };
      } catch (e) {
        if (e.json) throw e.json;
      }
    }

    let opt = {
      filename,
    };

    if (quoted) opt.quoted = quoted;
    if (!type) options.asDocument = true;

    let mtype = "",
      mimetype = type.mime,
      convert;

    if (
      /webp/.test(type.mime) ||
      (/image/.test(type.mime) && options.asSticker)
    )
      mtype = "sticker";
    else if (
      /image/.test(type.mime) ||
      (/webp/.test(type.mime) && options.asImage)
    )
      mtype = "image";
    else if (/video/.test(type.mime)) mtype = "video";
    else if (/audio/.test(type.mime)) {
      convert = await (ptt ? toPTT : toAudio)(file, type.ext);
      file = convert.data;
      pathFile = convert.filename;
      mtype = "audio";
      mimetype = "audio/ogg; codecs=opus";
    } else mtype = "document";

    if (options.asDocument) mtype = "document";

    delete options.asSticker;
    delete options.asLocation;
    delete options.asVideo;
    delete options.asDocument;
    delete options.asImage;

    let message = {
      ...options,
      caption,
      ptt,
      [mtype]: { url: pathFile },
      mimetype,
    };
    let m;

    try {
      m = await dragon.sendMessage(jid, message, { ...opt, ...options });
    } catch (e) {
      //console.error(e)
      m = null;
    } finally {
      if (!m)
        m = await dragon.sendMessage(
          jid,
          { ...message, [mtype]: file },
          { ...opt, ...options }
        );
      file = null;
      return m;
    }
  };
  dragon.getFile = async (PATH, save) => {
    let res;
    let data = Buffer.isBuffer(PATH)
      ? PATH
      : /^data:.*?\/.*?;base64,/i.test(PATH)
      ? Buffer.from(PATH.split, [1], "base64")
      : /^https?:\/\//.test(PATH)
      ? await (res = await getBuffer(PATH))
      : fs.existsSync(PATH)
      ? ((filename = PATH), fs.readFileSync(PATH))
      : typeof PATH === "string"
      ? PATH
      : Buffer.alloc(0);
    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
    let type = (await FileType.fromBuffer(data)) || {
      mime: "application/octet-stream",
      ext: ".bin",
    };
    filename = path.join(
      __filename,
      "../lib/src/" + new Date() * 1 + "." + type.ext
    );
    if (data && save) fs.promises.writeFile(filename, data);
    return {
      res,
      filename,
      size: await getSizeMedia(data),
      ...type,
      data,
    };
  };

  dragon.downloadAndSaveMediaMessage = async (
    message,
    filename,
    attachExtension = true
  ) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    trueFileName = attachExtension ? filename + "." + type.ext : filename;
    // save to file
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };

  dragon.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])  
    }
    let type = await FileType.fromBuffer(buffer)
    trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    // save to file
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
} 
  dragon.public = true;
}

connectWA();

//async function start() {
  //try {
    //  await getSession();
    //  await connectWA();
      
      //app.get('/', (req, res) => {
         // res.json({ status: 'Genux Server is Running' });
     // });

     // app.listen(PORT, () => {
         // console.log(`Genux Server is Running on PORT: ${PORT}`);
     // });
 // } catch (err) {
    //  console.error('Initialization error:', err);
     // process.exit(1);
 // }
//}

//start();
