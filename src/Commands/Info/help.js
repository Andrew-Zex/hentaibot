const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['h'],
			description: 'Get Commands List',
			category: 'Info',
			usage: '[command]'
		});
	}

	async run(message, [command]) {
		const embed = new MessageEmbed()
			.setColor('BLUE')
			.setAuthor(`${message.guild.name} Help Menu`, message.guild.iconURL({ dynamic: true }))
			.setThumbnail(this.client.user.displayAvatarURL())
			.setFooter(`Requested By ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
			.setTimestamp();

		if (command) {
			const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command));

			if (!cmd) return message.channel.send(`Command Not Found. \`${command}\``);

			embed.setAuthor(`${this.client.utils.capitalise(cmd.name)} Help Command`, this.client.user.displayAvatarURL());
			embed.setDescription([
				`**❯ Aliases:** ${cmd.aliases.length ? cmd.aliases.map(alias => `\`${alias}\``).join(' ') : 'Not Found'}`,
				`**❯ Description:** ${cmd.description}`,
				`**❯ Category:** ${cmd.category}`,
				`**❯ Usage:** ${cmd.usage}`
			]);

			message.channel.send({embeds: [embed]});
		} else {
			embed.setDescription(`Aviable For ${message.guild.name}\nMy Prefix: ${this.client.prefix}\nOptions: \`<>\` Required & \`[]\` Optional`);
			let categories;
			/*if (!this.client.owners.includes(message.author.id)) {
				categories = this.client.utils.removeDuplicates(this.client.commands.filter(cmd => cmd.category !== 'Dev').map(cmd => cmd.category));
			} else {*/
				categories = this.client.utils.removeDuplicates(this.client.commands.map(cmd => cmd.category));
			//}

			for (const category of categories) {
				embed.addField(`**${this.client.utils.capitalise(category)}**`, this.client.commands.filter(cmd =>
					cmd.category === category).map(cmd => `\`${cmd.name}\``).join(' '));
			}
			message.channel.send({embeds: [embed]});
		}
	}

};