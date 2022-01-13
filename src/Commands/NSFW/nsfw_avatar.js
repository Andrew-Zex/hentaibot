const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');
const fetch = require("node-fetch")

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: '||Nsfw Avatar||',
			category: 'NSFW'
		});
	}

	async run(message, [command]) {
	    if(!message.channel.nsfw) {
            return message.reply("Not For This Type of channels! Please, Use NSFW channels!")
	    } 
        fetch("https://nekos.life/api/lewd/nsfw_avatar")
        .then(res => res.json())
		.then(json => {
            let embed = new MessageEmbed()
			.setTitle("NSFW Avatar")
			.setColor("#FFB6C1")
			.setImage(json.neko)
			message.channel.send({embeds: [embed]})
		})
    }

};