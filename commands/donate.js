const Discord = require('discord.js')
module.exports = {
    name: 'donate',
    description: "Sends the link to patreon. (soon to be changed to StreamElements Tip page)",
    execute(message, args) {
        message.channel.send("Here are places where you can support the owner of the bot:");
        message.channel.send("htts://www.patreon.com/davidecammarano");
        message.channel.send("https://streamelements.com/davcam0055/tip");
    }
}