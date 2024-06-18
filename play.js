// commands/play.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Spiele Musik ab')
        .addStringOption(option =>
            option.setName('url')
                .setDescription('Die URL des Songs')
                .setRequired(true)),
    async execute(interaction) {
        const url = interaction.options.getString('url');

        // Placeholder logic to demonstrate interaction response
        await interaction.reply(`Now playing: ${url}`);
    },
};
const { createAudioPlayer, createAudioResource, joinVoiceChannel } = require('@discordjs/voice');

async function playMusic(guild, url) {
    const connection = joinVoiceChannel({
        channelId: interaction.member.voice.channel.id,
        guildId: interaction.guild.id,
        adapterCreator: interaction.guild.voiceAdapterCreator,
    });

    const player = createAudioPlayer();
    const resource = createAudioResource(url);

    player.play(resource);
    connection.subscribe(player);

    // Weitere Logik für Musiksteuerung (Pause, Stop, etc.)
}
