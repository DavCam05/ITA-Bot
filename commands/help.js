module.exports = {
    name: 'help',
    description: "Sends a help message",
    execute(message, args, Discord, version){
        if (!args[1]) {
            message.channel.send("Welcome to the command help center. How may I help you?");
            message.channel.send("P.S.: please type a command name after the `!command`");
            return;            
        }
        if (args[1] === 'help') {
            message.channel.send("You are using it right now!")
            return;
        }
        if (args[1] === 'anime') {
            let embed = new Discord.MessageEmbed()
                .setTitle("!anime")
                .setDescription("This command searches the KITSU API for anime info")
                .addField('Usage', "`!anime [your search here]`");
            message.channel.send(embed);  
            return;
        }
        if (args[1] === 'pokemon') {
            let embed = new Discord.MessageEmbed()
                .setTitle("!pokemon")
                .setDescription("This command searches the POKEAPI POKEDEX for information on pokemon")
                .addField('Usage', "`!pokemon [your search here]`");
            message.channel.send(embed);   
            return;
        }
        if (args[1] === 'urban') {
            let embed = new Discord.MessageEmbed()
                .setTitle("!urban")
                .setDescription("This command searches the Urban Dictionary API for definition on slang words")
                .addField('Usage', "`!urban [your search here]`");
            message.channel.send(embed);
            return;
        }
        if (args[1] === 'joke') {
            let embed = new Discord.MessageEmbed()
                .setTitle("!joke")
                .setDescription("This command searches the Official Joke API for jokes")
                .addField('Usage', "`!joke`");
            message.channel.send(embed);   
            return;
        }
        if (args[1] === 'weather') {
            let embed = new Discord.MessageEmbed()
                .setTitle("!weather")
                .setDescription("This command searches the weather")
                .addField('Usage', "`!weather [city, country]`");
            message.channel.send(embed);   
            return;
        }
        if (args[1] === 'hello') {
            let embed = new Discord.MessageEmbed()
                .setTitle("!hello")
                .setDescription("This command sends a hello message")
                .addField('Usage', "`!hello`");
            message.channel.send(embed);   
            return;
        }
        if (args[1] === 'ping') {
            let embed = new Discord.MessageEmbed()
                .setTitle("!ping")
                .setDescription("A variation of the command `!hello`")
                .addField('Usage', "`!ping`");
            message.channel.send(embed);   
            return;
        }
        if (args[1] === 'omdb') {
            let embed = new Discord.MessageEmbed()
                .setTitle("!omdb")
                .setDescription("This command searches the Open Movie Database for movie info (Note: Can be inaccurate)")
                .addField('Usage', "`!omdb [movie seach]`");
            message.channel.send(embed);   
            return;
        }
        if (args[1] === 'meme') {
            let embed = new Discord.MessageEmbed()
                .setTitle("!meme")
                .setDescription("This command sends a random meme")
                .addField('Usage', "`!meme`");
            message.channel.send(embed);   
            return;
        }
        if (args[1] === 'manga') {
            let embed = new Discord.MessageEmbed()
                .setTitle("!manga")
                .setDescription("This command searches the Kitsu API for manga info")
                .addField('Usage', "`!manga [search here]`");
            message.channel.send(embed);   
            return;
        }
        if (args[1] === 'info') {
            let embed = new Discord.MessageEmbed()
                .setTitle("!info")
                .setDescription("This command sends info about the bot ")
                .addField('Usage', "`!info [args]`");
            message.channel.send(embed);   
            return;
        }
    }
}