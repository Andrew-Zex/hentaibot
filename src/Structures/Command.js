module.exports = class Command {

	constructor(client, name, options = {}) {
		this.client = client;
		this.name = options.name || name;
		this.aliases = options.aliases || 'No Aliases';
		this.description = options.description || 'No Description.';
		this.category = options.category || 'No Category';
		this.usage = options.usage || 'No Using.';
	}

	async run(message, args) {
		throw new Error(`Command ${this.name} I did not foresee this method!`);
	}

};
