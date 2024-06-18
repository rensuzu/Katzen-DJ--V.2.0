// ready.js
const { Client } = require('discord.js');
const { printWatermark } = require('./util/pw');
const { initializePlayer } = require('./player');

const client = new Client();

client.once('ready', () => {
    console.log(`Eingeloggt als ${client.user.tag}`);
    printWatermark(); // Druckt ein Wasserzeichen oder eine Nachricht beim Start aus
    initializePlayer(client); // Initialisiert den Musikplayer oder andere Module
});

client.login(process.env.TOKEN);
