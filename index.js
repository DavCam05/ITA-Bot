//main const
const Discord = require('discord.js'); 
const client = new Discord.Client();
require('dotenv').config();
const prefix = "!";
const version = "2.0.0" //version of the bot. Update package.json also

const config = {
    token: process.env.TOKEN//s,
    //omdb: process.env.OMDB
}

//api call const
const fetch = require('node-fetch'); 
const querystring = require('querystring');
const { get } = require('request-promise-native');
const axios = require('axios');


//command controller
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//function for catching errors
function catchErr(err, message) {
    console.log("DavBot has run into an error");
    console.log(err);
    message.channel.send("DavBot has run into an error. Call my developer and he will fix me in no time. (as long as the error is easy to solve)");
    message.channel.send("Here is the error:");
    message.channel.send("ERROR" + "```" + err + "```");

}

//when ready function
client.once('ready', () => {
    console.log('Scottish Man is ready for use!!!');
    client.user.setActivity("Scottish Rebellion 2023");

});


//bot commands
client.on('message', async message => { 
    try {
        let args = message.content.substring(prefix.length).split(" ");
    
        switch (args[0]) {
            case 'ping': {
                client.commands.get('ping').execute(message, args);
                break;
            }
            case 'omdb': {
                client.commands.get('omdb').execute(message, args); //movies on omdb
                break;
            }
            case 'meme' :{
                client.commands.get('meme').execute(message, args);
                break;
            }
            case 'manga': { //searches for manga
                client.commands.get('manga').execute(message, args, get, Discord);
                break;
                }
            case 'anime': { //searches on kitsu
                client.commands.get('anime').execute(message, args, get, Discord);
                break;
            }
            case 'urban': {//searches urban dictionary. cannot be moved on command controller because it requires async
                client.commands.get('urban').execute(message, args, querystring, fetch, Discord);
                break;
            }
            case 'pokemon': { //searches the pokeapi. cannot be moved on command controller because it requires async
               client.commands.get('pokemon').execute(message, args, fetch, querystring, Discord);
                break;
            }
            case 'joke': { //prints a random joke
                client.commands.get('joke').execute(message, args, axios, Discord);
                break;
            }
            case 'hello': {
                client.commands.get('hello').execute(message, args);
                break;
            }
            case 'info': {
                client.commands.get('info').execute(message, args, version);
                break;
            }
            case 'weather': {
                client.commands.get('weather').execute(client, message, args, querystring/*Other variables*/);                
                break;
                }
            /*case 'error': { use this to test the try catch function
                client.commands.get('error').execute(message, args);
                break;
            }*/
            case 'help': {
                client.commands.get('help').execute(message, args, Discord, version);
            }
        }//end of switch 


        // reacts to messages containing these words or randomly responds
        msg = message.content.toLowerCase();
        if (msg.includes("search")) {
            message.react("🔍");
        } else if (msg.includes("old")) {
            message.react("👴");
        } else if (msg.includes("high five")) {
            message.react("🖐️");
            message.channel.send("🖐️");
        } else if (msg.includes("yay")) {
            message.react("😃");
        } else if (msg.includes("yes")) {
            message.react("✅");
        } else if (msg.includes("cool")) {
            message.react("🆒");
        } else if (msg.includes("f" || "F")) {
            message.react("🇫");
        } else if (msg.includes("happy")) {
            message.react("😃");
        } else if (msg.includes("hello")) {
            message.react("👋")
        } else if (msg.includes("welcome")) {
            message.react("👋")
        } else if (msg.includes("rich")) {
            message.react("🤑")
        } else if (msg.includes("gay")) {
            message.react("🏳️‍🌈");
        }

    }// end of try method
    catch (err) {
        catchErr(err, message);
    }
});//end of client.on method
client.login(config.token);
