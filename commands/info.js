module.exports = {
    name: 'info',
    description: "Gives all possible information about the bot. Specify an argument after !info",
    execute(message, args, version){
        if(args[1] === 'version'){
            message.channel.send("The current version of Davbot is: " + version);
            return;
        }
        if(args[1] === 'author'){
            message.channel.send("The developer of this bot is @Davide05#6042.");
            return;
        }
        if(args[1] === 'servers'){
            message.channel.send("DavBot is only available on THE BRAINCELL CRUSADERS!! (for now) ");
        }
        else{
            message.channel.send("Specify an argument for the command info. Example: !info author");
        }
    }
}