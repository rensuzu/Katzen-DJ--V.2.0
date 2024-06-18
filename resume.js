// commands/resume.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('resume')
        .setDescription('Setzt die Musikwiedergabe fort'),
    async execute(interaction) {
        // Implementiere Logik zum Fortsetzen der Musikwiedergabe
        await interaction.reply('Musikwiedergabe fortgesetzt.');
    },
};
