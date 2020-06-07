module.exports = {
    name: 'ping',
    description: "a command that pings the bot.",
    execute(message, args){
        message.channel.send("I have been pinged!!");
    }
}