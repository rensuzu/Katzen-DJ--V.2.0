// commands/queue.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('queue')
        .setDescription('Zeigt die aktuelle Warteschlange von Songs an'),
    async execute(interaction) {
        // Implementiere Logik, um die Warteschlange anzuzeigen
        await interaction.reply('Hier ist die aktuelle Warteschlange: ...');
    },
};
