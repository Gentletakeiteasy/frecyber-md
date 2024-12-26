//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "255620814108,255764182801,255776663848,255752593977";
global.sudo = process.env.SUDO || "255620814108,255764182801,255776663848,255752593977";
global.owner = process.env.OWNER_NUMBER || "2347015505825";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMExXNHhmcFN4eVhPVnNIV2F0WS9oSGNPZTVBMnNmRWJ5STVVdGp2aWgzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZEYmZ4bVFnYjdBT08yaUo1VkYvWGY4amwzVGJaYUFTTTN4TXpHVUkxND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRWQzNC9OaG9PSFlLMkFHTENpK25VbFY5TWduY2E3NHRVK1RZVE8rWVdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlbk5HZHFmdVNlNjV2aVhsM2VMemJyNEtzb0ZkYmRLUFZBRmdnZmNLN0ZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNCOEVCOWhFVjV3VkN0ZVZoZzVuN1dlY0pyTFBvSzVWdWp5a25LOXBWMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1XdVFtWGxtdGRsNjdJWGlBLzl5bjI5c2JCbHVWNkt0eDQrbHBWYzNSR2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZURzL3FVRWc0WmtPeXZzZkhjWWx5dXpPQ3NpNmkzWGptSkkwQjMyZ21Gaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWW9QTDEzMmpiRVJuaEZsMDFRU2JrdEtpN2FxVjN5QzdTY2dNRVVvcTdVMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtvL1B3dUl1V2lqeGFuZ25RSUsybmlvYWxQWjJTUTlpVDUyUjZYK2hHdmVkb3ZnTUxtazMrV1NiWWFUVGVjV1pXOGE2YnYrSjNXNGJWMlJaR2YwbGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiJtZWFnd1V3NzdiSURCVE5LS3JRL2Nlall6U0pUL0dkRERqNnA0czRiU2drPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfRC0zMk9YVVNtS1dwQUFuMks5OW1nIiwicGhvbmVJZCI6ImI2Y2YzYzU2LTIxZTMtNDE3Mi05NzJiLWY1ZGE0ZDFhNjdlYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTHFVZUR4NlJIOHpCTDRUc1lXaURoeTcxTFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjBybXd1YkZJMWtTR2xGZThtTko4VWZWTFpNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijk1ODE4V0VWIiwibWUiOnsiaWQiOiIyMzQ3MDE1NTA1ODI1OjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05YYnNzNEVFSlBYc2JzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJpTXFvdkhOWWRCaHZrQnZJemxheXJDdWd6WVFYTWkyZ3lzek1VTEE1anc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjBjWkJYc0hzaUVJZE9hUGhLUDdqOU11cGN5YUN6SGJoekxjTWIzRG1UcDMyS3VwTnllZEN0TUJtbmtNWmNwcmlQWmFiTFc4SlQrclg4Mkd2akVVOEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmQ1BWNFZNNmFscVZzcUd2ODN5cHVOcDkyMjlIOU1FR0ZPVXFZWEZsMTc5RHlGNE0zQmlqQXd1RDl0VXk4WkhUS2dlUkovbDVXNEViMmNGM1g3ek9oZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMTU1MDU4MjU6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRWWpLcUx4eldIUVliNUFieU01V3Nxd3JvTTJFRnpJdG9Nck16RkN3T1k4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1MTU4Njg5fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐅𝚪𝚵𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  author: process.env.PACK_AUTHER || "FRECYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRECYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "FRECYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
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
