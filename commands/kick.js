module.exports = {
    name: 'kick',
    description: "This command kicks the selected user",
    execute(message, args) {
        if (message.member.hasPermission(['KICK_MEMBERS'])) {
            const member = message.mentions.members.first();
            member.kick().then((member) => {
                message.channel.send(":wave: " + member.displayName + " has been kicked!!")
            })
        }
    }
}