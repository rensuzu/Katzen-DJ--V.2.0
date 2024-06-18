// commands/stop.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Stoppt die Musik'),
    async execute(interaction) {
        // Implementiere Logik zum Stoppen der Musik
        await interaction.reply('Musikwiedergabe gestoppt.');
    },
};
