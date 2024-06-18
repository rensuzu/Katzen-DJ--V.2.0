// bot.js
const { Client, Intents } = require("discord.js");
const fs = require("fs");
const { token, clientId, guildId, commandsDir } = require("./config.js");
const { printWatermark } = require('./util/pw');
const { initializePlayer } = require('./player');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
    ],
});

client.commands = new Map();

// Funktion zum Laden der Befehle
const loadCommands = async () => {
    const commandFiles = fs.readdirSync(commandsDir).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./${commandsDir}/${file}`);
        client.commands.set(command.data.name, command);
    }
};

// Event für den Bot ist bereit
client.once('ready', async () => {
    console.log(`Eingeloggt als ${client.user.tag}`);
    printWatermark();

    try {
        await client.guilds.cache.get(guildId)?.commands.set([...client.commands.values()].map(command => command.data));
        console.log('Slash-Befehle erfolgreich geladen.');
    } catch (error) {
        console.error('Fehler beim Laden der Slash-Befehle:', error);
    }
});

// Event für neue Interaktionen (Slash-Befehle)
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(`Fehler beim Ausführen des Befehls "${interaction.commandName}":`, error);
        await interaction.reply({ content: 'Es gab einen Fehler beim Ausführen dieses Befehls.', ephemeral: true });
    }
});

// Login mit dem Token
client.login(token)
    .then(() => console.log('Erfolgreich angemeldet'))
    .catch(error => console.error('Fehler beim Anmelden:', error));

// Funktion zum Initialisieren des Players und anderer Module
initializePlayer(client);
