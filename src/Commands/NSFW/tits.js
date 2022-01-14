const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');
const fetch = require("node-fetch")

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: '||Tits||',
			category: 'NSFW',
			aliases: ["t"]
		});
	}

	async run(message, [command]) {
	    if(!message.channel.nsfw) {
            return message.reply("Not For This Type of channels! Please, Use NSFW channels!")
	    } 
        fetch("https://nekos.life/api/v2/img/tits")
        .then(res => res.json())
		.then(json => {
            let embed = new MessageEmbed()
			.setTitle("Tits")
			.setColor("#FFB6C1")
			.setImage(json.url)
			message.channel.send({embeds: [embed], reply: {messageReference:  `${message.id}`}})
		})
    }

};