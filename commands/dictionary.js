const fetch = require('node-fetch');
const Discord = require('discord.js');
const http = require("https");
require('dotenv').config();
const config = {
    appid: process.env.APPID,
    appkey: process.env.APPKEY
}

module.exports = {
    name: 'dictionary',
    description: "Gets definitions of a word",
    async execute(message, args) {
        const app_id =  config.appid// insert your APP Id
        const app_key = config.appkey // insert your APP Key
        const wordId = args.slice(1, args.lenght);
        const fields = "definitions";
        const strictMatch = "false";

        const options = {
            host: 'od-api.oxforddictionaries.com',
            port: '443',
            path: '/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
            method: "GET",
            headers: {
                'app_id': app_id,
                'app_key': app_key
            }
        };

        http.get(options, (resp) => {
            let body = '';
            let bodyJson = '';
            resp.on('data', (d) => {
                body += d;
            });
            resp.on('end', () => {
                let parsed = JSON.stringify(body);

                //console.log(parsed);
                var bodyJson = JSON.parse(body)
                //console.log("This is bodyjson")

                let embed = new Discord.MessageEmbed()
                    .setTitle(bodyJson.word)
                    .setDescription(bodyJson.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])
                    .addField('Provider', bodyJson.metadata.provider)
                    .setColor(0x0000ff);
                
                
                message.channel.send(embed);

            });
        });

    }
}