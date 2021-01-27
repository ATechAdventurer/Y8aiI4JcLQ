require('dotenv').config();
const { Client } = require('discord.js');

const rules = require('./rules.json');
const { NO_COMPATIBLE_SERVERS_FOUND, NO_RULES_FOUND } = require('./lib/constants');
const { buildEmbed } = require('./lib/embed');
const bot = new Client();

bot.on('ready', _ => {
    console.log(`Logging in with identity: ${bot.user.tag}`);
    const guilds = bot.guilds.cache.array();
    const compatibleGuilds = guilds.filter(guild => rules.hasOwnProperty(guild.id));
    if (compatibleGuilds.length <= 0) {
        throw new Error(NO_COMPATIBLE_SERVERS_FOUND);
    }
})

bot.on('message', (msg) => {
    if (msg.author.bot || !msg.content.startsWith(process.env.DISCRIMINATOR)) {
        return;
    }
    const formattedCommand = msg.content.replace(process.env.DISCRIMINATOR, "").split(" ");
    switch (formattedCommand[0]) {
        case "rules":
            if(!rules.hasOwnProperty(msg.guild.id)){
                msg.reply(NO_RULES_FOUND);
                return;
            }
            msg.channel.send(buildEmbed(msg.guild.id));
            msg.delete();
            break;
    }
})

bot.login(process.env.DISCORD_BOT_TOKEN);