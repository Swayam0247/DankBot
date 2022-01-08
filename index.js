const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	console.log('The bot is online!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

client.on('messageCreate', msg => {
	if (msg.content.toLowerCase() === 'good morning' || msg.content.toLowerCase() === 'gm') {
		msg.reply('Good morning retard');
	}
});

client.on('messageCreate', msg => {
	if (msg.content.toLowerCase() === 'swayam is cringe') {
		msg.reply('No');
	}
});

client.on('messageCreate', msg => {
	if (msg.content.toLowerCase() === 'dankbot wish us luck' || msg.content.toLowerCase() === 'wish us luck dankbot') {
		msg.reply('@everyone Good luck retards');
	}
});

client.on('messageCreate', msg => {
	if (msg.content.toLowerCase() === 'i love you dankbot' || msg.content.toLowerCase() === 'ily dankbot' || msg.content.toLowerCase() === 'dankbot i love you' || msg.content.toLowerCase() === 'dankbot ily') {
		msg.reply('I love you too UwU');
	}
});

client.on('messageCreate', msg => {
	if (msg.author.bot == false) {
		if (msg.content.toLowerCase() === 'so bad') {
			msg.channel.send('So bad');
		}
	}
});

client.on('messageCreate', msg => {
	if (msg.content.toLowerCase() === 'i love this bot') {
		msg.reply(':flushed:');
	}
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === 'hello' && msg.author.id === '833373673800073216'|| msg.content.toLowerCase() === 'hi' && msg.author.id === '833373673800073216') {
		msg.reply('Hello Mommy');
	}
	else if (msg.content.toLowerCase() === 'hello' && msg.author.id === '804192512549060608'|| msg.content.toLowerCase() === 'hi' && msg.author.id === '804192512549060608') {
		msg.reply('Hello retard');
	}
	else if (msg.content.toLowerCase() === 'hello' && msg.author.id === '650316275301613569'|| msg.content.toLowerCase() === 'hi' && msg.author.id === '650316275301613569') {
		msg.reply('Hello retard');
	}
	else if (msg.content.toLowerCase() === 'hello' && msg.author.id === '505717639453343745'|| msg.content.toLowerCase() === 'hi' && msg.author.id === '505717639453343745') {
		msg.reply('Hello retard');
	}
	else if (msg.content.toLowerCase() === 'hello' && msg.author.id === '763379685698174987'|| msg.content.toLowerCase() === 'hi' && msg.author.id === '763379685698174987') {
		msg.reply('Hello retard');
	}
	else if (msg.content.toLowerCase() === 'hello' && msg.author.id === '749858173464215602'|| msg.content.toLowerCase() === 'hi' && msg.author.id === '749858173464215602') {
		msg.reply('Hello retard');
	}
	else if (msg.content.toLowerCase() === 'hello' && msg.author.id === '813401585870700544'|| msg.content.toLowerCase() === 'hi' && msg.author.id === '813401585870700544') {
		msg.reply('Hello retard');
	}
});

client.on('messageCreate', msg => {
	if (msg.content.toLowerCase() === ':ari') {
		msg.reply('<:ari:864701009266737202>');
	}
});

const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('kysnow.jpg');
client.on('messageCreate', msg => {
	if (msg.content.toLowerCase().includes ('kys now')) {
		msg.channel.send({ files: [file] });
	}
});

client.on('messageCreate', async msg => {
	if (msg.author.bot == false) {
		if (msg.content.toLowerCase().includes('shreya')) {
			msg.channel.send('shreya shut yo skin tone chicken bone google chrome no home flip phone disowned ice cream cone garden gnome extra chromosome metronome dimmadome genome full blown monochrome student loan Indiana Jones overgrown flintstone x and y hormone friend zone ass up');
		}
	}

});

const fetch = require('node-fetch')
const giveMeAJoke = require('discord-jokes');
giveMeAJoke.getRandomDadJoke (function(joke) {
});
client.on("message", msg => {
    if (msg.content === "/joke") {
        giveMeAJoke.getRandomDadJoke (function(joke) {
      msg.channel.send(joke);
    });
    }
});

client.on("message", async msg => {
    if (msg.content === "/cat") {
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		msg.channel.send({ files: [file] });
  }
});

client.login(token);