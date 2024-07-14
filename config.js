const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_13_23_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDU2LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk3LFxuICAgICAgICA3MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDksXG4gICAgICAgIDI1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibjhQYkhNSDl2OTRBYUxubVZUTktwU3lSN01XcHd6ZWNTR1BxeFZ1cjFvND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0OTc4MTI4OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcyOUEwNDgyNjg2Mjk4RDg4MkIwQTlFNTk2MDlCRkZFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDYxNzgxNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ5NzgxMjg5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjUwODNCNEQ4RjFGREREMDY5NzZBNjI0QkZERTVFREJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjE3ODE0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVvUEpYMVk3U1F5WDRrQzUxTHJaVXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTkyNjczNjQtOTNkNy00OTg3LTk2NTItZmUzODE2MzczNzNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMTg1LFxuICAgICAgNjksXG4gICAgICAyMTMsXG4gICAgICAxNjIsXG4gICAgICAxMzIsXG4gICAgICAyMzksXG4gICAgICA0LFxuICAgICAgNTMsXG4gICAgICAxMDksXG4gICAgICAzMCxcbiAgICAgIDEwNyxcbiAgICAgIDM4LFxuICAgICAgNzQsXG4gICAgICAyMzksXG4gICAgICAxMDUsXG4gICAgICAyMTAsXG4gICAgICA1OCxcbiAgICAgIDgxLFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDEwOCxcbiAgICAgIDIzOSxcbiAgICAgIDE4NixcbiAgICAgIDEyLFxuICAgICAgMjQ1LFxuICAgICAgMjQ5LFxuICAgICAgNjksXG4gICAgICAxMzAsXG4gICAgICA4MSxcbiAgICAgIDY2LFxuICAgICAgMjE1LFxuICAgICAgOTEsXG4gICAgICAyMzEsXG4gICAgICAyNDMsXG4gICAgICA3OSxcbiAgICAgIDEwNixcbiAgICAgIDgwLFxuICAgICAgMTQ2LFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVJOOTFSVjhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ5NzgxMjg5MzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKIsPCdkIwg8J2QkvCdkKHwnZCa8J2QofCdkJvwnZCa8J2QpyDwnZCA8J2QpfCdkKLiiLBcIixcbiAgICBcImxpZFwiOiBcIjI2Nzk4NDkyMDY3ODU2MjoyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJUGZ0cDhFRU0yV3VyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhzZHliUjhOa29CaldtWFdiOENuakphUjVjS20rUmVRajJOay8wMldmd0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZWJXT05sWjdjTU13NU1yWFprRWdwRy9EQzJUQmhBeG5SVjhYZHFoYk9heTZuTnAwM2R2cGtxNEs4K1BtNmJ5UFozQWk0VWJkZ1JkZkJLM3JQaVkvQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidDhQYWtaZlZBOXdrYmJ6azFDVjNFOHY4cHZxZ252RzBiM1I0SmxnL2VqdHROaFhXOVJDRURUOFU5SGNiaGEwYzFjQ0s4RFNHV0tET2ZlamZqWWtiZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDk3ODEyODkzOjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjE3ODA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWNpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJY2kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJQXNkc3E5MmNYM0pyVFoyTFZSK1E1RWRNMU1XWWhxZW5mREw2OCsvQm5rPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMzk2NTA0MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDYxNzgxMTIwN1wifSIKfQ==|  "https://youtu.be/-ZS7PmJ15NU?si=86SuNdPFMceBkeJg"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
