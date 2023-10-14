const { Client, GatewayIntentBits, MessageEmbed } = require('discord.js');
const { token } = require('./config.json');

/* eslint-disable indent, quotes */
const client = new Client({
intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once('ready', () => {
console.log(`Pronto! Logging executado com sucesso ${client.user.tag}`);
});

/* eslint-disable indent, quotes */
client.on('messageCreate', (msg) => {
  if (msg.content.startsWith('!avaliar')) {
    const args = msg.content.split(' ');
    if (args.length < 5) {
      msg.reply('Uso correto: !avaliar <Título> <Autor> <Avaliação> <Descrição>');
      return;
    }

    const titulo = args[1];
    const autor = args[2];
    const avaliacao = args[3];
    const descricao = args.slice(4).join(' ');

    const embed = new MessageEmbed()
      .setTitle(titulo)
      .setAuthor(autor)
      .setDescription(descricao)
      .addField('Avaliação', avaliacao, true);

    msg.channel.send({ embeds: [embed] });
  }
});

client.login(token);
