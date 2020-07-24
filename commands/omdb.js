const fetch = require('node-fetch');
const Discord = require('discord.js');
require('dotenv').config();

const config = {
    omdb: process.env.OMDB
}
module.exports = {
    name: 'omdb',
    description: "Searches the open movie database for movie information",
    async execute(message, args) {
        if (!args[1]) return message.channel.send("Pleace specify the name of a movie!")
        message.channel.send("🔍 Searching your movie...")
        console.log(args.slice(1, args.lenght));

        try {
            fetch(` http://www.omdbapi.com/?t=${args.slice(1, args.lenght)}&r=json&apikey=${config.omdb}`)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    let embed = new Discord.MessageEmbed()
                        .setTitle(json.Title)
                        .setDescription(json.Plot)
                        .addFields(
                            { name: 'Year', value: json.Year },
                            { name: 'Age Rating', value: json.Rated },
                            { name: 'Released', value: json.Released },
                            { name: 'Screen Time', value: json.Runtime },
                            { name: 'Genres', value: json.Genre },
                            { name: 'Director', value: json.Directors },
                            { name: 'Writers', value: json.writers },
                            { name: 'Actors', value: json.Actors },
                            { name: 'Language', value: json.Language },
                            { name: 'Country', value: json.Country },
                            { name: 'Awards🏅', value: json.Awards },
                            { name: 'Rating🌟', value: json.imdbRating },
                            { name: 'Type', value: json.Type }
                        )
                        .setThumbnail(json.Poster)
                        .setColor(0xFBFF01)
                        .addField('Brought to you by', "Scottish Bot");

                    message.channel.send(embed);
                })
        } catch (err) {
            message.channel.send("Couldn't Find anything on IMDB. Try checking for spelling mistakes");
            console.log(err);

        }

    }
}