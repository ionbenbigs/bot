const { Client, GatewayIntentBits } = require('discord.js');

module.exports = {
    name: 'pong',
    async run (bot, message) {
        await message.reply('ping!');
    }
}
