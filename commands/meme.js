//main const
const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    name: 'meme',
    description: "Gives a random meme",
    usage: "!meme",
    async execute(message, args) {
     message.channel.send("🔍 Fetching your random meme...")

        fetch('http://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                let embed = new Discord.MessageEmbed()
                    .setTitle(json.title)
                    .setImage(json.url)
                    .setFooter(`Link: ${json.postLink}`);
                
                message.channel.send(embed)
               
            });

    }

}
