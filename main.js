const { Client, GatewayIntentBits, Collection } = require('discord.js');
const bot = new Client({ intents: 3276799 });
const LoadCommands = require('./Loader/LoadCommands');
const config = require('./config');

bot.commands= new Collection()

bot.login(config.token);
LoadCommands(bot);

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});
bot.on('messageCreate', async message => {
    if(message.content ==='!ping')return bot.commands.get("ping").run(bot,message)

});
bot.on('messageCreate', async message => {
    if(message.content ==='!pong')return bot.commands.get("pong").run(bot,message)

});

