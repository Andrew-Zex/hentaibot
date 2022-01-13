const hent = require('./Structures/Hent');
const config = require('../config.json'); 

const client = new hent(config);
client.start();