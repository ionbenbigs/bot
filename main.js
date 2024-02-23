const { Client, GatewayIntentBits, Collection } = require('discord.js');
const bot = new Client({ intents: 3276799 });
const LoadCommands = require('./Loader/LoadCommands');
const config = require('./config');

const COMMANDS = {
    ping: "!ping",
    pong: "!pong",
    userJoinedDate : "!joined-date", 
}; 

bot.commands= new Collection()

bot.login(config.token);
LoadCommands(bot);



bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});
bot.on('messageCreate', async message => {
    if(message.content === COMMANDS.ping)return bot.commands.get("ping").run(bot,message);
    if(message.content === COMMANDS.pong)return bot.commands.get("pong").run(bot,message);
    if(message.content === COMMANDS.userJoinedDate)return bot.commands.get("userJoinedDate").run(bot,message);

});
