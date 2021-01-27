const { MessageEmbed } = require('discord.js');

const rules = require('../rules.json');

function buildEmbed(serverID) {
    const { color, title, preamble, rules: ServerRules } = rules[serverID];
    const embed = new MessageEmbed()
        .setColor(color)
        .setTitle(`-- ${title} --`)
        .setDescription(`${preamble}`);
    ServerRules.forEach((serverRule, index) => {
        let content = `***${serverRule.title}*** ${serverRule.body}`;
        if(serverRule.hasOwnProperty("disclaimer")){
            content += `\n\n ***Disclaimer*** ${serverRule.disclaimer}`;
        }
        embed.addField(`Rule ${index + 1}:`, content);
        //console.log(serverRule.title)
    });
    return embed;
}

module.exports = { buildEmbed };