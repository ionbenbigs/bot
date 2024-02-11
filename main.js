const { Client, GatewayIntentBits } = require('discord.js');
const bot = new Client({ intents: 3243773 });

const config = require('./config');

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });

  
  bot.on('interactionCreate', async interaction => {
    console.log("INTERACTION");
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
      console.log("pong");
    }
  });
  
  bot.login(config.token);
