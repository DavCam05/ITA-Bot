module.exports = {
    name: 'urban',
    description: "searches the urban dictionary",
    async execute(message, args, querystring, fetch, Discord){
        const query = querystring.stringify({ term: args.join(' ') })
                if (!args.length) {
                    return message.channel.send('You need to supply a search term!')
                }

                const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

                if (!list.length) {
                    return message.channel.send(`No results found for search term **${args.join(' ')}**.`)
                }

                console.log(query);
                let embed = new Discord.MessageEmbed()
                    .setTitle("Definition of your search query")
                    .setColor()
                    .setDescription(list[0].definition)
                    .setThumbnail('https://i.imgur.com/VFXr0ID.jpg')
                    .addField('Brought to you by:', "Scottish Man");

                message.channel.send("Warning: Urban Dictionary contains NSFW (Not Safe For Work) content. The content intended for people with 18+ years");
                message.channel.send("🔍 Searching Urban Dictionary...")
                message.channel.send(embed);
    }

}