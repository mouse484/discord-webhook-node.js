const Discord = require("discord.js");

const setting = require("./setting.js");

const url = setting.url.split("/");

const hook = new Discord.WebhookClient(url[5], url[6]);

hook.send(setting.text).then(() => console.log(`Sent:\n${setting.text}`)).catch(err => console.error(err));
