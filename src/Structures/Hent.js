const { Client, Collection, Intents } = require('discord.js');
const Util = require('./Util.js');

module.exports = class hent extends Client {

	constructor(options = {
	    "owners": ["599252253404299316"]
	}) {
		super({
			disableMentions: 'everyone',
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MEMBERS,
                Intents.FLAGS.GUILD_MESSAGES
            ]
		});
		this.validate(options);

		this.commands = new Collection();

		this.aliases = new Collection();

		this.events = new Collection();

		this.utils = new Util(this);

		this.owners = options.owners;
	}

	validate(options) {
		if (typeof options !== 'object') throw new TypeError('The parameters must be type of Object.');

		if (!options.token) throw new Error('You must pass the token to the client.');
		this.token = options.token;

		if (!options.prefix) throw new Error('You must pass the prefix to the client.');
		if (typeof options.prefix !== 'string') throw new TypeError('Prefix must be type of String.');
		this.prefix = options.prefix;
	}

	async start(token = this.token) {
		this.utils.loadCommands();
		this.utils.loadEvents();
		super.login(token);
	}

};
