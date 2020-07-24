const weather = require('weather-js');
const Discord = require('discord.js');

module.exports = {
    name: 'weather',
    description: "Sends the current weather to the discord channel",
    async execute(client, message, args, querystring) {
        
        let weatherSearch = args.join(" ");
        if (!args[1]) {
            message.channel.send("Specify a place/city");
        }
            weather.find({ search: `${weatherSearch}`, degreeType: 'C' }, function (err, result) {
                if (err) {
                    console.log(err);
                }
                message.channel.send("🔍 Searching the weather for you...")

                console.log(JSON.stringify(result[0]));
                try {
                    let embed = new Discord.MessageEmbed()
                        .setTitle(result[0].location.name)
                        .addFields(
                            { name: "Today's temperature", value: result[0].current.temperature },
                            { name: "Feels Like", value: result[0].current.feelslike, inline: true },
                            { name: "Weather", value: result[0].current.skytext, inline: true },
                            { name: "Humidity", value: result[0].current.humidity, inline: true },
                            { name: "Wind", value: result[0].current.winddisplay, inline: true }
                        )
                        .setThumbnail('http://blob.weather.microsoft.com/static/weather4/en-us/law/28.gif')
                        .addField("Brought to you by", "Scottish Bot");
                 
                    message.channel.send(embed);
                } catch(err){
                    message.channel.send("There has been an error. This can be caused by poor spelling. Check your spelling and try again!");
                }
            })  
    }
}