//main const
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const prefix = "!";
const version = "2.4.0" //version of the bot. Update package.json also

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
    console.log("The Bot has run into an error");
    console.log(err);
    message.channel.send("The bot has run into an error. Call my developer and he will fix me in no time. (as long as the error is easy to solve)");
    message.channel.send("Here is the error:");
    message.channel.send("ERROR" + "```" + err + "```");

}

//when ready function
client.once('ready', () => {
    console.log('ITA Bot is ready for use!!!');
    client.user.setActivity("Version 2.4.0", { type: "PLAYING" });

});

client.on('guildMemberAdd', member => {
    try {
        const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
        if (!channel) return;

        channel.send(`Welcome to the server ${member}`);
        /*
        let embed = new Discord.MessageEmbed()
            .setTitle("Security Alert!!")
            .setDescription(`Hello there ${member}! Thanks for joining the server. Due to some security concerns we (Admins) are protecting the server from self-bots and scam bots. You are required to send a DM to any of the Admins. You have 30 mins to do this. If no message is recieved you will be kicked from the server `)
        .addField('Contact Developer', "TheDeveloper#2860")
        member.send(embed);
*/
    } catch (err) {
        catchErr(err, message);
    }
})
//bot commands
client.on('message', async message => {
    try {
        let args = message.content.substring(prefix.length).split(" ");
        
        switch (args[0]) {
            case 'ping': {
                client.commands.get('ping').execute(message, args);
                break;
            }
            case 'invitegen': {
                client.commands.get('invitegen').execute(message, args);
                break;
            }
            case 'omdb': {
                message.channel.send("Like the bot? Why not support the owner using the command !donate")
                client.commands.get('omdb').execute(message, args); //movies on omdb
                break;
            }
            case 'testdm': {
                message.author.send("This is a test DM!!");
                message.channel.send("DM Sent");
                break;
                }
            case 'dictionary': {
                message.channel.send("Like the bot? Why not support the owner using the command !donate")
                client.commands.get('dictionary').execute(message, args);
                break;
            }
            case 'meme': {
                message.channel.send("Like the bot? Why not support the owner using the command !donate")
                client.commands.get('meme').execute(message, args);
                break;
            }
            case 'manga': { //searches for manga
                message.channel.send("Like the bot? Why not support the owner using the command !donate")
                client.commands.get('manga').execute(message, args, get, Discord);
                break;
            }
           /* case 'a': { //attachments
                client.commands.get('a').execute(message, args);
                break;
            }*/
            case 'anime': { //searches on kitsu
                message.channel.send("Like the bot? Why not support the owner using the command !donate")
                client.commands.get('anime').execute(message, args, get, Discord);
                break;
            }
            case 'pokemon': { //searches the pokeapi. 
                message.channel.send("Like the bot? Why not support the owner using the command !donate")
                client.commands.get('pokemon').execute(message, args, fetch, querystring, Discord);
                break;
            }
            case 'joke': { //prints a random joke
                message.channel.send("Like the bot? Why not support the owner using the command !donate")
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
                message.channel.send("Like the bot? Why not support the owner using the command !donate")
                client.commands.get('weather').execute(client, message, args, querystring/*Other variables*/);
                break;
            }
            case 'kick': {
                client.commands.get('kick').execute(message, args);
                break;
                }
            case 'role-check': {
                client.commands.get('role-check').execute(message, args);
                break;
                }
            case 'online': {
                message.channel.send("Like the bot? Why not support the owner using the command !donate")
                client.commands.get('online').execute(message, args);
                break;
            }
            /*case 'error': { use this to test the try catch function
                client.commands.get('error').execute(message, args);
                break;
            }*/
            case 'help': {
                client.commands.get('help').execute(message, args, Discord, version);
            }
            case 'donate': {
                client.commands.get('donate').execute(message, args);
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
        } else if (msg.includes("pog")) {
            message.react("😎");
        } else if (msg.includes("gay")) {
            message.react("🏳️‍🌈");
        } else if (msg.includes("pineapple on pizza" || "pineapple on the pizza" || "pineapple on my pizza" || "pizza with pineapple")) {
            message.channel.send("You idiota. What the hell is wrong-a with you. Fruit does not-a go on pizza. Do not-a mention this again-a!!")
        } else if (msg.includes("pineapple pizza")) {
        message.channel.send("You idiota. What the hell is wrong-a with you. Fruit does not-a go on pizza. Do not-a mention this again-a!!")
    }

    }// end of try method
    catch (err) {
        catchErr(err, message);
    }
});//end of client.on method

client.login(config.token);
