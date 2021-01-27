require('dotenv').config();
const { Client } = require('discord.js');

const rules = require('./rules.json');
const {NO_COMPATIBLE_SERVERS_FOUND} = require('./lib/constants');
const bot = new Client();

bot.on('ready', _ => {
    console.log(`Logging in with identity: ${bot.user.tag}`);
    const guilds = bot.guilds.cache.array();
    const compatibleGuilds = guilds.filter(guild => rules.hasOwnProperty(guild.id));
    if(compatibleGuilds.length <= 0){
        throw new Error(NO_COMPATIBLE_SERVERS_FOUND);
    }
})

bot.login("");