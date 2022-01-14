const { MessageEmbed, version: djsversion } = require('discord.js');
const Command = require('../../Structures/Command');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['bot', 'info', 'bi'],
			description: 'Get Information About Bot',
			category: 'Info'
		});
	}

	async run(message, [command], id) {
		const core = os.cpus()[0];
		const embed = new MessageEmbed()
			.setThumbnail(this.client.user.displayAvatarURL())
			.setColor(message.guild.me.displayHexColor || 'BLUE')
			.addField('Main', `**❯ Name:** ${this.client.user.tag} (${this.client.user.id})\n**❯ Total Commands:** ${this.client.commands.size}\n**❯ Events:** ${this.client.events.size}\n**❯ Events:** ${this.client.events.size}\n**❯ Servers:** ${this.client.guilds.cache.size.toLocaleString()}\n**❯ Shard:** ${message.guild.shard.id}/${this.client.shard.count}\n**❯ Users:** ${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\n**❯ Channels:** ${this.client.channels.cache.size.toLocaleString()}\n**❯ Created At:** ${utc(this.client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}\n**❯ Node.js:** ${process.version}\n**❯ Discord.js:** v${djsversion}`,)
			.addField('System', `**❯ Uptime:** ${ms(this.client.uptime, { long: true })}\n**❯ Platform:** ${os.platform}\n**❯ System online:** ${ms(os.uptime() * 1000, { long: true })}\n**❯ CPU:**\n\u3000 Cores: ${os.cpus().length}\n\u3000 Models: ${core.model}\n\u3000 Speed: ${core.speed}MHz\n**❯ RAM:**\n\u3000 Total: ${this.client.utils.formatBytes(process.memoryUsage().heapTotal)}\n\u3000 Used: ${this.client.utils.formatBytes(process.memoryUsage().heapUsed)}`,)
			.setTimestamp();
        message.channel.send({embeds: [embed], reply: {messageReference:  `${message.id}`}})
	}

};