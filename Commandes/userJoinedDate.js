const { Client, GatewayIntentBits, User } = require('discord.js');

module.exports = {
    name: 'userJoinedDate',
    async run (bot, message) {
        const user = message.author.joinedAt; // Get user information

        await message.reply(`Ping :\'${user}\'`);


    }
}



// await message.reply(`Ping :\'${user.joinat}\'`);