const { Client, GatewayIntentBits } = require('discord.js');

module.exports = {
    name: 'ping',
    async run (bot, message) {
        await message.reply(`Ping :\'${bot.ws.ping}\'`);
    }
}
