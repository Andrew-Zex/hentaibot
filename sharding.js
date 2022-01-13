const { ShardingManager } = require("discord.js")
let { token } = require("./config.json")
let manager = new ShardingManager('src/index.js', {
    token: token
     
})

manager.on('shardCreate', shard => {
    console.log(`[DEBUG/SHARDS]: Launched shard ${shard.id}`)
    
});
manager.spawn();