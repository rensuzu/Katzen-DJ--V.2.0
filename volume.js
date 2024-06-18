// commands/volume.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('volume')
        .setDescription('Ändert die Lautstärke der Musikwiedergabe')
        .addIntegerOption(option =>
            option.setName('level')
                .setDescription('Die Lautstärkelevel (1-100)')
                .setRequired(true)),
    async execute(interaction) {
        const volumeLevel = interaction.options.getInteger('level');

        // Implementiere Logik zum Ändern der Lautstärke
        await interaction.reply(`Die Lautstärke wurde auf ${volumeLevel} gesetzt.`);
    },
};
