module.exports = {
    name: 'manga',
    description: "Searches the Kitsu API for manga",
    usage: "!manga [search query here]",
    execute(message, args, get, Discord){
        if (!args[1]) {
            message.channel.send("What are you searching for 🤷‍♂️? Specify a manga name. I can't read your mind (yet).")
            return;
        }
        console.log(args.slice(1, args.lenght));

        let option = {
            url: `https://kitsu.io/api/edge/manga?filter[text]=${args.slice(1, args.lenght)}`,
            method: 'GET',
            headers: {
                'Content-Type': "application/vnd.api+json",
                'Accept': "application/vnd.api+json",

            },
            json: true
        }

        message.channel.send("🔍 Searching Kitsu...").then(msg => {
            get(option).then(body => {
                console.log(body.data[0]); // don't know what is the point of this but it works so don't touch it
                //fetches the title of the requested info
                try {
                    let embed = new Discord.MessageEmbed()
                        .setTitle(body.data[0].attributes.titles.en)
                        .addField('Type', body.data[0].type)
                        .setColor(0xEF5108)
                        .setThumbnail(body.data[0].attributes.posterImage.original)
                        .setDescription(body.data[0].attributes.synopsis)
                        .addField('Rating', body.data[0].attributes.averageRating + "/100 🌟")
                        .addField('Rating Rank', body.data[0].attributes.ratingRank + " 🏆")
                        .addField('Popularity Rank', body.data[0].attributes.popularityRank + " 🎭")
                        .addField('Age Rating', body.data[0].attributes.ageRating + " (" + body.data[0].attributes.ageRatingGuide + ")")
                        .addField('Start Date', body.data[0].attributes.startDate)
                        .addField('End Date', body.data[0].attributes.endDate)
                        .addField('Status', body.data[0].attributes.status)
                        .addField('Next Release', body.data[0].attributes.nextRelease + " 📔")
                        //.setImage(body.data[0].attributes.coverImage)
                        .addField('Brought to you by', "Scottish Man")

                    message.channel.send(embed);
                } catch (err) {
                    return message.channel.send("Error. Failed to satisfy your manga needs. 😭")
                }

            });
        })

    }
}