# bot

bot.on('ready', () => {
    console.log('Le bot est prêt !');
  });

  bot.on('message', (message) => {
    if (message.content === '!ping') {
      message.channel.send('Pong !');
    }
  });