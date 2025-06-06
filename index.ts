import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('messageCreate', (message) => {
  console.log("messageCreate", message.content)
  if (message.content.toLowerCase() === 'ping') {
    message.reply('pong');
  }
});

client.login(process.env.DISCORD_TOKEN)
