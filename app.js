const { Client, GatewayIntentBits, ChannelType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const TOKEN = 'MTAzMTg4OTE5NTkwNTU5MzM3NQ.Gjy3K9.mP8Hj9Kj7m3JtstcjnUiHgJYEA5MATFy2NCtiM';
const CLIENT_ID = '1031889195905593375';
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Poooooooooooooong!');
    }
    
    if (interaction.commandName ==='criar-canal') {
     let channel= await interaction.guild.channels.create({
           name: 'Nome do Camnnnnnal',
           type: ChannelType.GuildText});

        await interaction.reply('Canal criado com sucesso');
        await channel.send("@everyone has");
        await interaction.guild.channels.fetch(channel.id)
        .then(channel => console.log(`The channel name is: ${channel.id}`))
        .catch(console.error);
    }
});

const { REST, Routes } = require('discord.js');

const commands = [
	{
		name: 'criar-canal',
		description: 'Cria um canal de texto',
    },
    {
        name: 'ping',
        description: 'retorna um pong',
    }
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();

client.login(TOKEN);