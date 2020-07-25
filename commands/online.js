const discord = require('discord.js')
module.exports = {
    name: 'online',
    description: 'The command is going to get all the online members of a Guild',
    execute(message, args) {
        message.guild.members.fetch().then(fetchedMembers => {
            const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
            message.channel.send(`There are currently ${totalOnline.size} member online in this server`);
        });
    }
}