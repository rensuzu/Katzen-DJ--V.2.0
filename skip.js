// commands/skip.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('skip')
        .setDescription('Überspringt den aktuellen Song'),
    async execute(interaction) {
        // Implementiere Logik zum Überspringen des Songs
        await interaction.reply('Song wurde übersprungen.');
    },
};

