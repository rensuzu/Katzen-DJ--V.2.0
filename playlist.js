// commands/playlist.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('playlist')
        .setDescription('Erstellt eine Playlist oder zeigt vorhandene Playlists an'),
    async execute(interaction) {
        // Implementiere Logik zum Verwalten von Playlists
        await interaction.reply('Playlists werden verwaltet.');
    },
};
