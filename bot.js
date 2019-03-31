const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NTYxODY4MDQ2NjM0MDU3NzMw.XKCesg.y4fPFAAC0ElznD0c3zp8ztS5lJA);
