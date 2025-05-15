const config = require("./config");
const util = require("util");
const yts = require("yt-search");
const axios = require("axios");
const DY_SCRAP = require('@dark-yasiya/scrap');
const dy_scrap = new DY_SCRAP();
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const speed = require('performance-now');
const { performance } = require('perf_hooks');
const { runtime, formatp } = require("./lib/darkcriminal");
const os = require("os");
const googleTTS = require("google-tts-api");
const { getGroupAdmins, sleep } = require("./lib/myfunc");
const { pickRandom,tiktokDl,formatSize } = require("./lib/mydesi")
const { getContentType, delay, downloadContentFromMessage } = require("@genuxofficial/nova");
const moment = require("moment-timezone")

const time = moment().tz("Asia/Colombo").format("HH:mm:ss")
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "Good night"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "Good afternoon"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "Good afternoon"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "Good morning"
} else {
ucapanWaktu = "hello"
}

module.exports = dragon = async (dragon, m, msg, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype === "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype === "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype === "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype === "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype === "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype === "InteractiveResponseMessage"
        ? JSON.parse(
            m.message.interactiveResponseMessage.nativeFlowResponseMessage
              .paramsJson
          )?.id
        : m.mtype === "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
          m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    const from = m.key.remoteJid;
    const args = body.trim().split(/ +/).slice(1);
    const text = (q = args.join(" "));
    const pushname = m.pushName || "Nimesh Piyumal";
    const botNumber = await dragon.decodeJid(dragon.user.id);
const fs = require("fs");
    const premium = JSON.parse(fs.readFileSync("./lib/premium.json"))

      const isPremium = premium.includes(m.sender)

    const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : config.PREFIX;
    const dragonbody = body.startsWith(pric);
    const isCommand = dragonbody
      ? body.replace(pric, "").trim().split(/ +/).shift().toLowerCase()
      : "";

    const isCreator = [botNumber, ...config.OWNER_NUMBER]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);

    const groupMetadata = m.isGroup
      ? await dragon.groupMetadata(m.chat).catch((e) => {})
      : "";
    const participants = m.isGroupp ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;

    if (!dragon.public) {
      if (isCreator && !m.key.fromMe) return;
    }

    if (!global.tempMailSessions) {
      global.tempMailSessions = new Map(); // Using Map for better session management
    }

    //async function reply(task) {
    // return dragon.sendMessage(from, { text: task, contextInfo:{
    // forwardingScore: 9999999,
    // isForwarded: true  }}, { quoted: m })
    // }

   

  

    // fake qute

const x = {
			key: {
				fromMe: false,
				participant: `13135550002@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": { "url": "https://h.top4top.io/p_3301ml5m70.jpg" },
					"itemCount": 9999,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `@ QUEEN-DINU-MD`,
					"orderTitle": " TamaRyuichi",
					"sellerJid": "6285727819741@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "9999",
					"totalCurrencyCode": "IDR"
				}
			}
		}


    const ftrolil = {
      key : {
      participant : '0@s.whatsapp.net'
      },
      message: {
      orderMessage: {
      itemCount : 1,
      status: 1,
      surface : 1,
      message: `DINU ID`, //
      orderTitle: `QUEEN-DINU-MD`,
      //thumbnail: log0, //Pic
      sellerJid: '0@s.whatsapp.net'
      
      }
      }
      }
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `13135550002@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': 'DINU ID', sendEphemeral: true}}}


    const fkontak1 = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        participant: "0@s.whatsapp.net",
        fromMe: false,
        id: "Naze",
      },
      message: {
        contactMessage: {
          displayName: "DINU ID",
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;Sandaru || author},;;;\nFN:DilINU ID || author}\nitem1.TEL;waid=${
            m.sender.split("@")[0]
          }:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
          sendEphemeral: false,
        },
      },
    };
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: body, //
orderTitle: `QUEEN-DINU-MD`,
sellerJid: '0@s.whatsapp.net'

}
}
}
    const fvent = { key: { fromMe: false, participant: "13135550002@s.whatsapp.net", ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "eventMessage": { "isCanceled": true, "name": body, "description": "...", "startTime": "1738760400" }}};
    const fdoc = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: { documentMessage: { title: `Wa-bot` } },
    };
    const qlocJpm = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: { locationMessage: { name: `QUEEN-DINU-MD`, jpegThumbnail: "" } },
    };
    const qtext = {
      key: { remoteJid: "status@broadcast", participant: "0@s.whatsapp.net" },
      message: { extendedTextMessage: { text: `QUEEN-DINU-MD` } },
    };

const admin = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363401755639074@newsletter',
    newsletterName: '',
    caption: body
}}}

const ping  = {
      key: {  remoteJid: "status@broadcast", participant: "13135550002@s.whatsapp.net" },
      message: { extendedTextMessage: { text: body, } },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        videoMessage: {
          title: "Wa-bot",
          seconds: "359996400",
          gifPlayback: "true",
          caption: "Wa-bot",
          jpegThumbnail: "",
        },
      },
    };
    const qaudio = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: { audioMessage: { seconds: 6000, ptt: false } },
    };
const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: 'test'}}}

const ai = { key : {
remoteJid: '13135550002@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363401755639074@newsletter',
    newsletterName: '',
    caption: body
}}}


    const qvoice = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: { audioMessage: { seconds: 26.4, ptt: true } },
    };
    const flokasi = {
key: {
        participant: "0@s.whatsapp.net",
      },
      
      message: {
        locationMessage: {
          name: `.ping`,
          jpegThumbnail: "",
        },
      },
    };
    const ftoko = {
      key: {
      fromMe: false,
      participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})
      },
      message: {
      "productMessage": {
      "product": {
      "productImage":{
      "mimetype": "image/jpeg",
     // "jpegThumbnail": log0 //The picture
      },
      "title": `DINU MD`, 
      "description": `QUEEN-DINU-MD`, 
      "currencyCode": "USD",
      "priceAmount1000": "2000",
      "retailerId": `R`,
      "productImageCount": 1
      },
      "businessOwnerJid": `0@s.whatsapp.net`
      }
      }
      } 

    const fgclink = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "0@s.whatsapp.net",
      },
      message: {
        groupInviteMessage: {
          groupJid: "120363366508703152@g.us",
          inviteCode: `QUEEN-DINU-MD`,
          groupName: `Join Support`,
          caption: `Wa-bot`,
          jpegThumbnail: "",
        },
      },
    };
    const fbug2 = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: `test`,
          caption: `hi`,
        },
      },
    };
    
    const frpayment = {
      key: {
        remoteJid: '0@s.whatsapp.net',
        fromMe: false,
        id: `${config.OWNER_NAME}`,
        participant: '0@s.whatsapp.net'
      },
      message: {
        requestPaymentMessage: {
          currencyCodeIso4217: "USD",
          amount1000: 999999999,
          requestFrom: '0@s.whatsapp.net',
          noteMessage: {
            extendedTextMessage: {
              text: `QUEEN-DINU-MD`
            }
          },
          expiryTimestamp: 999999999,
          amount: {
            value: 91929291929,
            offset: 1000,
            currencyCode: "INR"
          }
        }
      }
    }

if (budy.trim() === 'Hi') {
  return dragon.sendMessage(m.chat, {
        audio: { url: 'https://files.catbox.moe/72uhks.mp3' },
        mimetype: 'audio/mp4',
        ptt: true
    }, { quoted: ai })
}

if (budy.trim() === 'hi') {
  return dragon.sendMessage(m.chat, {
        audio: { url: 'https://files.catbox.moe/72uhks.mp3' },
        mimetype: 'audio/mp4',
        ptt: true
    }, { quoted: ai })
}

if (budy.trim() === 'Hm') {
  return dragon.sendMessage(m.chat, {
        audio: { url: 'https://files.catbox.moe/6hkolb.mp3' },
        mimetype: 'audio/mp4',
        ptt: true
    }, { quoted: ai })
}

if (budy.trim() === 'Gn') {
  return dragon.sendMessage(m.chat, {
        audio: { url: 'https://files.catbox.moe/6hkolb.mp3' },
        mimetype: 'audio/mp4',
        ptt: true
    }, { quoted: ai })
}

if (budy.trim() === 'Bye') {
  return dragon.sendMessage(m.chat, {
        audio: { url: 'https://files.catbox.moe/6hkolb.mp3' },
        mimetype: 'audio/mp4',
        ptt: true
    }, { quoted: ai })
}

if (budy.trim() === 'bye') {
  return dragon.sendMessage(m.chat, {
        audio: { url: 'https://files.catbox.moe/6hkolb.mp3' },
        mimetype: 'audio/mp4',
        ptt: true
    }, { quoted: ai })
}

if (budy.trim() === 'Gm') {
  return dragon.sendMessage(m.chat, {
        audio: { url: 'https://files.catbox.moe/6hkolb.mp3' },
        mimetype: 'audio/mp4',
        ptt: true
    }, { quoted: ai })
}

if (budy.trim() === 'hm') {
  return dragon.sendMessage(m.chat, {
        audio: { url: 'https://files.catbox.moe/6hkolb.mp3' },
        mimetype: 'audio/mp4',
        ptt: true
    }, { quoted: ai })
}

if (budy.trim() === 'Hello') {
  return dragon.sendMessage(m.chat, {
        audio: { url: 'https://files.catbox.moe/72uhks.mp3' },
        mimetype: 'audio/mp4',
        ptt: true
    }, { quoted: ai })
}

if (budy.trim() === 'Mk') {
  return dragon.sendMessage(m.chat, {
        audio: { url: 'https://files.catbox.moe/72uhks.mp3' },
        mimetype: 'audio/mp4',
        ptt: true
    }, { quoted: ai })
}

if (budy.trim() === 'හායි') {
  return dragon.sendMessage(m.chat, {
        audio: { url: 'https://files.catbox.moe/72uhks.mp3' },
        mimetype: 'audio/mp4',
        ptt: true
    }, { quoted: ai })
}

if (budy.trim() === 'හෙලෝ') {
  return dragon.sendMessage(m.chat, {
        audio: { url: 'https://files.catbox.moe/72uhks.mp3' },
        mimetype: 'audio/mp4',
        ptt: true
    }, { quoted: ai })
}









 

if (config.ANTI_LINK && !isCreator && m.isBotAdmin && !m.isAdmin) {
	if (budy.match(/chat\.whatsapp\.com\//gi)) {
		await dragon.sendMessage(m.chat, {
			delete: {
				remoteJid: m.chat,
				fromMe: false,
				id: m.id,
				participant: m.sender
			}
		})

		await dragon.relayMessage(m.chat, {
			extendedTextMessage: {
				text: `Detected Link *@${m.sender.split('@')[0]}* Send a Group Link\nSorry, Link Must Be Removed.`,
				contextInfo: {
					mentionedJid: [m.key.participant],
					isForwarded: true,
					forwardingScore: 1,
					quotedMessage: { conversation: '*Anti Link❗*' },
					...m.key
				}
			}
		}, {})
	}
}






    async function reply(teks, id = m.chat) {
      try {
        await dragon.sendMessage(
          id,
          {
            document: fs.readFileSync("./package.json"),
            fileName: "QUEEN-DINU-MD",
            fileLength: 99999999999999,
            mimetype: "image/png",
            jpegThumbnail: fs.readFileSync("./lib/bdbhse (2).jpg"),
            caption: "\n" + teks,
          },
          { quoted: m, ephemeralExpiration: 86400 }
        );
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  

    switch (isCommand) {
      case "groupowner": {
        if (groupOwner) {
          dragon.sendMessage(
            m.chat,
            {
              text: `This Group was Created by @${groupOwner.split("@")[0]}👑`,
              contextInfo: {
                mentionedJid: [groupOwner],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: `Wa-bot`,
                  body: `Dinu ID`,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync("./lib/wa.jpg"), // Ensure file exists
                  sourceUrl: `https://youtube.com/shorts/0fOVOgbvB00?si=DBi6_PXU8t286zww`,
                },
              },
            },
            { quoted: m }
          );
        } else {
          console.error("groupOwner is not defined.");
        }
        break;
      }


      case 'kk': {
        if (!isCreator) return reply('Owner Command Only!');
        if (!text || !text.includes(",")) {
            return reply(`Use like this:\n.channelreact <channel-link>,<emoji>\n\nExample:\n.channelreact https://whatsapp.com/channel/1234567890123456/ABCDE,🔥`);
        }
    
        if (!isCreator) return reply('*❌ Only the owner can use this command!*');
    
        try {
            let [link, react] = text.split(",").map(item => item.trim());
            const channelId = link.split('/')[4];
            const messageId = link.split('/')[5];
    
            const res = await dragon.newsletterMetadata("invite", channelId);
            await dragon.newsletterReactMessage(res.id, messageId, react);
        } catch (e) {
            console.error(e);
            reply('❌ Failed to react: ' + e.message);
        }
        break;
    }
    

 case "cinesub34":
        case "movie67": {
          try {
            await dragon.sendMessage(from, { react: { text: `🕐`, key: m.key } });
        
            const searchQuery = encodeURIComponent(text);
            const { data } = await axios.get(`https://apis.davidcyriltech.my.id/movies/search?query=${searchQuery}`);
        
            if (!data.status || !data.results.length) {
              return m.reply("❗ No movies found. Try a different name.");
            }
        
            const movie = data.results[0]; // Take the first search result
            let caption = `🎬 *${movie.title}*\n📅 *Year:* ${movie.year}\n⭐ *${movie.imdb}*\n\n📥 Choose quality:\n\n*1.* 720p\n*2.* 480p\n\n_Reply with the number!_`;
        
            const qlive = {
              key: {
                participant: "0@s.whatsapp.net",
                ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
              },
              message: {
                liveLocationMessage: {
                  caption: `QUEEN-DINU-MD`,
                  jpegThumbnail: "",
                },
              },
            };
        
            const waitMsg = await dragon.sendMessage(
              from,
              { text: "*Loading*...80%" },
              { quoted: m}
            );
        
            const sentMessage = await dragon.sendMessage(
              m.chat,
              {
                image: { url: movie.image },
                caption: caption,
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  externalAdReply: {
                    title: "Simple Wa-Bot",
                    body: "Movie Download",
                    mediaType: 2,
                    previewType: 0,
                    renderLargerThumbnail: true,
                    thumbnailUrl: movie.image,
                    sourceUrl: movie.link,
                  },
                },
              },
              { quoted: ai }
            );
        
            // Now wait for user reply
            dragon.ev.on("messages.upsert", async (chatUpdate) => {
              try {
                const mek = chatUpdate.messages[0];
                if (
                  mek.message &&
                  mek.message.extendedTextMessage &&
                  mek.message.extendedTextMessage.contextInfo &&
                  mek.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id
                ) {
                  const comm = mek.message.extendedTextMessage.text.trim();
                  if (comm !== "1" && comm !== "2") {
                    return m.reply("❗ Invalid option. Reply with *1* or *2*.");
                  }
        
                  await dragon.sendMessage(from, { react: { text: `🎬`, key: m.key } });
        
                  // Now fetch download links
                  const { data: downloadData } = await axios.get(`https://apis.davidcyriltech.my.id/movies/download?url=${encodeURIComponent(movie.link)}`);
                  
                  if (!downloadData.status || !downloadData.movie) {
                    return m.reply("❗ Failed to fetch download links.");
                  }
        
                  let chosenQuality = comm === "1" ? "HD 720p" : "SD 480p";
                  const found = downloadData.movie.download_links.find(link => link.quality === chosenQuality);
        
                  if (!found) {
                    return m.reply(`❗ ${chosenQuality} download not available.`);
                  }
        
                  await dragon.sendMessage(
                    from,
                    {
                      document: { url: found.direct_download },
                      mimetype: "video/mp4",
                      fileName: `${downloadData.movie.title} (${found.quality}).mp4`,
                    },
                    { quoted: mek }
                  );
        
                  await dragon.sendMessage(from, { react: { text: `✅`, key: m.key } });
                }
              } catch (err) {
                console.error("Error handling user reply:", err);
              }
            });
        
          } catch (error) {
            console.error("Error in movie command:", error);
            m.reply("❌ An error occurred while processing your request.");
          }
        }
        break;
        


case "instragram":
case "ig": {
    if (!text) return reply("link?");
    if (!text.startsWith('https://')) return reply("Enter the valid link Ex; https://www.instagram.com/reel/DD6q97IuzxD/?igsh=YzljYTk1ODg3Zg==");
    
    await dragon.sendMessage(m.chat, { react: { text: '🕖', key: m.key } });
    
    try {
        const { data } = await axios.get(`https://apis.davidcyriltech.my.id/instagram?url=${text}`);
        
        if (!data.status) return reply("Error! Result Not Found");
        
        await dragon.sendMessage(m.chat, { 
            video: { url: data.downloadUrl }, 
            mimetype: "video/mp4", 
            caption: "*Done ✅*" 
        }, { quoted: m });
        
        await dragon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (e) {
        reply("Error");
    }
}
break;

case "flux":
  {
    if (!text) return reply("Please provide a text");
    await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });


    await dragon.sendMessage(
      from,
      {
        image: {
          url: `https://apis.davidcyriltech.my.id/fluxpro?prompt=${text}`,
        },
      },
      { quoted: ai}
    );
  }
  break;


  case "book":
  {
    if (!text) return reply("Please provide a text");
    await dragon.sendMessage(m.chat, { react: { text: '📖', key: m.key } });


    await dragon.sendMessage(
      from,
      {
        image: {
          url: `https://apis.davidcyriltech.my.id/generate/book?text=${text}&size=50`,
        },
      },
      { quoted: fsaluran }
    );
  }
  break;


        case "imgai":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.genux.me/api/ai/ai-img?query=${text}&apikey=GENUX-SANDARUX`,
              },
            },
            { quoted: m }
          );
        }
        break;

// logo menu

 case "glow":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/advancedglow?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "1917":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/1917style?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "amongus":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/amongustext?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "angle":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/angeltext?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "blackpink":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/blackpinklogo?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "cartoon":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/cartoonstyle?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "glitch":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/glitchtext?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "graffiti":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/graffititext?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "bear":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/logomaker?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "neon":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/makingneon?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "naruto":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/narutotext?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "neon2":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `hhttps://api.suraweb.online/ephoto/neonglitch?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "paper":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/papercutstyle?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "pixel":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/pixelglitch?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "rainy":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/rainytext?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "royal":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/royaltext?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "sand":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/sandsummer?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "underwater":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/underwatertext?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "write":
        {
          await dragon.sendMessage(m.chat, { react: { text: '🎇', key: m.key } });

          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://api.suraweb.online/ephoto/writetext?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

        case "qr":
        {
          await dragon.sendMessage(from, { react: { text: `♣`, key: m.key } });
          if (!text) return reply("Please provide a text");

          await dragon.sendMessage(
            from,
            {
              image: {
                url: `https://apis.davidcyriltech.my.id/tools/qrcode?text=${text}`,
              },
            },
            { quoted: ai }
          );
        }
        break;

       

 case "emix":
        {
          if (!text) return reply("Please Give Me to two emojies");
await dragon.sendMessage(from, { react: { text: `😜`, key: m.key } });
        
          await dragon.sendMessage(
            from,
            {
              sticker: {
                url: `https://api.genux.me/api/other/emix?query=${text}&apikey=GENUX-SANDARUX`,
              },
            },
            { quoted: m }
          );
        }
        break;

case "xnxx":
case "xnxxvideo":
  if (!config.PREMIUM.includes(m.sender.split('@')[0])) {
    return reply('ම්ම් වැල් බලන්න ආසද 🫣 එහෙනම් පොඩිම පොඩි දෙයක් තියෙන්නෙ ඉන් පසු Premium Access ලබා ගන්න. UNLIMITED වැල් ගන්න Puluwan')
}
    if (!text) return reply(`❌ Please provide a Name.`);
    if (!m.isGroup) return reply("Group only!");

    try {
        await dragon.sendMessage(from, {
            react: { text: "🎥", key: m.key },
        });

        const response = await axios.get(`https://api.genux.me/api/download/xnxx-download?query=${encodeURIComponent(text)}&apikey=GENUX-SANDARUX`);
        const data = response.data; 

        const wait = await dragon.sendMessage(
            from,
            { text: "Downloading.... " },
            { quoted: m }
        );

        if (!data || !data.result || !data.result.files) {
            return reply("❌ No results found or invalid response structure.");
        }

        await dragon.sendMessage(from, {
            image: { url: data.result.image },
            caption: `💬 *Title*: ${data.result.title}\n\n👀 *Duration*: ${data.result.duration}\n\n🗯 *Description*: ${data.result.description}\n\n💦 *Tags*: ${data.result.tags}`,
            contextInfo: {
                forwardingScore: 10,
                isForwarded: true,
            }
        });

        await dragon.sendMessage(
            from,
            {
                video: { url: data.result.files.high },
                fileName: data.result.title + ".mp4",
                mimetype: "video/mp4",
                caption: "*Done ✅*",
                contextInfo: {
                    forwardingScore: 10,
                    isForwarded: true,
                },
            },
            { quoted: m }
        );

        await dragon.sendMessage(from, {
            text: `*Uploaded✅*`,
            edit: wait.key,
        });

    } catch (error) {
        console.error(error);
        reply("❌ An error occurred while fetching the video.");
    }
    break;

case 'menu2': {
    try {
        await dragon.sendMessage(m.chat, {
            image: { url: 'https://files.catbox.moe/5onr90.jfif' },
            caption: 'Reply he button below',
            footer: `QUEEN-DINU-MD`,
            buttons: [
                {
                    buttonId: `.owner`,
                    buttonText: {
                        displayText: "Owner"
                    },
                    type: 1
                },
                {
                    buttonId: `.ping`,
                    buttonText: {
                        displayText: "Speed"
                    },
                    type: 1
                }
            ],
            headerType: 1,
            viewOnce: true
        });
    } catch (error) {
        console.error(error);
        reply("⚠️ Error: " + error.message);
    }
    break;
}

case 'alive2': {
    try {
        await dragon.sendMessage(m.chat, {
            image: { url: 'https://files.catbox.moe/5onr90.jfif' },
            caption: 'Hey I am alive now',
            footer: `@Test bot`,
            buttons: [
                {
                    buttonId: `.owner`,
                    buttonText: {
                        displayText: "Owner"
                    },
                    type: 1
                },
                {
                    buttonId: `.ping`,
                    buttonText: {
                        displayText: "Speed"
                    },
                    type: 1
                }
            ],
            headerType: 1,
            viewOnce: true
        });
    } catch (error) {
        console.error(error);
        reply("⚠️ Error: " + error.message);
    }
    break;
}



    case 'alive': {
      await dragon.sendMessage(from, {
        react: { text: "💗", key: m.key },
    });
      let k = `Hi ${pushname}, Terimakasih telah membuka feedback menu, Jika ingin mengirim pesan atau laporan bug yang terjadi di script ini kamu bisa langsung execute command dibawah👇
  
  ▢ .sendmsg <pesannya>
      
  *<Social Media>*
  Whatsapp: +94701176587
  Telegram: t.me/dinu2007
  Youtube: https://youtube.com/@kyy-nev-antibanting?si=nbcSXI2ZfwCQSX
  CYBER DINU ID Wa: https://whatsapp.com/channel/0029VbAWWH9BFLgRMCXVlU38
  
  [ DINU ID ]
  h`
  
      await dragon.sendMessage(m.chat, {
          product: {
              productImage: { url: "https://files.catbox.moe/gvtt79.jpg" }, 
              productImageCount: 1,
              title: "Hey I am Alive Now", 
              description: "♦️", 
              priceAmount1000: 9999999999, 
              currencyCode: "USD", 
              retailerId: "100000"
          },
          businessOwnerJid: '94701176587@s.whatsapp.net', 
          caption: k, 
          title: "Kyy Nev - Soft & Wet"
      }, {
          quoted: x
      });
      
      break;
    }

        
           case "hub":
case "pornhub":
 {
  try {
    await dragon.sendMessage(from, {
      react: { text: `🍆`, key: m.key },
    });

  if (!isPremium) return reply('Only Premium User')

    if (!text) return reply("❗ Please enter the video name.");

    // Perform search using the provided API (xham.vercel.app search API)
    const search = await axios.get(`https://xham.vercel.app/api/phs?q=${encodeURIComponent(text)}`);
    const results = search.data;

    if (!results || results.length === 0) return reply("❌ No results found!");

    let caption = `🍑 *Pornhub Search Result for:* ${text}\n\n`;
    let no = 1;

    // List top 5 results from search
    results.slice(0, 5).forEach((video) => {
      caption += `*No:* ${no++}\n`;
      caption += `*Title:* ${video.title || "N/A"}\n`;
      caption += `*Views:* ${video.views || "N/A"}\n`;
      caption += `*Duration:* ${video.duration || "N/A"}\n`;
      caption += `─────────────────\n\n`;
    });

    // Ask the user to choose a video by replying with a number
    const sentMessage = await dragon.sendMessage(from, {
      text: caption + `🔻 *Reply with a number (1-5) to download*`,
      contextInfo: { forwardingScore: 9999, isForwarded: true },
    }, { quoted: m });

    const messageListener = async (chatUpdate) => {
      try {
        const mek = chatUpdate.messages[0];
        if (!mek?.message?.extendedTextMessage?.contextInfo ||
            mek.message.extendedTextMessage.contextInfo.stanzaId !== sentMessage.key.id) {
          return;
        }

        const selectedNum = mek.message.extendedTextMessage.text.trim();
        if (!['1', '2', '3', '4', '5'].includes(selectedNum)) {
          await dragon.sendMessage(from, { react: { text: `❌`, key: mek.key } });
          return reply("Please select a valid number (1-5).");
        }

        const video = results[parseInt(selectedNum) - 1];

        // Fetch download URL using the download API
        const downloadResponse = await axios.get(`https://xham.vercel.app/api/phdl?url=${encodeURIComponent(video.url)}`);
        const downloadData = downloadResponse.data;

        if (!downloadData || !downloadData.format || downloadData.format.length === 0) {
          return reply("❌ No downloadable video formats found.");
        }

        // Assuming only 240p is available (based on the given data)
        const format = downloadData.format.find(f => f.resolution === "240") || downloadData.format[0];

        await dragon.sendMessage(from, { react: { text: `⏳`, key: mek.key } });

        const downloadingMsg = await dragon.sendMessage(from, {
          text: `📥 Downloading: ${video.title.trim()}...`,
        }, { quoted: mek });

        await dragon.sendMessage(from, {
          video: { url: format.download_url, mimetype: "video/mp4" },
          caption: `✅ *Downloaded:* ${video.title.trim()}\n🎥 *Quality:* ${format.resolution}`,
          fileName: `${video.title.trim()}.mp4`,
          contextInfo: {
            forwardingScore: 999999,
            isForwarded: true,
            externalAdReply: {
              title: video.title,
              body: "Powered by QUEEN-DINU-MD",
              thumbnailUrl: video.thumbnail || 'https://files.catbox.moe/ym74xc.jfif',
              mediaType: 1
            }
          }
        }, { quoted: mek });

        await dragon.sendMessage(from, { react: { text: `✅`, key: mek.key } });

      } catch (error) {
        console.error("Download error:", error);
        await dragon.sendMessage(from, {
          text: `❌ Failed: ${error.message}`,
          quoted: m
        });
        await dragon.sendMessage(from, { react: { text: `❌`, key: m.key } });
      }
    };

    dragon.ev.on("messages.upsert", messageListener);

    // Remove "fetching" message after 30s
    setTimeout(async () => {
      try {
      } catch (e) {
        console.log("Could not delete wait message");
      }
    }, 30000);

  } catch (error) {
    console.error("Initial error:", error);
    await dragon.sendMessage(from, {
      text: "❌ Error processing your request",
      quoted: m
    });
  }
  break;
}

            

            

                case 'mediafire': {
                  await dragon.sendMessage(from, { react: { text: `🗂`, key: m.key } });
                  
                  if (!text) return reply(`Example: https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`);
              
                  try {
                      // Fetch data from API
                      const { data } = await axios.get(`https://apis.davidcyriltech.my.id/mediafire?url=${encodeURIComponent(text)}`);
                      
                      if (!data || !data.downloadLink) {
                          return m.reply('Invalid API response or no download link found');
                      }
              
                      const wait = await dragon.sendMessage(from, { text: "Downloading...." }, { quoted: m });
              
                      // Send the file
                      await dragon.sendMessage(from, {
                          document: { url: data.downloadLink },
                          mimetype: data.mimeType || 'application/zip',
                          fileName: data.fileName || `file_${Date.now()}.zip`, 
                          caption: `*MediaFire Download*\n\n` +
                                   `📁 File: ${data.fileName || 'Unknown'}\n` +
                                   `📦 Size: ${data.size || 'Unknown'}\n` +
                                   `👤 Creator: Genux api || 'Unknown'}`
                      }, { quoted: m });
              
                      // Edit the message to confirm upload
                      await dragon.sendMessage(from, { text: `*Uploaded Successfully ✅*`, edit: wait.key });
              
                  } catch (error) {
                      console.error('Error downloading MediaFire file:', error);
                      m.reply(`Failed to download the file. ${error.message || 'Please check the link and try again.'}`);
                  }
              }
              break;
      

      case "bk":
      case "block":
        {
          if (!isCreator) return m.reply(mess.owner);
          if (!text && !m.quoted) {
            m.reply(`Ex : .block 94xxx`);
          } else {
            const numbersOnly = m.isGroup
              ? text
                ? text.replace(/\D/g, "") + "@s.whatsapp.net"
                : m.quoted?.sender
              : m.chat;
            await dragon
              .updateBlockStatus(numbersOnly, "block")
              .then((a) => m.reply(mess.done))
              .catch((err) => m.reply("Error"));
          }
        }
        break;

      case "t":
        {
          await dragon.sendMessage(from, { react: { text: "⬇", key: m.key } });

          let caption = "done";

          const frpayment = {
            key: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: `${global.ownername}`,
              participant: "0@s.whatsapp.net",
            },
            message: {
              requestPaymentMessage: {
                currencyCodeIso4217: "USD",
                amount1000: 999999999, // check the correct value
                requestFrom: "0@s.whatsapp.net",
                noteMessage: {
                  extendedTextMessage: {
                    text: caption,
                  },
                },
                expiryTimestamp: Date.now() + 24 * 60 * 60 * 1000, // Expiry time set to 24 hours
                amount: {
                  value: "91929291929", // INR amount
                  offset: 1000,
                  currencyCode: "INR",
                },
              },
            },
          };

          // Ensure 'from' and 'm.key' are properly initialized
          await dragon.sendMessage(from, {
            quoted: frpayment,
          });
        }
        break;



     
        case "vps": case "panel": {
          await dragon.sendMessage(m.chat, { react: { text: `🚀`, key: m.key } });
      
         
          var link = `*\`DIGITAL OCEAN VPS\`*
      
      
🗓30 DAY PRICE LIST
      
 ☁️1GB - Rs.350.00
 ☁️2GB - Rs.450.00
 ☁️4GB - Rs.700.00
      
Buy: t.me/dinudinu2007
      
*\`PANEL\`*
${readmore}

 ➪ RESELLER PANEL Rs.1500.00
 ➪ ADMIN PANEL Rs.1000.00
 ➪ OWNER PANEL   Rs.2000.00
 ➪ PT PANEL Rs.3000.00
 ➪ PANEL 1GB-12GB
 ➪ PANEL UNLIMITED
 ➪ (BUY PT PANEL DPT 2 SERVER)
      
🚀 DIGITAL OCEAN SERVER 🚀
      
❗ANTI DELAY!! SERVER PRIVATE
      
❗NONSTOP WORKING
      
❗HIGH SPEED
      
Buy: *http://wa.me/+94727163302?text=@▁Hi_Panel👀🤍🍃*
      `
      
          return reply(link)
          }
        
          break
        
    
case 'hidetag':
    {
        const participants = (await dragon.groupMetadata(m.chat)).participants || [];
        
        dragon.sendMessage(m.chat, {
            text: q ? q : '',
            mentions: participants.map(a => a.id)
        }, {
            quoted: ai
        });
    }
    break;

     

      case "tagall":
        await dragon.sendMessage(from, { react: { text: `🚻`, key: m.key } });
        if (!m.isGroup) return reply(mess.group);
        if (!isAdmins && !isgroupAdmins && !isCreator) return reply(mess.admin);
        if (!isCreator && !isAdmins && !isgroupAdmins)
          return reply(mess.botAdmin);
        let teks = `*Done ✅*\n\n`;
        for (let mem of participants) {
          teks += ` @${mem.id.split("@")[0]}\n`;
        }
        dragon.sendMessage(
          m.chat,
          {
            text: teks,
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: fvent,
          }
        );
        break;

      case "runtime":
        {
          await dragon.sendMessage(from, { react: { text: `❓`, key: m.key } });
          const time = moment().tz("Asia/Colombo").format("HH:mm:ss");
          const date = moment().tz("Asia/Colombo").format("DD/MM/YYYY");

          let caption = `*Uptime* - ${runtime(process.uptime())}`;

          await dragon.sendMessage(from, { text: caption }, { quoted: fvent });
        }
        break;

  case "apk": {
    if (!text) return reply("❗ Please provide a search query.\n\n📌 Usage: apk <query>");

    try {
        // React with loading
        await dragon.sendMessage(m.chat, { react: { text: '🕖', key: m.key } });

        // Fetch APK details from API
        const { data } = await axios.get(`https://apis.davidcyriltech.my.id/download/apk?text=${encodeURIComponent(text)}`);
        console.log("API Response:", JSON.stringify(data, null, 2));

        // If API fails
        if (!data.success) {
            return reply("❌ Couldn't find the APK. Try a different app name.");
        }

        // Send APK info
        await dragon.sendMessage(m.chat, {
            image: { url: data.thumbnail },
            caption: `💬 *Name*: ${data.apk_name}\n\n👤 *Uploader*: DINU ID`,
            contextInfo: {
                forwardingScore: 10,
                isForwarded: true
            },
            quoted: ai
        });

        // Send APK file
        await dragon.sendMessage(m.chat, {
            document: { url: data.download_link },
            fileName: `${data.apk_name}.apk`,
            mimetype: 'application/vnd.android.package-archive',
            quoted: m
        });

        // React success
        await dragon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (error) {
        console.error("APK Fetch Error:", error);
        await dragon.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        return reply(`⚠️ Error occurred: ${error.message}`);
    }
    break;
}

   
     

    
      case "repo":
        case "sc":
        case "script": {
            // React to the message with an emoji
            await dragon.sendMessage(m.chat, { react: { text: `🧩`, key: m.key } });
        
            // Define the message text
            const xtexg = `*\`乂 SCRIPT 乂\`*\n\nQUEEN-DINU-MD Full Base For Sale ☺️💗

Simple WhatsApp bot 

Antidelete
Auto status seen 
Auto status reaction 
Status Download (.save)
Number reply Menu
Number reply song cmd
Yt Video Download (URL or Query)
Sticker Cmd
Ai Cmd
Xnxx Download Pramium Acxes Method
Xvideo Download AND Pramium Acxes Method
Xnxx Download Pramium Acxes Method
${readmore}
Simple Non button base and New button😜
And More

කැමති විදිහට ඔයාගෙ නම් දාලා edit කරගන්න පුළුවන් Full decript 🤩

Price Rs *500* (EZ cash only) 

Buy Via wa.me/701176587`;
        
            // Send a document with additional details
            await dragon.sendMessage(m.chat, {
                document: fs.readFileSync("./package.json"), // Read the file
                fileLength: 1000000000000, // Set file length (arbitrary large number)
                pageCount: 999, // Set page count
                fileName: ucapanWaktu, // Set file name
                mimetype: 'application/msword', // Set MIME type
                jpegThumbnail: fs.readFileSync("./lib/blade.webp"), // Set thumbnail
                caption: xtexg, // Set caption
               
                    mentionedJid: [m.sender], // Mention the sender
                    isForwarded: true // Mark as forwarded
                
            }, { quoted: frpayment }); // Quote the original message
        
            break;
        }

        // group settings

        case 'promote':
          await dragon.sendMessage(from, { react: { text: `🕓`, key: m.key } });

          if (!m.isGroup) return m.reply('group cmd')
            if (!m.isAdmin) return m.reply('admin only')
            if (!m.isBotAdmin) return m.reply('owner only')
          let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          await dragon.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
          reply('Done')
          break

          case 'demote':
            await dragon.sendMessage(from, { react: { text: `🕓`, key: m.key } });

            if (!m.isGroup) return reply('group cmd')
              if (!m.isAdmin) return reply('admin only')
              if (!m.isBotAdmin) return reply('owner only')
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await dragon.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                reply('Done')
                break

                case 'kick':
                  await dragon.sendMessage(from, { react: { text: `🕓`, key: m.key } });
                  if (!m.isGroup) return m.reply('group cmd')
                    if (!m.isAdmin) return m.reply('admin only')
                    if (!m.isBotAdmin) return m.reply('owner only')
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await dragon.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                reply('Done....')
                break

                case 'opentime':
                  await dragon.sendMessage(from, { react: { text: `🕓`, key: m.key } });
                  if (!m.isGroup) return m.reply('group cmd')
                    if (!m.isAdmin) return m.reply('admin only')
                    if (!m.isBotAdmin) return m.reply('owner only')
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    dragon.groupSettingUpdate(m.chat, 'not_announcement')
                    reply('Group open Now ')
                }, timer)
                break

                case 'closetime':
                  await dragon.sendMessage(from, { react: { text: `🕓`, key: m.key } });
                  if (!m.isGroup) return m.reply('group cmd')
                    if (!m.isAdmin) return m.reply('admin only')
                    if (!m.isBotAdmin) return m.reply('owner only')
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    dragon.groupSettingUpdate(m.chat, 'announcement')
                    reply('Group closed Now')
                }, timer)
                break

                case 'group':
            case 'grup':
            if (!m.isGroup) return m.reply('group cmd')
              if (!m.isAdmin) return m.reply('admin only')
              if (!m.isBotAdmin) return m.reply('owner only')
                if (args[0] === 'close') {
                    await dragon.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Success Closing Group`))
                } else if (args[0] === 'open') {
                    await dragon.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Success Opening Group`))
                } else {
                    reply(`Mode open/close`)
                }
            break

                case 'setnamegc':
            case 'setsubject':
              await dragon.sendMessage(from, { react: { text: `🕓`, key: m.key } });
              if (!m.isGroup) return m.reply('group cmd')
                if (!m.isAdmin) return m.reply('admin only')
                if (!m.isBotAdmin) return m.reply('owner only')
                if (!text) return reply('Text ?')
                await dragon.groupUpdateSubject(m.chat, text)
                reply('Succesfully Changed group name')
                break

                case 'linkgroup':
                  case 'linkgrup':
                  case 'linkgc':
                  case 'gclink':
                  case 'grouplink':
                  case 'gruplink':
                    await dragon.sendMessage(from, { react: { text: `🕓`, key: m.key } });

                    if (!m.isGroup) return m.reply('group cmd')
                      let response = await dragon.groupInviteCode(m.chat)
                      dragon.sendText(m.chat, `👥 *GROUP LINK*\n\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                          detectLink: true
                      })
                  break

                  //auto send msg


case 'fo': {
    if (!isCreator) return reply('Owner Command');
    if (!text) return m.reply(`Enter number and type (text/image/video).\n\nExamples:\n.send 9476xxxxxxx text Hello\n.send 9476xxxxxxx image (reply image)\n.send 9476xxxxxxx video (reply video)\n.send 1234567890-1234567890@g.us text Hello`);

    const [num, type, ...msgParts] = text.split(' ');
    const number = num.replace(/[^0-9\-@g\.us]/g, ''); // Allow group JIDs with '@g.us'
    const msg = msgParts.join(' ').trim();

    if (!number || isNaN(number.replace('@s.whatsapp.net', '')) && !number.endsWith('@g.us')) return m.reply('Please enter a valid number or group JID.');
    if (number.includes('+')) return m.reply(`Enter the number without the '+' symbol`);
    if (!type || !['text', 'image', 'video'].includes(type)) return m.reply('Type must be "text", "image", or "video"');

    const fkontak = {
        key: {
            remoteJid: "0@s.whatsapp.net",
            participant: "0@s.whatsapp.net",
            fromMe: false,
            id: "Naze",
        },
        message: {
            contactMessage: {
                displayName: "Sandaru",
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;Sandaru;;;\nFN:Sandaru\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                sendEphemeral: false,
            },
        },
    };

    try {
        let message;

        if (type === 'text') {
            if (!msg) return m.reply('Please enter the message to send.');
            message = { text: msg };
        } else {
            const quoted = m.message?.extendedTextMessage?.contextInfo?.quotedMessage;

            if (!quoted) return m.reply(`Please reply to a ${type} to forward.`);

            if (type === 'image' && quoted.imageMessage) {
                const caption = msg || quoted.imageMessage.caption || '';
                const filePath = await dragon.downloadAndSaveMediaMessage(quoted.imageMessage);
                message = {
                    image: { url: filePath },
                    caption,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 9999,
                        isForwarded: true,
                    },
                };
                await dragon.sendMessage(number, message, { quoted: fkontak });
                fs.unlinkSync(filePath); // Clean up

            } else if (type === 'video' && quoted.videoMessage) {
                const caption = msg || quoted.videoMessage.caption || '';
                const filePath = await dragon.downloadAndSaveMediaMessage(quoted.videoMessage);
                message = {
                    video: { url: filePath },
                    caption,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 9999,
                        isForwarded: true,
                    },
                };
                await dragon.sendMessage(number, message, { quoted: fkontak });
                fs.unlinkSync(filePath); // Clean up

            } else {
                return m.reply(`Please reply to a valid ${type} message.`);
            }
        }

        if (type === 'text') {
            await dragon.sendMessage(number, message, { quoted: fkontak });
        }

        reply(`✅ ${type.charAt(0).toUpperCase() + type.slice(1)} sent to ${number}`);
    } catch (err) {
        console.error(err);
        reply('❌ Failed to send the message.');
    }
}
break;


                  case 'send': {
                    if (!isCreator) return reply('Owner Command');
                    if (!text) return m.reply(`Enter the number and message.\n\nExample: .send 94764497078 Hello there`);
                
                    const [num, ...msgArray] = text.split(' ');
                    const number = num.replace(/[^0-9]/g, '');
                    const msg = msgArray.join(' ').trim();
                
                    if (!number) return m.reply('Please enter a valid number.');
                    if (number.includes('+')) return m.reply(`Enter the number without the '+' symbol`);
                    if (isNaN(number)) return m.reply(`Enter only numbers with your country code, no spaces`);
                    if (!msg) return m.reply('Please enter the message to send.');
                
                    const qtext = {
      key: { remoteJid: "status@broadcast", participant: "0@s.whatsapp.net" },
      message: { extendedTextMessage: { text: `.sendall විශ්වාසයෙන් යුතුව Fake Numbers ʙᴜʏ කරන්න පුළුවන් හොදම තැන
 ᴘʀᴇᴍɪᴜᴍ ꜰᴀᴋᴇ ɴᴜᴍʙᴇʀꜱ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ,ᴛᴇʟᴇɢʀᴀᴍ 😇

අපෙන් Numbers Buy කරන අයට 

•Premium Number එකක් 
•Life Time Use කරන්න පුළුවන් 
•WhatsApp ban, Logout වුවහොත් නැවත ඔයාගේ Email address එකට Verification Code Request කිරීමේ හැකියාව
•ජීවිත කාලය පුරාම Unlimited Meta AI Use කිරීමේ හැකියාව 

එහෙනම් ඉතා අඩු මුදලකට international නම්බර් එකක් ඔයාගෙම කරගන්න

*http://wa.me/+94727163302?text=@▁Fake+number👀🍃*` } },
    };
                
                    try {
                        await dragon.sendMessage(
                            number + '@s.whatsapp.net',
                            { text: msg },
                            { quoted: qtext } // ✅ Fixed this line
                        );
                        reply(`✅ Message sent to ${number}`);
                    } catch (err) {
                        console.error(err);
                        reply('❌ Failed to send the message.');
                    }
                }
                break;
                
                case 'sendall1': {
                  if (!m.isGroup) return m.reply('group cmd')
                  if (!m.isAdmin) return m.reply('Admin only');
                  if (!m.isBotAdmin) return m.reply('Bot must be admin');
              
                  if (!text) return reply(`Use like: .sendall Hello everyone!`);
              
                  let groupMetadata = await dragon.groupMetadata(m.chat);
                  let members = groupMetadata.participants.map(p => p.id);
              
                  for (let member of members) {
                      try {
                          await delay(1000); // Delay to avoid spam
                          await dragon.sendMessage(
                              member,
                              { text: text },
                              { quoted: fkontak }
                          );
                      } catch (err) {
                          console.log(`❌ Failed to send to ${member}:`, err);
                      }
                  }
              
                  reply('✅ Message sent to all group members!');
              }
              break;

case 'sendjid': {
    if (!isCreator) return reply('Owner Command');
    if (!text) return m.reply(`Enter the number or group JID and the message.\n\nExample: .send 94701176587 Hello there\nOr: .send 1203630123456789@g.us Hello group`);

    const [targetRaw, ...msgArray] = text.split(' ');
    const msg = msgArray.join(' ').trim();

    if (!targetRaw) return m.reply('Please enter a valid number or JID.');
    if (!msg) return m.reply('Please enter the message to send.');

    // Detect if it's a group JID
    const isGroupJid = targetRaw.endsWith('@g.us');
    const targetJid = isGroupJid
        ? targetRaw.trim()
        : targetRaw.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    const fkontak = {
        key: {
            remoteJid: "0@s.whatsapp.net",
            participant: "0@s.whatsapp.net",
            fromMe: false,
            id: "Naze",
        },
        message: {
            contactMessage: {
                displayName: "DINU ID",
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;Sandaru;;;\nFN:Sandaru\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                sendEphemeral: false,
            },
        },
    };

    try {
        await dragon.sendMessage(
            targetJid,
            { text: msg },
            { quoted: fkontak }
        );
        reply(`✅ Message sent to ${targetJid}`);
    } catch (err) {
        console.error(err);
        reply('❌ Failed to send the message.');
    }
    break;
}




      case "autotyping":
        if (!isCreator) return reply('Owner Only');
        if (args.length < 1) return reply(`Example Auto Type on or off`);
        if (q === "on") {
          global.autoTyping = true;
          reply(`Successfully changed auto-typing to ${q}`);
        } else if (q === "off") {
          global.autoTyping = false;
          reply(`Successfully changed auto-typing to ${q}`);
        }
        break;

      case "autoswview":
        {
          if (!isCreator) return reply("❌ You are not the owner!");
          if (text === "on") {
            global.autosviews = true;
            reply("Auto Status Views been turned ON.");
          } else if (text === "off") {
            global.autosviews = false;
            reply("Auto Status Views has been turned OFF.");
          } else {
            return reply('Please reply "on" or "off".');
          }
          fs.writeFileSync(
            settingssPath,
            `module.exports = ${JSON.stringify(settings, null, 2)};`
          );
        }
        break;

        

      case "autoread":
        {
          if (!isCreator) return reply("❌ You are not the owner!");
          if (text === "on") {
            global.message_read = true;
            reply("AUTO READ has been turned ON.");
          } else if (text === "off") {
            global.message_read = false;
            reply("AUTO READ has been turned OFF.");
          } else {
            return reply('Please reply "on" or "off".');
          }
          fs.writeFileSync(
            settingsPath,
            `module.exports = ${JSON.stringify(settings, null, 2)};`
          );
        }
        break;

        case "list":
case "listmenu": {
  await dragon.sendMessage(m.chat, {
    react: { text: `🚀`, key: m.key }
  });

  const listMenu = `*\`乂 List Menu 乂\`*

1️⃣ • Main Menu  
2️⃣ • Download Menu  
3️⃣ • Group Menu  
4️⃣ • Other Menu  
5️⃣ • AI Menu  
6️⃣ • Search Menu  
7️⃣ • Owner Menu  
8️⃣ • Premium Menu
9️⃣ • Logo Menu  

_📌 Reply with a number (e.g., 1) to open the menu._`;

  const sentList = await dragon.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    fileLength: 100000000,
    pageCount: 999,
    fileName: 'QUEEN-DINU-MD-MENU',
    mimetype: 'application/pdf',
    caption: listMenu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 10,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363401755639074@newsletter",
        serverMessageId: null,
        newsletterName: "Join Support",
        mediaUrl: "https://whatsapp.com/channel/0029VbAWWH9BFLgRMCXVlU38",
        sourceUrl: "https://whatsapp.com/channel/0029VbAWWH9BFLgRMCXVlU38"
      }
    }
  }, { quoted: m });

  // Listen for replies to the list message
  dragon.ev.on("messages.upsert", async (update) => {
    try {
      const msg = update.messages[0];
      if (!msg.message) return;

      const body = msg.message.extendedTextMessage?.text || msg.message.conversation;
      const stanzaId = msg.message?.extendedTextMessage?.contextInfo?.stanzaId;

      if (stanzaId === sentList.key.id) {
        const number = body.trim();
        let menu = '';

        switch (number) {
          case "1":
            menu = `*\`乂 Main Menu 乂\`*

┏❐
┃ ⭕ *.alive*
┃  ✦ _Check if the bot is online_\n
┃ ⚡ *.ping*
┃  ✦ _Show bot response speed_\n
┃ 👑 *.owner*
┃  ✦ _View bot owner's contact_\n
┃ 🛠️ *.repo*
┃  ✦ _View source code repository_\n
┃ 📝 *.credit*
┃  ✦ _Bot contributors & thanks_
┗❐`;
            break;

          case "2":
            menu = `*\`乂 Download Menu 乂\`*

🎵 *.play*  
   _Usage:_ *.play Believer*
   
   🎵 *.play1*  
   _Usage:_ *.Video and song*

📹 *.video*  
  _Usage:_ *.video funny cats*

🎧 *.ytmp3*  
  _Usage:_ *.ytmp3 https://youtu.be/abcd1234*

🎞️ *.ytmp4*  
  _Usage:_ *.ytmp4 https://youtu.be/abcd1234*

🎼 *.song*  
  _Usage:_ *.song Shape of You*

📘 *.fb*  
  _Usage:_ *.fb https://fb.watch/example*

🎯 *.tiktok*  
   _Usage:_ *.tiktok https://vm.tiktok.com/xxxx*`;
            break;

          case "3":
            menu = `*\`乂 Group Menu 乂\`*
┏❐
┃🚪 *.leave*  
┃   _Usage:_ *.leave*
┃
┃👋 *.welcome*  
┃   _Usage:_ *.welcome on/off*
┃
┃🔇 *.hidetag*  
┃   _Usage:_ *.hidetag Hello all!*
┃
┃📢 *.sendall*  
┃   _Usage:_ *.sendall Good morning!*
┃
┃🔗 *.linkgc*  
┃   _Usage:_ *.linkgc*
┃
┃✏️ *.setnamegc*  
┃   _Usage:_ *.setnamegc New Group Name*
┃
┃⏰ *.opentime*  
┃   _Usage:_ *.opentime 8am*
┃
┃🔒 *.closetime*  
┃   _Usage:_ *.closetime 10pm*
┃
┃🧑‍🔧 *.promote*  
┃   _Usage:_ *.promote @user*
┃
┃🧍‍♂️ *.demote*  
┃   _Usage:_ *.demote @user*
┃
┃🗑️ *.kick*  
┃   _Usage:_ *.kick @user*
┗❐`;
            break;

          case "4":
            menu =  `*\`乂 Other Menu 乂\`*
┏❐
┃🧪 *.panel*  
┃   _Usage:_ *.panel*
┃
┃⏱️ *.runtime*  
┃   _Usage:_ *.runtime*
┃
┃🔗 *.shorturl*  
┃   _Usage:_ *.shorturl [link]*
┃
┃🔗 *.shorturl2*  
┃   _Usage:_ *.shorturl2 [link]*
┃
┃🗣️ *.tts*  
┃   _Usage:_ *.tts en Hello*
┃
┃🔔 *.ringtone*  
┃   _Usage:_ *.ringtone iPhone*
┃
┃🎭 *.emix*  
┃   _Usage:_ *.emix 😂 + 🤣*
┃
┃📷 *.qr*  
┃   _Usage:_ *.qr Hello World*
┃
┃💳 *.visa*  
┃   _Usage:_ *.visa*
┃
┃📅 *.cal*  
┃   _Usage:_ *.cal 9/3*
┃
┃🖼️ *.sticker*  
┃   _Usage:_ *Send image/video + .sticker* — Make sticker.
┗❐`;

            break;

          case "5":
            menu = `*\`乂 AI Menu 乂\`*

🧠 *.ai*  
  _Usage:_ *.ai [text]*

📝 *.gpt*  
  _Usage:_ *.gpt [text]*

🧠 *.llama*  
  _Usage:_ *.llama [text]*

🌌 *.flux*  
  _Usage:_ *.flux [prompt]*

🖼️ *.imgai*  
  _Usage:_ *.imgai [promt]*
┗❐`;
            break;

          case "6":
            menu = `*\`乂 Search Menu 乂\`*
🔍 *.yts*  
  _Usage:_ *.yts [query]*

🖼️ *.img*  
   _Usage:_ *.img [query]*

📱 *.wallpaper*  
  _Usage:_ *.wallpaper [category]*

🌍 *.ipfind*  
   _Usage:_ *.ipfind [Site Url]*
`;

            break;

case "9":
            menu = `*\`乂 Logo Menu 乂\`*

🗽.1917 [text]
🗽.amongus [text]
🗽.angel [text]
🗽.blackpink [text]
🗽.cartoon [text]
🗽.glitch [text]
🗽.graffiti [text]
🗽.bear [text]
🗽.neon [text]
🗽.naruto [text]
🗽.neon2 [text]
🗽.paper [text]
🗽.pixel [text]
🗽.rainy [text]
🗽.royal [text]
🗽.sand [text]
🗽.underwater [text]
🗽.write [text]`;

            break;

          case "7":
            menu =  `*\`乂 Owner Menu 乂\`*
👤 *.self*  
 _Usage:_ *.self* — Switch to self mode.

🌐 *.public*  
  _Usage:_ *.public* — Switch to public mode.

💾 *.save*  
  _Usage:_ *.save [data]* — Save a specific data entry or setting.

📤 *.send*  
  _Usage:_ *.send [message]* — Send a specific message to a user.
⚙️ *.settings*  
  _Usage:_ *.settings* — Access and modify bot settings.
`;

            break;

          case "8":
            menu = `*\`乂 Premium Menu 乂\`*

🔞 *.xvideo*  
   _Usage:_ *.xvideo [search term]*

🔞 *.xnxx*  
   _Usage:_ *.xnxx [search term]* 

🔞 *.xhamster*  
  _Usage:_ *.xhamster [search term]*`;

            break;

          default:
            menu = "❌ Invalid selection. Please choose a number between 1-8.";
            break;
        }

        await dragon.sendMessage(m.chat, {
          text: menu
        }, { quoted: ai });

        
      }
    } catch (err) {
      console.error("List menu reply error:", err);
    }
  });

  break;
}

          
          

    


        case "menu": {
          await dragon.sendMessage(from, { react: { text: `🎀`, key: m.key } });
      
          await dragon.sendMessage(m.chat, {
              audio: { url: 'https://files.catbox.moe/atcln8.mp3' }, 
              mimetype: 'audio/mpeg', 
              ptt: true,
              contextInfo: {
                  forwardingScore: 999,
                  isForwarded: true,
                  mentionedJid: [m.sender],
                  businessMessageForwardInfo: {
                      businessOwnerJid: '94727163302'
                  },
                  forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363401755639074@newsletter',
                      serverMessageId: null,
                      newsletterName: `QUEEN-DINU-MD`
                  }
              }
          }, { quoted: m });

const caption = `*\`乂 Main Menu 乂\`* \n
┏❐
┃⭔.listmenu
┃⭔.alive
┃⭔.ping
┃⭔.owner
┃⭔.repo
┃⭔.credit
┗❐
${readmore}

*\`乂 Download Menu 乂\`* \n
┏❐ 
┃⭔.play
┃⭔.play1
┃⭔.video
┃⭔.ytmp3
┃⭔.ytmp4
┃⭔.song
┃⭔.song2
┃⭔.fb
┃⭔.tiktok
┗❐

*\`乂 Group Menu 乂\`* \n
┏❐  
┃⭔.leave
┃⭔.welcome
┃⭔.hidetag
┃⭔.sendall
┃⭔.linkgc
┃⭔.setnamegc
┃⭔.opentime
┃⭔.closetime
┃⭔.promote
┃⭔.demote
┃⭔.kick
┗❐
${readmore}
*\`乂 Other Menu 乂\`* \n
┏❐  
┃⭔.panel
┃⭔.runtime
┃⭔.shorturl
┃⭔.shorturl2
┃⭔.tts
┃⭔.ringtone
┃⭔.emix
┃⭔.qr
┃⭔.visa
┃⭔.cal
┃⭔.sticker
┗❐

*\`乂 Logo Menu 乂\`* \n
┏❐
┃⭔.1917 [text]
┃⭔.amongus [text]
┃⭔.angel [text]
┃⭔.blackpink [text]
┃⭔.cartoon [text]
┃⭔.glitch [text]
┃⭔.graffiti [text]
┃⭔.bear [text]
┃⭔.neon [text]
┃⭔.naruto [text]
┃⭔.neon2 [text]
┃⭔.paper [text]
┃⭔.pixel [text]
┃⭔.rainy [text]
┃⭔.royal [text]
┃⭔.sand [text]
┃⭔.underwater [text]
┃⭔.write [text]
┗❐


*\`乂 AI Menu 乂\`* \n
┏❐  
┃⭔.ai
┃⭔.gpt
┃⭔.flux
┃⭔.llama
┃⭔.imgai
┗❐

*\`乂 Search Menu 乂\`* \n 
┏❐  
┃⭔.yts
┃⭔.img
┃⭔.wallpaper
┃⭔.ipfind
┃⭔.tempmail
┗❐

*\`乂 Owner Menu 乂\`* \n
┏❐ 
┃⭔.self
┃⭔.public
┃⭔.save
┃⭔.send
┃⭔.sendjid
┃⭔.settings
┗❐

*\`乂 Premium Menu 乂\`* \n
┏❐  
┃⭔.xvideo
┃⭔.xnxx
┃⭔.xhamster
┗❐
`;

     const run = (`Run Time: ${runtime(process.uptime())}`);    
          await dragon.sendMessage(
            m.chat,
            {
              document: fs.readFileSync("./package.json"),
        fileLength: 100000000, 
        pageCount: 999, 
        fileName: 'QUEEN-DINU-MD',
        mimetype: 'application/msword',
        jpegThumbnail: fs.readFileSync("./lib/blade.webp"), 
              caption: caption,
              contextInfo: {
                mentionedJid: [
                  m.sender,
                  "0@s.whatsapp.net",
                ],
                forwardingScore: 10,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: "120363401755639074@newsletter",
                  serverMessageId: null,
                  newsletterName: "Join Support"
                },
                externalAdReply: {
                  title: "Simple Wa-bot",
                  body: run,
                  showAdAttribution: true,
                  thumbnail: fs.readFileSync('./lib/bdbhse (2).jpg'),
                  mediaType: 1,
                  previewType: 0,
                  renderLargerThumbnail: true,
                  sourceUrl: "https://www.youtube.com/@SAN-YT",
                  mediaUrl: "https://www.youtube.com/@SANDA",
                },
              },
            },
            { quoted: x}
          );
        }
        break;

 case "ping":
case "system2":
  {
    // Send a reaction first
    await dragon.sendMessage(from, { react: { text: `⌛`, key: m.key } });

    const start = new Date().getTime(); // Record the time right before sending the ping

   const ping = await dragon.sendMessage(
      from,
      {
        text: '*\`Pinging...\`*',
      },
      { quoted: m }
    );

    const end = new Date().getTime(); // Record the time when the message is sent

    // Calculate the round-trip time (ping)
    const pingTime = end - start;

    // Send the response with the ping time
    await dragon.sendMessage(
      from,
      {
        text: `Speed: ${pingTime} ms`,
      },
      { quoted: ai }
    );

  await dragon.sendMessage(from, {
                          delete: ping.key,
                        });
await delay(10000);

    break;

  }


  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//




      case "readviewonce":
      case "vv":
        {
          if (!m.quoted) return m.reply(`Reply to view once message`);
          if (m.quoted.mtype !== "viewOnceMessageV2")
            return m.reply(`This is not a view once message`);
          let msg = m.quoted.message;
          let type = Object.keys(msg)[0];
          let media = await downloadContentFromMessage(
            msg[type],
            type == "imageMessage" ? "image" : "video"
          );
          let buffer = Buffer.from([]);
          for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]);
          }
          if (/video/.test(type)) {
            return dragon.sendFile(
              m.chat,
              buffer,
              "media.mp4",
              msg[type].caption || "",
              m
            );
          } else if (/image/.test(type)) {
            return dragon.sendFile(
              m.chat,
              buffer,
              "media.jpg",
              msg[type].caption || "",
              m
            );
          }
          let delb = await dragon.downloadAndSaveMediaMessage(media);
          ImageDragon.push(media);
          await fsx.copy(delb, `./lib/temp/vvimage.jpg`);
          fs.writeFileSync(
            "./lib/database/dragonimage.json",
            JSON.stringify(ImageDragon)
          );
          fs.unlinkSync(delb);
          m.reply(`Success Adding Image\nCheck by typing listimage`);
        }
        break;

      case "jid":
        {
          m.reply(from);
        }
        break;

      case "self":
        {
          if (!isCreator) return;
          dragon.public = false;
          reply("DONE...✅");
        }
        break;

      case "public":
        {
          if (!isCreator) return;
          dragon.public = true;
          reply("DONE... ✅");
        }
        break;



       case "img": {
  if (!text) return m.reply("Please provide a search term for the logo");
  await dragon.sendMessage(m.chat, { react: { text: '🔎', key: m.key } });

  try {
    const res = await axios.get(`https://api.genux.me/api/search/gis?query=${text}&apikey=GENUX-SANDARUX`);
    
    console.log(res.data);

    // Check if the response has the expected structure
    if (!res.data || !res.data.result || !Array.isArray(res.data.result)) {
      return m.reply("No results found or invalid API response.");
    }

    // Get up to 5 images
    const imagesToSend = res.data.result.slice(0, 5);
    
    if (imagesToSend.length === 0) {
      return m.reply("No images found for your search.");
    }

    // Send each image with proper error handling for each
    let sentCount = 0;
    for (let i = 0; i < imagesToSend.length; i++) {
      try {
        await dragon.sendMessage(
          m.chat, 
          { 
            image: { url: imagesToSend[i].url }, 
            caption: `Image ${i + 1} of ${imagesToSend.length}` 
          }, 
          { quoted: m }
        );
        sentCount++;
        
        // Add small delay between sends to avoid rate limiting
        if (i < imagesToSend.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      } catch (imageError) {
        console.error(`Error sending image ${i + 1}:`, imageError);
        // Continue to next image even if one fails
      }
    }

    if (sentCount > 0) {
      await dragon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } else {
      await dragon.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      m.reply("Failed to send any images.");
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    await dragon.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    m.reply("An error occurred while fetching images. Please try again later.");
  }
}
break;


case "wallpaper": {
  if (!text) return m.reply("Please provide a search term for the wallpaper");
  await dragon.sendMessage(m.chat, { react: { text: '🔎', key: m.key } });

  try {
    const res = await axios.get(`https://api.genux.me/api/download/wallpaper?query=${text}&apikey=GENUX-SANDARUX`);
    
    console.log(res.data);

    // Check if the response has the expected structure
    if (!res.data || !res.data.result || !Array.isArray(res.data.result)) {
      return m.reply("No results found or invalid API response.");
    }

    // Get up to 5 items (each item has multiple images)
    const itemsToSend = res.data.result.slice(0, 5);
    
    if (itemsToSend.length === 0) {
      return m.reply("No wallpapers found for your search.");
    }

    // Send images with proper error handling
    let sentCount = 0;
    for (let i = 0; i < itemsToSend.length; i++) {
      const item = itemsToSend[i];
      if (item.image && Array.isArray(item.image)) {
        // Send the first image from each item (usually the highest resolution)
        try {
          await dragon.sendMessage(
            m.chat, 
            { 
              image: { url: item.image[0] }, 
              caption: `Wallpaper ${i + 1} of ${itemsToSend.length}\nType: ${item.type || 'Unknown'}\nSource: ${item.source || 'Unknown'}`
            }, 
            { quoted: m }
          );
          sentCount++;
          
          // Add small delay between sends
          if (i < itemsToSend.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        } catch (imageError) {
          console.error(`Error sending wallpaper ${i + 1}:`, imageError);
        }
      }
    }

    if (sentCount > 0) {
      await dragon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } else {
      await dragon.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      m.reply("Failed to send any wallpapers.");
    }
  } catch (error) {
    console.error("Error fetching wallpapers:", error);
    await dragon.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    m.reply("An error occurred while fetching wallpapers. Please try again later.");
  }
}
break;



 case 'yts': case 'ytsearch': {
 await dragon.sendMessage(from, { react: { text: `🔍`, key: m.key } });
          if (!text) return reply(`Example : Oai Cat`)
          let yts = require("yt-search")
          let search = await yts(text)
          let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
          let no = 1
          for (let i of search.all) {
              teks += ` No : ${no++}\n Type : ${i.type}\n Video ID : ${i.videoId}\n Title : ${i.title}\n Views : ${i.views}\n Duration : ${i.timestamp}\n Uploaded : ${i.ago}\nUrl : ${i.url}\n\n─────────────────\n\n`
          }
          dragon.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: fvent })
      }
      break



case 'wagroups': 
case 'groups': { 
    await dragon.sendMessage(from, { react: { text: `💔`, key: m.key } });
    if (!text) return reply("Example: sex groups"); // Check if query is provided
    await dragon.sendMessage(from, { react: { text: `🔍`, key: m.key } });

    const { data } = await axios.get(`https://home.lazacktech.biz.id/api/searchgroups?q=${text}`);
    
    let teks = `🔍 Groups Search Results for "${text}"\n\n`;
    let no = 1;
    
    // Loop through results and format them
    for (let i of data.result) {  // Changed from data.results to data.result
        teks += `${no}. *Title*: ${i.title}\n`;
        teks += `   *Link*: ${i.link}\n\n`;
        no++;
        if (no > 6) break; // Limit to 6 results as per your requirement
    }
    
    // Send the first thumbnail as an image with the formatted text as caption
    dragon.sendMessage(m.chat, { 
        image: { url: data.result[0].thumb }, 
        caption: teks 
    }, { quoted: fvent });
}
break;

case 'shorturl2':
{
await dragon.sendMessage(from, { react: { text: `🔗`, key: m.key } });

 try {
 const url = text.trim();
 if (!url || !url.startsWith('http')) {
 return dragon.sendMessage(m.chat, { 
 text: '*🚫 Please enter the vaild Url (Ex: https://example.com).*' 
 }, { quoted: m });
 }

 const {data} = await axios.get(`https://restapi.simplebot.my.id/api/tools/isgd?url=${url}`);
 const shortUrl = data.link;

 dragon.sendMessage(m.chat, { 
 text: `*🔗 Link :*\n\n${shortUrl}` 
 }, { quoted: m });
 } catch (error) {
 console.error('Error memperpendek URL:', error);
 dragon.sendMessage(m.chat, { 
 text: `*Error*` 
 }, { quoted: m });
 }
}
break


        case "shortlink": case "shorturl": {
          await dragon.sendMessage(from, { react: { text: `🔗`, key: m.key } });

         // if (!text) return m.reply("https://example.com")
          //
          var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
          var link = `> Shortlink by tinyurl.com\n\n${res.data.toString()}`
          return m.reply(link)
          }
          break

     

 

      case "credit":
        {
          const qlive = {
            key: {
              participant: "13135550002@s.whatsapp.net",
              ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
            },
            message: {
              liveLocationMessage: { caption: `Support Us`, jpegThumbnail: "" },
            },
          };
          await dragon.sendMessage(from, { react: { text: `💌`, key: m.key } });
          
          const caption = `┏❐  ⌜ *Credit*_ ⌟  ❐

•Owner  - DINU ID

*https://github.com/QUEENDINU-OFC*

•Helper  - RUKA

*https://github.com/ruka*

┏❐  ⌜ Donate Us ⌟  ❐

Buy me Coffee 🩵

*https://buymeacoffee.com/nimeshpiyumal*

┏❐  ⌜ Groups ⌟  ❐

Join Bot Test ❔

*https://chat.whatsapp.com/J1xURJlvdTXFNngyBJ5ogs*`;
          dragon.sendMessage(
            from,
            {
              text: caption,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: false,
                  title: "Wa-Bot",
                  body: "Click Here",
                  thumbnail: fs.readFileSync("./lib/qr.jpg"),
                  sourceUrl: "https://ceylonnet.com",
                  mediaType: 1,
                  renderLargerThumbnail: false,
                },
              },
            },
            { quoted: qlive }
          );
        }
        break;

      case "owner":
        {
          await dragon.sendMessage(from, { react: { text: `👤`, key: m.key } });
          const vcard =
            "BEGIN:VCARD\n" +
            "VERSION:3.0\n" +
            "FN:Sandaru \n" +
            "ORG:Owner;\n" +
            "TEL;type=CELL;type=VOICE;waid=94764497078:+94772797288\n" +
            "END:VCARD";

          

          await dragon.sendMessage(
            from,
            { contacts: { displayName: "Gay", contacts: [{ vcard }] } },
            { quoted: fkontak }
          );
        }
        break;

 case 'restart': {
                if (!isCreator) return reply(`This is a Owner Command ❌`)
                await dragon.sendMessage(from, { react: { text: `🔄`, key: m.key }});
                const { exec } = require("child_process")
                reply('*Done* ✅')
                await sleep(1500)
                exec("pm2 restart all")
            }
            break

  

case 'ytmp3':  {
  await dragon.sendMessage(m.chat, { react: { text: `🔍`, key: m.key } });
  if (!text) return m.reply(`Example: url_youtube`);
  if (!text.includes('youtu')) return m.reply('URL does not contain a valid YouTube link!');

  try {
    const data = await dy_scrap.ytmp3(text);
  
    console.log (data)
    await dragon.sendMessage(m.chat, {
      audio: { url: data.result.download.url },
      mimetype: 'audio/mpeg',
      contextInfo: {
        forwardingScore: 9999999,
        isForwarded: true,
      },
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply('An error occurred while processing your request.');
  }
}
break;

case 'ytmp4':  case "video":
{
  await dragon.sendMessage(m.chat, { react: { text: `🔍`, key: m.key } });
  
  if (!text) return m.reply(`Example: url_youtube`);
  if (!text.includes('youtu')) return reply('URL does not contain a valid YouTube link!');

  try {
    const response = await axios.get(`https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(text)}`);
    
    console.log("Full response:", response.data);

    const videoData = response.data?.result;
    
    if (!videoData || !videoData.download_url) {
      return m.reply('Error: Invalid API response structure or missing download link.');
    }

    await dragon.sendMessage(m.chat, {
      video: { url: videoData.download_url },
      mimetype: 'video/mp4',
      fileName: videoData.title + ".mp4",
      contextInfo: {
        forwardingScore: 9999999,
        isForwarded: true,
      },
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply('An error occurred while processing your request.');
  }
}
break;




            case 's': case 'sticker': case 'stiker': {
              if (!m.quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions\nVideo Duration 1-9 Seconds`);
              
              let mime = m.quoted.mimetype || '';
              const { Sticker, StickerTypes } = require('wa-sticker-formatter');
              if (/image/.test(mime)) {
                  let media = await dragon.downloadAndSaveMediaMessage(m.quoted)

                  const sticker = new Sticker(media, {
                    pack: 'QUEEN-DINU-MD',
                    author: '💚',
                    type: text.includes('--crop') || text.includes('-c') 
                        ? StickerTypes.CROPPED 
                        : StickerTypes.FULL,
                    categories: ['🤩', '🎉'],
                    id: '12345',
                    quality: 75,
                    background: 'transparent'
                });

                const stickerBuffer = await sticker.toBuffer();
                await dragon.sendMessage(from, { sticker: stickerBuffer }, { quoted: m });
              }
          }
          break;
          

 
          case "play":
                    {
                      try {
                        await dragon.sendMessage(from, {
                          react: { text: `🕐`, key: m.key },
                        });
            
                        if (!text) return reply("❗ Please enter the name.");
            
                        let search = await yts(`${text}`);
                        if (!search || search.all.length === 0) return m.reply(`Please enter the song name`);
                        let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
                        const yt_url = search.all[0].url;
                        let caption = `「 *YOUTUBE PLAY* 」\n\n💬 Title : ${title}\n\n📺 Views : ${views}\n\n⏰ Duration : ${duration.timestamp}\n\n▶️ Channel : ${author.name}\n\n📆 Upload : ${ago}\n\nReply Number Below\n\n1.*AUDIO*\n2.*VIDEO*`;
                        console.log (yt_url)
            
                        const qlive = {
                          key: {
                            participant: "0@s.whatsapp.net",
                            ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
                          },
                          message: {
                            liveLocationMessage: {
                              caption: `QUEEN-DINU-MD`,
                              jpegThumbnail: "",
                            },
                          },
                        };
                        const wait = await dragon.sendMessage(
                          from,
                          { text: "*Loading*...80% " },
                          { quoted: qlive }
                        );
                        const sentMessage = await dragon.sendMessage(from, {
                          image: { url: image },
                          caption: caption,
                          contextInfo: {
                            forwardingScore: 9,
                            isForwarded: true,
                            mentionedJid: [
                              m.sender,
                              "0@s.whatsapp.net",
                              "@s.whatsapp.net",
                            ],
                            forwardedNewsletterMessageInfo: {
                              newsletterJid: `120363401755639074@newsletter`,
                              serverMessageId: null,
                              newsletterName: "Join For More Info",
                              mediaUrl: "https://chat.whatsapp.com/J1xURJlvdTXFNngyBJ5ogs",
                              sourceUrl: "https://chat.whatsapp.com/J1xURJlvdTXFNngyBJ5ogs",
                            },
                          },
                          quoted: ai,
                        });
            
                        dragon.ev.on("messages.upsert", async (chatUpdate) => {
                          try {
                            const mek = chatUpdate.messages[0];
                            if (
                              mek.message &&
                              mek.message.extendedTextMessage &&
                              mek.message.extendedTextMessage.contextInfo &&
                              mek.message.extendedTextMessage.contextInfo.stanzaId ===
                                sentMessage.key.id
                            ) {
                              const comm = mek.message.extendedTextMessage.text.trim();
            
            
            
                              switch (comm) {
                                case "1":
                                  {
                                    await dragon.sendMessage(from, {
                                      react: { text: `📥`, key: m.key },
                                    });
                                
                                    // Ensure yt_url is correctly assigned
                                    const yt_url = search.all[0].url;
                                    console.log("Fetching audio for URL:", yt_url); // Debugging
                                
                                    try {
                                      
                                      const response = await dy_scrap.ytmp3(yt_url);
                  
                                      // Send the audio file
                                      await dragon.sendMessage(
                                        from,
                                        {
                                          audio: {
                                            url: response.result.download.url,
                                          },
                                          mimetype: "audio/mpeg",
                                          fileName: response.result.title + ".mp3",
                                          contextInfo: {
                                            forwardingScore: 9999999,
                                            isForwarded: true,
                                          },
                                        },
                                        { quoted: m }
                                      );
                                
                                      // Log the download URL for debugging
                                      console.log("Download URL:", response.result.download.url);
                                
                                      // Notify the user that the download is complete
                                      await dragon.sendMessage(from, {
                                        react: { text: `✅`, key: m.key },
                                      });
            
                                    } catch (error) {
                                      console.error("Error fetching or sending audio:", error);
                                      reply("❗ An error occurred while processing your request. Please try again later.");
                                    }
                                  }
                                  break;
                                  case "2": {
                                    await dragon.sendMessage(from, {
                                      react: { text: `📤`, key: mek.key },
                                    });
                          
                                    try {
                                      const response = await axios.get(`https://apis.davidcyriltech.my.id/song?query=${text}`);
                                      const video = response.data.result.video;
                          
                                      if (!video || !video.download_url) {
                                        return reply("❗ Failed to get video URL.");
                                      }
                          
                                      await dragon.sendMessage(
                                        from,
                                        {
                                          video: { url: video.download_url },
                                          mimetype: "video/mp4",
                                          caption: "> Done ✅",
                                          fileName: response.data.result.title + ".mp4",
                                          contextInfo: { forwardingScore: 9999999, isForwarded: true },
                                        },
                                        { quoted: mek }
                                      );
                          
                                      await dragon.sendMessage(from, {
                                        react: { text: `✅`, key: m.key },
                                      });
                                    } catch (error) {
                                      console.error("Error sending video:", error);
                                      reply("❗ An error occurred while sending video.");
                                    }
                                    break;
                                  }
                          
                                case "9":
                                  {
                                    await dragon.sendMessage(from, {
                                      react: { text: `📤`, key: m.key },
                                    });
                                    const downloading = await dragon.sendMessage(
                                      from,
                                      { text: `*📥 Downloading...*  ${data.result.title}` },
                                      { quoted: m }
                                    );
            
                                    await dragon.sendMessage(from, {
                                      text: `*📤 Uploading...* ${data.result.title}`,
                                      edit: downloading.key,
                                    });
                                    await dragon.sendMessage(
                                      from,
                                      {
                                        audio: {
                                          url: data.result.dl_links,
                                        },
                                        caption: "> Done ✅",
                                        mimetype: "audio/mpeg",
                                        ptt: "false",
            
                                        contextInfo: {
                                          externalAdReply: {
                                            thumbnailUrl: data.result.image,
                                            title: data.result.title,
                                            body: `Wa-bot`,
                                            sourceUrl: data.result.url,
                                            renderLargerThumbnail: true,
                                            mediaType: 1,
                                            forwardingScore: 9999999,
                                            isForwarded: true,
                                          },
                                        },
                                      },
                                      { quoted: m }
                                    );
                                  }
                                  break;
            
                                default:
                                  await dragon.sendMessage(from, {
                                    react: { text: `❌`, key: m.key },
                                  });
                                  return m.reply(
                                    "Invalid option. Please select a valid quality option. 🔴"
                                  );
                              }
            
                              // React and delete the wait message
                              await dragon.sendMessage(from, {
                                react: { text: `✅`, key: m.key },
                              });
                              await dragon.sendMessage(from, { delete: wait.key });
                            }
                          } catch (error) {
                            console.error("Error handling messages.upsert event:", error);
                          }
                        });
                      } catch (error) {
                        console.error("Error in song command:", error);
                        m.reply("❌ An error occurred while processing your request.");
                      }
                    }
                    break;
  
          
          
       case "song": {
  try {
    await dragon.sendMessage(from, {
      react: { text: `🕐`, key: m.key },
    });

    if (!text) return reply("❗ Please enter the name.");

    let search = await yts(`${text}`);
    if (!search || search.all.length === 0) return m.reply(`❗ Please enter the correct song name.`);

    let results = search.all.slice(0, 4); // First 4 results

    let caption = `🎶 *「 YOUTUBE PLAY 」* 🎶\n\n`;

    results.forEach((video, index) => {
      caption += `*${index + 1}. ${video.title}*\n`;
      caption += `👀 *Views:* ${video.views}\n`;
      caption += `⏰ *Duration:* ${video.duration.timestamp}\n\n\n`;
    });

    caption += `> 📝 *Reply with the number to Download.*`;

    const wait = await dragon.sendMessage(
      from,
      { text: "*Loading*...80%" },
      { quoted: m }
    );

    // Send the song list
    const sentMessage = await dragon.sendMessage(
      m.chat,
      {
        document: fs.readFileSync("./package.json"),
        fileLength: 100000000,
        pageCount: 999,
        fileName: 'Song List',
        mimetype: 'application/pdf',
        caption: caption,
        contextInfo: {
          mentionedJid: [m.sender, "0@s.whatsapp.net"],
          forwardingScore: 10,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363401755639074@newsletter",
            serverMessageId: null,
            newsletterName: "Join Support"
          }
        }
      },
      { quoted: m }
    );

    // Listen for reply with song number
    dragon.ev.on("messages.upsert", async (chatUpdate) => {
      try {
        const mek = chatUpdate.messages[0];
        if (
          mek.message &&
          mek.message.extendedTextMessage &&
          mek.message.extendedTextMessage.contextInfo &&
          mek.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id
        ) {
          const comm = mek.message.extendedTextMessage.text.trim();
          const selectedIndex = parseInt(comm) - 1;

          if (selectedIndex >= 0 && selectedIndex < results.length) {
            await dragon.sendMessage(from, { react: { text: `🎶`, key: mek.key } });

            const selectedVideo = results[selectedIndex];
            const selectedUrl = selectedVideo.url;

            try {
              const { data } = await axios.get(`https://apis.davidcyriltech.my.id/download/ytmp3?url=${selectedUrl}`);

              if (!data.success || !data.result || !data.result.download_url) {
                return reply("❗ Failed to fetch audio download link.");
              }

              const waitMsg = await dragon.sendMessage(
                from,
                {
                  text: `*📥 Downloading your song...*\n\n🎶 *${data.result.title}*`
                },
                { quoted: mek }
              );

              await dragon.sendMessage(
                from,
                {
                  audio: { url: data.result.download_url },
                  mimetype: "audio/mpeg",
                  fileName: data.result.title + ".mp3",
                  contextInfo: { forwardingScore: 9999999, isForwarded: true },
                },
                { quoted: m }
              );

              await dragon.sendMessage(from, {
                react: { text: `✅`, key: mek.key },
              });

              await dragon.sendMessage(from, { delete: waitMsg.key });

            } catch (error) {
              console.error("Error fetching audio:", error);
              reply("❗ Error fetching audio. Please try again later.");
            }
          } else {
            await dragon.sendMessage(from, { react: { text: `❌`, key: m.key } });
            return m.reply("❗ Invalid option. Please reply with a valid number between 1 and 4.");
          }
        }
      } catch (error) {
        console.error("Error handling messages.upsert event:", error);
      }
    });

  } catch (error) {
    console.error("Error in song2 command:", error);
    m.reply("❌ An error occurred while processing your request.");
  }
}
break;

         
            

      case "song2": {
  try {
    await dragon.sendMessage(from, {
      react: { text: `🎶`, key: m.key },
    });
    
    const qlive = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: {
        liveLocationMessage: {
          caption: `QUEEN-DINU-MD`,
          jpegThumbnail: "",
        },
      },
    };

    if (!text) return reply("❗ Please enter the song name.");
    
    const wait = await dragon.sendMessage(
      from,
      { text: "*W A I T*..." },
      { quoted: m}
    );
    
    let search = await yts(`${text}`);
    if (!search || search.all.length === 0) return m.reply(`❗ Please enter a valid song name.`);
    
    let { videoId, image, title, views, duration, author, ago, url } = search.all[0];
    const yt_url = search.all[0].url;
    let caption = `「 *YOUTUBE PLAY* 」\n\n💬 Title : ${title}\n\n📺 Views : ${views}\n\n⏰ Duration : ${duration.timestamp}\n\n▶️ Channel : ${author.name}\n\n📆 Upload : ${ago}`;
    
    await dragon.sendMessage(m.chat, {
      document: fs.readFileSync("./package.json"),
      fileLength: 100000000,
      pageCount: 999,
      fileName: search.all[0].title,
      mimetype: 'application/pdf',
      caption: caption,
      contextInfo: {
        mentionedJid: [m.sender, "0@s.whatsapp.net"],
        forwardingScore: 10,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363401755639074@newsletter",
          serverMessageId: null,
          newsletterName: "Join Support",
          mediaUrl: "https://chat.whatsapp.com/J1xURJlvdTXFNngyBJ5ogs",
          sourceUrl: "https://chat.whatsapp.com/J1xURJlvdTXFNngyBJ5ogs"
        },
        externalAdReply: {
          title: "Simple Wa-Bot",
          body: 'Youtube Play',
          showAdAttribution: true,
          mediaType: 2,
          previewType: 0,
          renderLargerThumbnail: false,
          thumbnailUrl: search.all[0].image,
          sourceUrl: "https://www.youtube.com/@SARU-YT",
          mediaUrl: "https://www.youtube.com/@SANYT"
        }
      }
    }, { quoted: ai });

 // Add await and proper template literal
      const response = await axios.get(`https://apis.davidcyriltech.my.id/song?query=${text}`);
      
      const songData = response.data.result;
      
      await dragon.sendMessage(from, { 
          audio: { 
              url: songData.audio.download_url 
          }, 
          fileName: songData.title + '.mp3', 
          mimetype: 'audio/mpeg', 
          contextInfo: {
              forwardingScore: 9999999,
              isForwarded: true,
              externalAdReply: {
                  title: songData.title,
                  body: `Duration: ${songData.duration}`,
                  thumbnailUrl: songData.thumbnail,
                  mediaType: 1,
                  mediaUrl: songData.video_url,
                  sourceUrl: songData.video_url
              }
          }
      }, { quoted: m });

    await dragon.sendMessage(from, {
      react: { text: `✅`, key: m.key },
    });

  } catch (error) {
    console.error("Error in song command:", error);
    reply("❗ An error occurred while processing your request.");
  }
}
break;

case 'song2': {
  try {
      await dragon.sendMessage(from, { react: { text: '🎧', key: m.key }});
      if(!text) return reply("❗ Please enter the song name.");
      
      // Add await and proper template literal
      const response = await axios.get(`https://apis.davidcyriltech.my.id/song?query=${text}`);
      
      const songData = response.data.result;
      
      await dragon.sendMessage(from, { 
          audio: { 
              url: songData.audio.download_url 
          }, 
          fileName: songData.title + '.mp3', 
          mimetype: 'audio/mpeg', 
          contextInfo: {
              forwardingScore: 9999999,
              isForwarded: true,
              externalAdReply: {
                  title: songData.title,
                  body: `Duration: ${songData.duration}`,
                  thumbnailUrl: songData.thumbnail,
                  mediaType: 1,
                  mediaUrl: songData.video_url,
                  sourceUrl: songData.video_url
              }
          }
      }, { quoted: m });

      await dragon.sendMessage(from, { react: { text: `✅`, key: m.key }});
  } catch (e) {
      console.log(e);
      reply(`❗ Error: ${e.message}`);
  }
}
break;
            
     case "playvid":
case "video2": {
  try {
    await dragon.sendMessage(from, {
      react: { text: `🎶`, key: m.key },
    });
    
    const qlive = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: {
        liveLocationMessage: {
          caption: `QUEEN-DINU-MD`,
          jpegThumbnail: "",
        },
      },
    };

    if (!text) return reply("❗ Please enter the video name.");
    
    const wait = await dragon.sendMessage(
      from,
      { text: "*Please Wait*..." },
      { quoted: qlive }
    );
    
    let search = await yts(`${text}`);
    if (!search || search.all.length === 0) return m.reply(`❗ Please enter a valid song name.`);
    
    let { videoId, image, title, views, duration, author, ago, url } = search.all[0];
    const yt_url = search.all[0].url;
    let caption = `「 *VIDEO PLAY* 」\n\n💬 Title : ${title}\n\n📺 Views : ${views}\n\n⏰ Duration : ${duration.timestamp}\n\n▶️ Channel : ${author.name}\n\n📆 Upload : ${ago}`;
    
    const sentMessage = await dragon.sendMessage(from, {
      image: { url: image },
      caption: caption,
      contextInfo: {
        forwardingScore: 9,
        isForwarded: true,
        mentionedJid: [
          m.sender,
          "0@s.whatsapp.net",
          "@s.whatsapp.net",
        ],
        forwardedNewsletterMessageInfo: {
          newsletterJid: `120363401755639074@newsletter`,
          serverMessageId: null,
          newsletterName: "Join For More Info",
          mediaUrl: "https://chat.whatsapp.com/J1xURJlvdTXFNngyBJ5ogs",
          sourceUrl: "https://chat.whatsapp.com/J1xURJlvdTXFNngyBJ5ogs",
        },
      },
      quoted: m,
    });

    // Make API request with better error handling
    const apiUrl = `https://api-dark-shan-yt.koyeb.app/download/ytmp4?url=${yt_url}&apikey=bbe41021af6d1d32&format=360`;
    
    const response =


 await axios.get(apiUrl).catch(err => {
      console.error("API Error:", err);
      return null;
    });

    if (!response || !response.data || !response.data.data || !response.data.data.result) {
      console.error("Invalid API response:", response?.data);
      return reply("❗ Failed to get song download link. Please try again later.");
    }

    const result = response.data.data.result;
    
    if (!result.download) {
      console.error("Download link missing in response:", result);
      return reply("❗ Couldn't retrieve the song. The download link is missing.");
    }

    await dragon.sendMessage(
      from,
      {
        video: {
          url: result.download,
        },
        mimetype: "video/mp4",
        fileName: `${result.title}.mp4`,
        contextInfo: {
          forwardingScore: 9999999,
          isForwarded: true,
        },
      },
      { quoted: m }
    );

    await dragon.sendMessage(from, {
      react: { text: `✅`, key: m.key },
    });

  } catch (error) {
    console.error("Error in song command:", error);
    reply("❗ An error occurred while processing your request.");
  }
}
break;
  
 case 'speedtest': case 'speed': {
await dragon.sendMessage(from, {
      react: { text: `✅`, key: m.key },
    });

				let cp = require('child_process')
				let { promisify } = require('util')
				let exec = promisify(cp.exec).bind(cp)
				let o
				try {
					o = await exec('python3 speed.py --share')
				} catch (e) {
					o = e
				} finally {
					let { stdout, stderr } = o
					if (stdout.trim()) reply(stdout)
					if (stderr.trim()) reply(stderr)
				}
			}
			break  

case 'system': case 'bot': {

await dragon.sendMessage(from, {
      react: { text: `✅`, key: m.key },
    });

				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, { length }) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()

respon = ` *ᴘ ɪ ɴ ɢ*  ${latensi.toFixed(4)} _Second_ 
${(oldd - neww).toFixed(4)} *ms*

*ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ* : ${runtime(process.uptime())}

*🛑 ʀᴀᴍ:*
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*🔴 ᴍᴇᴍᴏʀʏ:*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `♾ *C P U*
${cpus[0].model.trim()} (${cpu.speed} MHz)

${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}` : ''}
`.trim()

				// m.reply(respon)

                      await dragon.sendMessage(m.chat, {
        document: fs.readFileSync("./package.json"),
        fileLength: 100000000, // optional file size
        pageCount: 9999, // optional page count
        fileName: ucapanWaktu, // change as you want
        mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        caption: respon,
        contextInfo: {
            mentionedJid: [m.sender, "0@s.whatsapp.net"],
            forwardingScore: 10,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363401755639074@newsletter",
                serverMessageId: null,
                newsletterName: "Join Support",
                mediaUrl: "https://chat.whatsapp.com/J1xURJlvdTXFNngyBJ5ogs",
                sourceUrl: "https://chat.whatsapp.com/J1xURJlvdTXFNngyBJ5ogs"
            }
        }
    }, { quoted: ai })
}
break

  

      case "tiktok":
case "tt":
  {
    try {
      await dragon.sendMessage(from, {
        react: { text: `🎥`, key: m.key },
      });
      if (!text) return reply(`❌ Please provide a video url.`);

    const data = await dy_scrap.tiktok(text);
console.log(data)


      const wait = await dragon.sendMessage(
        from,
        { text: "⏳ Please wait.." },
        { quoted: ai }
      );

      await dragon.sendMessage(
        from,
        {
          video: { url: data.result.sd },
          mimetype: "video/mp4",
          fileName: data.result.title + ".mp4",
          contextInfo: {
            forwardingScore: 9,
            isForwarded: true,
          },
        },
        { quoted: m }
      );

      await dragon.sendMessage(from, {
        react: { text: `✅`, key: m.key },
      });
      await dragon.sendMessage(from, { delete: wait.key });
    } catch (e) {
      console.log(e);
      reply(`${e.message}`);
    }
  }
  break;


      case "tk2":
      case "tiktok2":
        {
          await dragon.sendMessage(from, { react: { text: `🎥`, key: m.key } });
          if (!text) return reply("❗ Please enter the url");
          const { data } = await axios.get(
            `https://api.botcahx.eu.org/api/dowloader/tiktok?url=${text}&apikey=cpOqs3fm`
          );
          //cpOqs3fm

          const wait = await dragon.sendMessage(
            from,
            { text: "⏳ Please wait.." },
            { quoted: m }
          );

          await dragon.sendMessage(
            from,
            {
              video: { url: data.result.video },
              mimetype: "video/mp4",
              fileName: data.result.title + ".mp4",
              contextInfo: {
                forwardingScore: 10,
                isForwarded: true,
              },
            },
            { quoted: fdoc }
          );
        }
        break;



    

      

   case "fb":
case "facebook":
  {
    try {
      await dragon.sendMessage(from, {
        react: { text: `🎥`, key: m.key },
      });

      if (!text) return reply(`❌ Please provide a Facebook video URL.`);

      let fb_url = (`${text}`);
      const response = await fetch(`https://apis.davidcyriltech.my.id/facebook2?url=${encodeURIComponent(fb_url)}`);
      const json = await response.json();
      console.log(json);

      if (!json.status) return reply(`❌ Failed to fetch video.`);

      const wait = await dragon.sendMessage(
        from,
        { text: "⏳ Please wait..." },
        { quoted: m }
      );

      // HD quality URL எடுத்துக்கறது
      const hdVideo = json.video.downloads.find(v => v.quality === "HD");

      if (!hdVideo) return reply(`❌ HD quality video not found.`);

      await dragon.sendMessage(
        from,
        {
          video: { url: hdVideo.downloadUrl },
          mimetype: "video/mp4",
          fileName: json.video.title + ".mp4",
          contextInfo: {
            forwardingScore: 9999999,
            isForwarded: true,
          },
        },
        { quoted: m }
      );

      await dragon.sendMessage(from, {
        react: { text: `✅`, key: m.key },
      });
      await dragon.sendMessage(from, { delete: wait.key });

    } catch (e) {
      console.log(e);
      reply(`${e.message}`);
    }
  }
  break;


case "ipfind":
        {
          await dragon.sendMessage(from, { react: { text: `🧿`, key: m.key } });
          if (!text) return reply("❗ Please enter the Site Address Ex; *api.genux.me*");
          const { data } = await axios.get(
            `https://api.genux.me/api/other/dtic?query=${text}&apikey=GENUX-SANDARUX`
          );
          await dragon.sendMessage(
            from,
            {
              text: `${text} IP Address\n\n${data.result.ip}`,
              contextInfo: {
                forwardingScore: 10,
                isForwarded: true,
              },
            },
            { quoted: m }
          );
        }
        break;

case "ai":
        {
          await dragon.sendMessage(from, { react: { text: `👾`, key: m.key } });
          if (!text) return reply("❗ Please enter the query");
          const { data } = await axios.get(
            `https://apis.davidcyriltech.my.id/ai/chatbot?query=${text}`
          );
          await dragon.sendMessage(
            from,
            {
              text: data.result,
              contextInfo: {
                forwardingScore: 10,
                isForwarded: true,
              },
            },
            { quoted: ai }
          );
        }
        break;

        case "llama":
        {
          await dragon.sendMessage(from, { react: { text: `👾`, key: m.key } });
          if (!text) return reply("❗ Please enter the query");
          const { data } = await axios.get(
            `https://apis.davidcyriltech.my.id/ai/llama3?text=${text}`
          );
          await dragon.sendMessage(
            from,
            {
              text: data.message,
              contextInfo: {
                forwardingScore: 10,
                isForwarded: true,
              },
            },
            { quoted: ai }
          );
        }
        break;

        case "weather":
          {
            await dragon.sendMessage(from, { react: { text: `❄️`, key: m.key } });
            if (!text) return reply("❗ Please enter the City Name");
            const { data } = await axios.get(
              `https://apis.davidcyriltech.my.id/weather?city=${text}`
            );
        
const weatherInfo = data.data;
const caption = `🌍 *Location:* ${weatherInfo.location}, ${weatherInfo.country}
🌦️ *Weather:* ${weatherInfo.weather} (${weatherInfo.description})
🌡️ *Temperature:* ${weatherInfo.temperature}
🤗 *Feels Like:* ${weatherInfo.feels_like}
💧 *Humidity:* ${weatherInfo.humidity}
🔽 *Pressure:* ${weatherInfo.pressure}
🍃 *Wind Speed:* ${weatherInfo.wind_speed}
📍 *Coordinates:* [${weatherInfo.coordinates.latitude}, ${weatherInfo.coordinates.longitude}]`;
        
            await dragon.sendMessage(
              from,
              {
                text: caption,
                contextInfo: {
                  forwardingScore: 10,
                  isForwarded: true,
                },
              },
              { quoted: ai }
            );
          }
          break;


          case "cal":
            {
              await dragon.sendMessage(from, { react: { text: `🧮`, key: m.key } });
              if (!text) return reply("❗ Please enter the calculation query\nExample: 5+2 or 10*3");
              
              try {
                const { data } = await axios.get(
                  `https://apis.davidcyriltech.my.id/tools/calculate?expr=${encodeURIComponent(text)}`
                );
            
                if (!data.success) {
                  return reply("❌ Calculation failed. Please check your input");
                }
            
                // Create formatted caption with emojis
                const caption = `🧮 *Calculation Result* 🧮\n\n` +
                               `📝 *Expression*: ${data.expression || text}\n` +
                               `🔢 *Result*: ${data.result}\n\n` +
                               `> ✨ *Powered by  Genux API*`;
            
                await dragon.sendMessage(
                  from,
                  {
                    text: caption,
                    contextInfo: {
                      forwardingScore: 10,
                      isForwarded: true,
                    },
                  },
                  { quoted: ai }
                );
            
              } catch (error) {
                console.error(error);
                reply("❌ Error performing calculation. Please try again");
              }
            }
            break;

        case "gpt":
        {
          await dragon.sendMessage(from, { react: { text: `👾`, key: m.key } });
          if (!text) return reply("❗ Please enter the query");
          const { data } = await axios.get(
            `https://apis.davidcyriltech.my.id/ai/gpt4?text=${text}`
          );
          await dragon.sendMessage(
            from,
            {
              text: data.message,
              contextInfo: {
                forwardingScore: 10,
                isForwarded: true,
              },
            },
            { quoted: ai }
          );
        }
        break;

case "tempnumber": {
    await dragon.sendMessage(from, { react: { text: `📡`, key: m.key } });

    try {
        const { data } = await axios.get("https://vajira-api-seven.vercel.app/more/tempnumber");

        if (!data.status || !Array.isArray(data.result) || data.result.length === 0) {
            return reply("❌ No temporary numbers available at the moment.");
        }

        // Prepare caption
        let caption = `📱 *Temporary Phone Numbers*\n\n`;

        // Limit to first 5 results
        data.result.slice(0, 5).forEach((item, index) => {
            caption += `🔢 *Number ${index + 1}*\n`;
            caption += `🌍 *Country*: ${item.country}\n`;
            caption += `📞 *Number*: \`${item.number}\`\n`;
            caption += `🔗 *Link*: [Click to View SMS](${item.link})\n`;
            caption += `━━━━━━━━━━━━━━\n\n`;
        });

        caption += ` > 🔐 *Use for verification or testing*`;

        await dragon.sendMessage(
            from,
            {
                text: caption,
                contextInfo: {
                    forwardingScore: 10,
                    isForwarded: true,
                },
            },
            { quoted: ai }
        );

        await dragon.sendMessage(from, { react: { text: `✅`, key: m.key } });

    } catch (error) {
        console.error(error);
        await dragon.sendMessage(from, { react: { text: `❌`, key: m.key } });
        reply("❌ Error fetching temporary numbers.");
    }
    break;
}


        case "visa":
          {
            await dragon.sendMessage(from, { react: { text: `💳`, key: m.key } });
            
            try {
              const { data } = await axios.get(
                `https://home.lazacktech.biz.id/api/vcc?type=Visa&count=3`
              );
          
              if (!Array.isArray(data) || data.length === 0) {
                return reply("❌ No Visa cards available at the moment");
              }
          
              // Create formatted caption
              let caption = `💳 *Visa Card Generator* 💳\n\n`;
              
              data.forEach((card, index) => {
                caption += `🆔 *Card ${index + 1}*\n`;
                caption += `👤 *Name*: ${card.name}\n`;
                caption += `🔢 *Number*: \`${card.number}\`\n`;
                caption += `🔒 *CVV*: \`${card.cvv}\`\n`;
                caption += `📅 *Expiry*: ${card.expiry}\n\n`;
                caption += `━━━━━━━━━━━━━━\n\n`;
              });
          
              caption += `> ⚠️ *For educational purposes only*`;
              
              await dragon.sendMessage(
                from,
                {
                  text: caption,
                  contextInfo: {
                    forwardingScore: 10,
                    isForwarded: true,
                  },
                },
                { quoted: ai }
              );
          
            } catch (error) {
              console.error(error);
              reply("❌ Error generating Visa cards");
            }
          }
          break;

      case "girl":
        {
          await dragon.sendMessage(from, { react: { text: `👾`, key: m.key } });
          if (!text) return m.reply("❗ Please enter the query");
          const { data } = await axios.get(
            `https://api.genux.me/api/ai/genux?phoneNumber=${m.sender}&query=${text}&apikey=GENUX-SANDARUX`
          );
          await dragon.sendMessage(
            from,
            {
              text: data.message,
              contextInfo: {
                forwardingScore: 10,
                isForwarded: true,
              },
            },
            { quoted: ai }
          );
        }
        break;

      case "tts":
        {
          await dragon.sendMessage(from, { react: { text: `🎧`, key: m.key } });
          if (!text) return reply("❗ Please enter the query");
          const response = googleTTS.getAudioUrl(text, {
            lang: "si",
            slow: false,
            host: "https://translate.google.com",
          });
          await dragon.sendMessage(
            from,
            {
              audio: { url: response },
              mimetype: "audio/mp4",
              ptt: true,
              fileName: `${text}.mp3`,
              contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true,
              },
            },
            { quoted: m }
          );
        }
        break;

      

        case "tempmail":
          {
            await dragon.sendMessage(from, { react: { text: `📧`, key: m.key } });
        
            const { data } = await axios.get(`https://apis.davidcyriltech.my.id/temp-mail`);
        
            const tempMailMsg = `✨ *𝗧𝗘𝗠𝗣𝗢𝗥𝗔𝗥𝗬 𝗘𝗠𝗔𝗜𝗟* ✨\n\n📩 *Email Address:*\n${data.email}\n\n🔑 *Session ID:*\n${data.session_id}\n\n⏳ *Expires At:*\n${data.expires_at}\n\n 1. check inbox. 📨*`;
        
            const sentMsg = await dragon.sendMessage(
              from,
              {
                text: tempMailMsg,
                contextInfo: {
                  forwardingScore: 999,
                  isForwarded: true,
                },
              },
              { quoted: ai }
            );
        
            // Listen for reply
            dragon.ev.on("messages.upsert", async (chatUpdate) => {
              const msg = chatUpdate.messages[0];
              if (!msg || !msg.message || msg.key.fromMe || msg.key.remoteJid !== from) return;
        
              const messageText = msg.message.conversation || msg.message.extendedTextMessage?.text;
        
              if (messageText?.trim() === "1") {
                await dragon.sendMessage(from, { react: { text: `👀`, key: msg.key } });
        
                try {
                  const inboxRes = await axios.get(`https://apis.davidcyriltech.my.id/temp-mail/inbox?id=${data.session_id}`);
                  const inboxData = inboxRes.data;
        
                  if (inboxData.inbox_count === 0) {
                    await dragon.sendMessage(from, { text: "📭 Inbox is currently empty.", quoted: fvent });
                  } else {
                    let inboxMsg = `📬 *Inbox Messages (${inboxData.inbox_count}):*\n\n`;
                    inboxData.messages.forEach((mail, i) => {
                      inboxMsg += `📨 *${i + 1}.*\nFrom: ${mail.from}\nSubject: ${mail.subject}\nDate: ${mail.date}\n\n`;
                    });
        
                    await dragon.sendMessage(from, { text: inboxMsg, quoted: m });
                  }
                } catch (err) {
                  console.error(err);
                  await dragon.sendMessage(from, { text: "⚠️ Error fetching inbox.", quoted: m });
                }
              }
            });
          }
          break;
        

      case "save":
      case "svsave":
        {
          try {
            if (
              m.message &&
              m.message.extendedTextMessage &&
              m.message.extendedTextMessage.contextInfo
            ) {
              const quotedMessage =
                m.message.extendedTextMessage.contextInfo.quotedMessage;
              if (quotedMessage) {
                if (quotedMessage.imageMessage) {
                  const imageCaption = quotedMessage.imageMessage.caption;

                  const imageUrl = await dragon.downloadAndSaveMediaMessage(
                    quotedMessage.imageMessage
                  );
                  await dragon.sendMessage(from, {
                    image: { url: imageUrl },
                    caption: imageCaption,
                    contextInfo: {
                      mentionedJid: [m.sender],
                      forwardingScore: 9999,
                      isForwarded: true,
                    },
                  });

                  reply("By Auto Saved System 💚");
                  fs.unlinkSync(imageUrl);
                }

                if (quotedMessage.videoMessage) {
                  const videoCaption = quotedMessage.videoMessage.caption;
                  const videoUrl = await dragon.downloadAndSaveMediaMessage(
                    quotedMessage.videoMessage
                  );
                  await dragon.sendMessage(from, {
                    video: { url: videoUrl },
                    caption: videoCaption,
                    contextInfo: {
                      mentionedJid: [m.sender],
                      forwardingScore: 9999,
                      isForwarded: true,
                    },
                  });

                  reply("By Auto Saved System 💚");
                  fs.unlinkSync(videoUrl);
                }
              }
            }
          } catch (e) {
            console.log(e);
          }
        }
        break;


        case "xhamster": {
          try {
            await dragon.sendMessage(from, {
              react: { text: `🍆`, key: m.key },
            });
              if (!isPremium) return reply('Only Premium User')
            if (!text) return reply("❗ Please enter the video name.");
        
            const search = await axios.get(`https://api-dark-shan-yt.koyeb.app/search/xhamster?q=${text}&apikey=bbe41021af6d1d32`);
            const video = search.data.data[0];
        
            if (!video) return reply("❌ No results found!");
        
            const caption = `🍑 *Xhamster Downloader*\n\n🎞️ *${video.title.trim()}*\n\n` +
              `🔻 Choose a video quality:\n\n` +
              `1️⃣ 144p\n2️⃣ 240p\n3️⃣ 480p\n\n` +
              `> ✏️ Reply the Number `;
        
            const waitMsg = await dragon.sendMessage(from,
              { text: "⏳ Fetching video info..." },
              { quoted: m }
            );
        
            const sentMessage = await dragon.sendMessage(from, {
              text: caption,
              contextInfo: {
                forwardingScore: 9999,
                isForwarded: true,
              },
            }, { quoted: ai });
        
            const messageListener = async (chatUpdate) => {
              try {
                const mek = chatUpdate.messages[0];
                if (!mek?.message?.extendedTextMessage?.contextInfo ||
                    mek.message.extendedTextMessage.contextInfo.stanzaId !== sentMessage.key.id) {
                  return;
                }
        
                const selectedNum = mek.message.extendedTextMessage.text.trim();
                if (!['1', '2', '3'].includes(selectedNum)) {
                  await dragon.sendMessage(from, {
                    react: { text: `❌`, key: mek.key },
                  });
                  return reply("Please select a valid number (1-3)");
                }
        
                const qualityIndex = parseInt(selectedNum) - 1;
        
                await dragon.sendMessage(from, {
                  react: { text: `⏳`, key: mek.key },
                });
        
                const downloadingMsg = await dragon.sendMessage(from, {
                  text: `📥 Downloading: ${video.title.trim()}...`,
                }, { quoted: mek });
        
                const dlResponse = await axios.get(`https://api-dark-shan-yt.koyeb.app/download/xhamaster?url=${video.link}&apikey=bbe41021af6d1d32`);
                const downloadOptions = dlResponse.data.data;
                const selectedFile = downloadOptions[qualityIndex];
        
                await dragon.sendMessage(from, {
                  edit: downloadingMsg.key,
                  text: `📤 Uploading: ${selectedFile.file_quality} Quality...`,
                });
        
                await dragon.sendMessage(from, {
                  video: {
                    url: selectedFile.link_url,
                    mimetype: "video/mp4"
                  },
                  caption: `✅ *Downloaded:* ${video.title.trim()}\n🎥 *Quality:* ${selectedFile.file_quality}`,
                  fileName: `${selectedFile.file_name}`,
                  contextInfo: {
                    forwardingScore: 999999,
                    isForwarded: true,
                    externalAdReply: {
                      title: video.title,
                      body: "Powered by QUEEN-DINU-MD",
                      thumbnailUrl: video.thumbnail || 'https://files.catbox.moe/ym74xc.jfif',
                      mediaType: 1
                    }
                  }
                }, { quoted: mek });
        
                await dragon.sendMessage(from, {
                  react: { text: `✅`, key: mek.key },
                });
        
              } catch (error) {
                console.error("Download error:", error);
                await dragon.sendMessage(from, {
                  text: `❌ Failed: ${error.message}`,
                  quoted: m
                });
                await dragon.sendMessage(from, {
                  react: { text: `❌`, key: m.key },
                });
              }
            };
        
            // Attach listener
            dragon.ev.on("messages.upsert", messageListener);
        
            // Remove "fetching" message after 30s
            setTimeout(async () => {
              try {
                await dragon.sendMessage(from, { delete: waitMsg.key });
              } catch (e) {
                console.log("Could not delete wait message");
              }
            }, 30000);
        
          } catch (error) {
            console.error("Initial error:", error);
            await dragon.sendMessage(from, {
              text: "❌ Error processing your request",
              quoted: m
            });
          }
          break;
        }

        case 'play1': {
    if (!text) return reply("❗ Please enter the song name.");

    await dragon.sendMessage(m.chat, { react: { text: '🕖', key: m.key } });

    try {
        let search = await yts(`${text}`);
        if (!search || search.all.length === 0) return reply("❌ No results found!");

        let { videoId, image, title, views, duration, author, ago, url } = search.all[0];
        let caption = `「 *YOUTUBE PLAY* 」\n\n` +
                     `🎵 *Title*: ${title}\n\n` +
                     `👀 *Views*: ${views}\n\n` +
                     `⏳ *Duration*: ${duration.timestamp}\n\n` +
                     `📺 *Channel*: ${author.name}\n\n` +
                     `📅 *Uploaded*: ${ago}\n\n` +
                     `🔗 *URL*: ${url}`;

        await dragon.sendMessage(m.chat, {
            image: { url: image },
            caption: caption,
            footer: `@ King Switch`,
            buttons: [
                {
                    buttonId: `.song5 ${title}`,
                    buttonText: {
                        displayText: "🎶 Audio"
                    },
                    type: 1
                },
                {
                    buttonId: `.yt ${url}`,
                    buttonText: {
                        displayText: "🎥 Video"
                    },
                    type: 1
                }
            ],
            headerType: 1,
            viewOnce: true
        });

    } catch (error) {
        console.error(error);
        reply("⚠️ Error: " + error.message);
    }
    break;
}


case 'song5': {
  try {
      await dragon.sendMessage(from, { react: { text: '🎧', key: m.key }});
      if(!text) return reply("❗ Please enter the song name.");
      
      // Add await and proper template literal
      const response = await axios.get(`https://apis.davidcyriltech.my.id/song?query=${text}`);
      
      const songData = response.data.result;
      
     await dragon.sendMessage(from, { 
    audio: { 
        url: songData.audio.download_url 
    }, 
    fileName: songData.title + '.mp3', 
    mimetype: 'audio/mpeg', 
    ptt: false,
    contextInfo: {
        forwardingScore: 9999999,
        isForwarded: true
    }
    });
  


      await dragon.sendMessage(from, { react: { text: `✅`, key: m.key }});
  } catch (e) {
      console.log(e);
      reply(`❗ Error: ${e.message}`);
  }
}
break;

case 'yt': {
    if (!text) return reply("❗ Please provide a YouTube URL.");

    await dragon.sendMessage(m.chat, { react: { text: '📥', key: m.key } });

    try {
        let ytapi = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(text)}`;
        let res = await fetch(ytapi);
        if (!res.ok) throw new Error("Failed to fetch video data.");
        let json = await res.json();

        if (!json.success || !json.result || !json.result.download_url) {
            return reply("❌ Failed to retrieve download link.");
        }

        let { title, quality, download_url } = json.result;

        await dragon.sendMessage(m.chat, {
            video: { url: download_url },
            caption: `🎬 *${title}*\n📥 *Quality:* ${quality}`
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        reply("⚠️ Error occurred: " + err.message);
    }

    break;
}



             

        case "xvideo":
          case "xv": {
            try {
              await dragon.sendMessage(from, {
                react: { text: `🍆`, key: m.key },
              });

        if (!isPremium) return reply('Only Premium User')
             // if (!config.PREMIUM.includes(m.sender.split('@')[0])) {
               // return reply('')
            
              if (!text) return reply("❗ Please enter the video name.");
              const search = await axios.get(`https://apis.davidcyriltech.my.id/search/xvideo?text=${text}`);
          
let caption = `「 *Xvideo Downloader*  」\n\n🔍 *Search Results:*\n\n` +
  search.data.result.slice(0, 5).map((item, index) => {
    // Check if it's the 3rd item (index 2), then add the "readmore" message
    let resultText = `${index + 1}. *🎬 Title:* ${item.title}\n` +
      `   *⏱️ Duration:* ${item.duration}\n`;
    
    if (index === 2) {
      resultText += `\n... *${readmore}*`;  // Adding "readmore" after 3rd result
    }
    
    return resultText;
  }).join('') +
  `\n\n> Reply with the number`;
  


          
    const sentMessage = await dragon.sendMessage(from, {
    document: fs.readFileSync("./package.json"),
    fileLength: 100000000,
    pageCount: 999,
    fileName: 'Video List',
    mimetype: 'application/pdf',
    caption: caption,  // Corrected from 'tex' to 'caption'
    contextInfo: {
        mentionedJid: [m.sender, "0@s.whatsapp.net"],
        forwardingScore: 10,
        isForwarded: true
    }
}, { quoted: m });

          
              const messageListener = async (chatUpdate) => {
                try {
                  const mek = chatUpdate.messages[0];
                  if (!mek?.message?.extendedTextMessage?.contextInfo || 
                      mek.message.extendedTextMessage.contextInfo.stanzaId !== sentMessage.key.id) {
                    return;
                  }
          
                  const selectedNum = mek.message.extendedTextMessage.text.trim();
                  if (!['1','2','3','4','5'].includes(selectedNum)) {
                    await dragon.sendMessage(from, {
                      react: { text: `❌`, key: mek.key },
                    });
                    return reply("Please select a valid number (1-5)");
                  }
          
                  const index = parseInt(selectedNum) - 1;
                  const selectedVideo = search.data.result[index];
          
                  // React to show processing
                  await dragon.sendMessage(from, {
                    react: { text: `⏳`, key: mek.key },
                  });
          
                  const processingMsg = await dragon.sendMessage(
                    from, 
                    { text: `📥 Downloading: ${selectedVideo.title}` },
                    { quoted: mek }
                  );
          
                  try {
                    const { data: videoData } = await axios.get(
                      `https://apis.davidcyriltech.my.id/xvideo?url=${selectedVideo.url}`
                    );
          
                    // Update to uploading status
                    await dragon.sendMessage(from, {
                      edit: processingMsg.key,
                      text: `📤 Uploading: ${videoData.title}`
                    });
          
                    // Send the video
                    await dragon.sendMessage(
                      from,
                      {
                        video: {
                          url: videoData.download_url,
                          mimetype: "video/mp4"
                        },
                        caption: `✅ ${videoData.title}`,
                        fileName: `${videoData.title}.mp4`,
                        contextInfo: {
                          forwardingScore: 9999999,
                          isForwarded: true,
                          externalAdReply: {
                            title: videoData.title,
                            body: "Powerd By QUEEN-DINU-MD",
                            thumbnailUrl: videoData.thumbnail || 'https://files.catbox.moe/ym74xc.jfif',
                            mediaType: 1
                          }
                        }
                      },
                      { quoted: mek }
                    );
          
                    // React with success
                    await dragon.sendMessage(from, {
                      react: { text: `✅`, key: mek.key },
                    });
          
                  } catch (error) {
                    console.error("Download error:", error);
                    await dragon.sendMessage(from, {
                      text: `❌ Failed to download video: ${error.message}`,
                      quoted: mek
                    });
                    await dragon.sendMessage(from, {
                      react: { text: `❌`, key: mek.key },
                    });
                  }
          
                } catch (error) {
                  console.error("Listener error:", error);
                }
              };
          
              // Add listener without auto-removal
              dragon.ev.on("messages.upsert", messageListener);
          
              // Remove wait message after 30 seconds if no response
              setTimeout(async () => {
                try {
                  await dragon.sendMessage(from, { delete: waitMsg.key });
                } catch (e) {
                  console.log("");
                }
              }, 30000);
          
            } catch (error) {
              console.error("Initial error:", error);
              await dragon.sendMessage(from, {
                text: "❌ Error processing your request",
                quoted: m
              });
            }
            break;
          }

case "delprem": {
    if (!isCreator) return;
    if (!args[0]) return reply(`𝐄𝐱𝐚𝐦𝐩𝐥𝐞:\n• User: 9470xxx\n• Group: 120363xxxxxx@g.us`);

    let target = args[0];

    if (target.endsWith("@g.us")) {
        // Group JID එක නම්
        try {
            let metadata = await dragon.groupMetadata(target);
            let members = metadata.participants.map(p => p.id);
            let removed = 0;

            for (let id of members) {
                let idx = premium.indexOf(id);
                if (idx !== -1) {
                    premium.splice(idx, 1);
                    removed++;
                }
            }

            fs.writeFileSync("./lib/premium.json", JSON.stringify(premium, null, 2));
            reply(`✅ Removed ${removed} members from ${target} from premium.`);
        } catch (e) {
            reply("❌ Invalid group or failed to fetch group metadata.");
        }
    } else {
        // Individual user
        let jid = target.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        let index = premium.indexOf(jid);

        if (index === -1) return reply(`❌ ${jid} is not in premium list.`);
        premium.splice(index, 1);
        fs.writeFileSync("./lib/premium.json", JSON.stringify(premium, null, 2));
        reply(`✅ ${jid} removed from premium database.`);
    }
}
break;


      case "addprem": {
    if (!isCreator) return;
    if (!args[0]) return reply(`𝐄𝐱𝐚𝐦𝐩𝐥𝐞:\n• User: 947xxx\n• Group: 120363xxxxxx@g.us`);

    let target = args[0];
    
    if (target.endsWith("@g.us")) {
        // Group JID එකක් නම්
        try {
            let metadata = await dragon.groupMetadata(target);
            let members = metadata.participants.map(p => p.id);
            let added = 0;

            for (let id of members) {
                if (!premium.includes(id)) {
                    premium.push(id);
                    added++;
                }
            }

            fs.writeFileSync("./lib/premium.json", JSON.stringify(premium, null, 2));
            reply(`✅ ${added} members from ${target} added to premium.`);
        } catch (e) {
            reply("❌ Invalid group or failed to fetch group metadata.");
        }
    } else {
        // User number
        let jid = target.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        let ceknya = await dragon.onWhatsApp(jid);
        if (ceknya.length == 0) return reply(`❌ Invalid Number!`);

        if (premium.includes(jid)) return reply("Already premium!");
        premium.push(jid);
        fs.writeFileSync("./lib/premium.json", JSON.stringify(premium, null, 2));
        reply(`✅ ${jid} is now Premium!`);
    }
}
break;





     

      case "hirunews":
        {
          try {
            const api = await axios.get(
              `https://api.genux.me/api/news/hiru-news?apikey=${global.API_KEY}`
            );
            if (!api.data.status) {
              reply("API Not Working ( Conatct Nimesh Piyumal )");
            }

            const { key } = await dragon.sendMessage(
              from,
              { text: "Checking... News " + api.data.result[0].title },
              { quoted: m }
            );

            await delay(10000);

            let caption = `Title: ${api.data.result[0].title}\n\n`;
            caption += `Published: ${api.data.result[0].published}\n\n`;
            caption += `Link: ${api.data.result[0].link}\n\n`;
            caption += `Description: ${api.data.result[0].description}`;

            return await dragon.sendMessage(from, { text: caption, edit: key });
          } catch (e) {
            console.log(e);
          }
        }
        break;

      case "ringtone":
        {
          try {
            await dragon.sendMessage(from, {
              react: { text: "🥺", key: m.key },
            });
            if (!text) {
              reply("Provide a Ringtone Name");
            }

            const api = await axios.get(
              `https://api.genux.me/api/download/ringtone?query=${text}&apikey=GENUX-SANDARUX`
            );
            for (let i = 0; i < 5; i++) {
              const ringtone =
                api.data.result[
                  Math.floor(Math.random() * api.data.result.length)
                ];
              await dragon.sendMessage(from, {
                audio: { url: ringtone.audio },
                mimetype: "audio/mpeg",
                fileName: ringtone.title,
              });
            }
          } catch (e) {
            console.log(e);
          }
        }
        break;
    }
  } catch (err) {
    console.log(util.format(err));
    let e = String(err);
  }
};
