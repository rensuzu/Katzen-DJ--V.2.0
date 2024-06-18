// commands/shuffle.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shuffle')
        .setDescription('Mischt die aktuelle Warteschlange von Songs'),
    async execute(interaction) {
        // Implementiere Logik zum Mischen der Warteschlange
        await interaction.reply('Die Warteschlange wurde erfolgreich gemischt.');
    },
};
