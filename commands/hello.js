module.exports = {
    name: 'hello',
    description: "responds with hello.",
    execute(message, args){
        message.channel.send("Hello this is DavBot");
    }
}