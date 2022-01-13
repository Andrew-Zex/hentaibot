const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');
const fetch = require("node-fetch")

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: '||LEWD||',
			category: 'NSFW'
		});
	}

	async run(message, [command]) {
	    if(!message.channel.nsfw) {
            return message.reply("Not For This Type of channels! Please, Use NSFW channels!")
	    } 
        fetch("https://nekos.life/api/lewd/neko")
        .then(res => res.json())
		.then(json => {
            let embed = new MessageEmbed()
			.setTitle("Lewd")
			.setColor("#FFB6C1")
			.setImage(json.neko)
			message.channel.send({embeds: [embed]})
		})
    }

};