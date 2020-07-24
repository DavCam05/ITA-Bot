module.exports = {
    name: 'info',
    description: "Gives all possible information about the bot. Specify an argument after !info",
    execute(message, args, version){
        if(args[1] === 'version'){
            message.channel.send("The current version of ITA Bot is: " + version);
            return;
        }
        if(args[1] === 'author'){
            message.channel.send("The developer of this bot is TheDeveloper#2860");
            return;
        }
        if(args[1] === 'description'){
            message.channel.send(`The Reason why I am called ITA Bot is because my developer is Italian. I know everything, just like an Italian Grandmother!`)
        }
        if(args[1] === 'server'){
            message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`)
        }
        if(args[1] === 'history'){
            message.channel.send(`My very first name was DavBot. I was renamed Scottish Bot. My current name is ITA Bot`)
        }
        else{
            message.channel.send("Specify an argument for the command info. Example: !info author");
        }
    }
}