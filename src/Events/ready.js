const Event = require('../Structures/Event');
module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	run() {
		console.log([
			`    [WARN/CONNECT]: Logged in As ${this.client.user.tag}`,
			`    [DEBUG/CMDS]: Loaded ${this.client.commands.size} CMDS!`,
			`    [DEBUG/EVENTS]: Loaded ${this.client.events.size} Events!`
		].join('\n'));
	}

};