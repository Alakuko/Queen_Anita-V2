//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "samuelogundipe12@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://hermit_md_7mgj_user:cvJRViwKDCcfGnrLTjETAzkRns7n3WZ4@dpg-cqi1kgdsvqrc73chpaq0-a.oregon-postgres.render.com/hermit_md_7mgj";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348138392770";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "paused";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0Y4dzVxQktoTjdPaFh3RmEwQkN5aVRzRXNQQzk1bGFOTU13eGNZODJFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUFMVnlubStjb2VLTTdsdXBUa2VzNDNZeDdCZG1lbjBYVWQ5ZHBPanUzVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQjJhWUFPMzQ3aC9vRFR0Q25DWmgxVHdtWFhOSitOUHI5L3Y0UWd5NTJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWOGdCR1h4RHNWSitEQndBN3BKV1d6S09jaElBaksvNitpbHU2RW5ZUGxzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNBSmo5dE0wZWNUZGluSk5Ib2U3b1VGT25hMnBCa3MvcEFYVFhUOHB3Rlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhZQTE3aVE1WUppejlSdUtEeDNqS0ZqQ21MNnFOVGVJUUVqd0Q0dkFCM2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic09EYW5ob3YrR1R5RjlML1JhdFhiM0pWNWZKV1h1UWhQTW1CQVRFQXhGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnREQVJhQ2M1ZWFPelhnNVFwK2RlYUlpVGlEajNZd1ZvTzAyd3ZaMnAydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhzOE1tUTlUTWphOE1hRHczd0t3V1lDUlp0Ni9SUEI0elRML25MdTNGaTNVTHhmWkk3Wk1ucFlZZHJrSWZmYVA2dXpTbkEzNktwVWJYVFlrcEJ5NUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6IlJrNTlkdE9yeC90Q1p0MitjMVBRR1o3aThHZ01hemR1WmNLUklkT1N2cDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjE5bjNkVENZU0RheGJYR3MyOEpoNUEiLCJwaG9uZUlkIjoiOTk0ZTJlZTEtYzdiMC00NTdhLTliZGUtZDBiY2ZkZDk2OWY3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVVeVFUTFZMVkRTMWZBRkFGSjV1MTVnOXRTWT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2huVWhSNG53L2xWY2hEa3dIbDBmaXJpOXFFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXF3dFBvRkVKTytrTFVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoianU2VWE4U0pUTWhsTm5iT3ZkNXhqd1ZDQXhwOFVBVDhiZSt6Ti9HYkZXVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVFN6WUdtYnJWMHplU2k0U1pyS0U3aEZ4d2RPLzZRQVFiNFJwTGFLVzM3M012SUI2WHJjY0RjTTUvWlAvOU9wVDFwdUdHUmlCc1hqSzh5azg4VGY5Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjlkWktYb2t5M3FGaWFlSEp0WmtzUS9ONSswN3dPU0Z5SXE2Q3JaSGVxSzNXdElhK0pPL3BMQU1keGVNRzBKSWpkKzNKK0doQXNvcEYyb0RzMm82dUJnPT0ifSwibWUiOnsiaWQiOiIyMzQ4MTM4MzkyNzcwOjg4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTg0NTI5MzYwNzk3Nzc4Ojg4QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTM4MzkyNzcwOjg4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlk3dWxHdkVpVXpJWlRaMnpyM2VjWThGUWdNYWZGQUUvRzN2c3pmeG14VmwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBd0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjAzMTkwNCwibGFzdFByb3BIYXNoIjoiMWxPU0VJIn0=
"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BOLEXY-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "BOLEXY-V2",
  ownername: process.env.OWNER_NAME || "BOLEXY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
