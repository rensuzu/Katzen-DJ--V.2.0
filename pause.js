// commands/pause.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pause')
        .setDescription('Pausiert die Musik'),
    async execute(interaction) {
        // Implementiere Logik zum Pausieren der Musik
        await interaction.reply('Musikwiedergabe pausiert.');
    },
};
