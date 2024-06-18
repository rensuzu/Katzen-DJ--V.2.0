// interactionCreate.js
const { Client, Intents, Interaction } = require('discord.js');
const { readdirSync } = require('fs');
const path = require('path');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Map();

const commandFiles = readdirSync(path.join(__dirname, '../commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log(`Eingeloggt als ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(`Fehler beim Ausführen des Befehls ${interaction.commandName}:`, error);
        await interaction.reply({
            content: 'Es gab einen Fehler beim Ausführen dieses Befehls.',
            ephemeral: true // Antwort ist nur für den Benutzer sichtbar, der den Befehl ausgeführt hat
        });
    }
});

client.login(process.env.TOKEN);
