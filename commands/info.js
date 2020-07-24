module.exports = {
    name: 'info',
    description: "Gives all possible information about the bot. Specify an argument after !info",
    execute(message, args, version){
        if(args[1] === 'version'){
            message.channel.send("The current version of Scottish Bot is: " + version);
            return;
        }
        if(args[1] === 'author'){
            message.channel.send("The developer of this bot is TheDeveloper#2860");
            return;
        }
        if(args[1] === 'server'){
            message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`)
        }
        else{
            message.channel.send("Specify an argument for the command info. Example: !info author");
        }
    }
}