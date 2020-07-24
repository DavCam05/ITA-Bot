module.exports = {
    name: 'joke',
    description: "Sends a random joke on a discord channel",
    async execute(message, args, axios, Discord) {
        let getJoke = async () => {
            let response = await axios.get("http://www.official-joke-api.appspot.com/random_joke");
            let joke = response.data;
            return joke;
        };
        let jokeValue = await getJoke();
        console.log(jokeValue);
        message.channel.send("🔍 Searching some jokes for you...")

        let embed = new Discord.MessageEmbed()
            .setTitle("Random Joke")
            .setColor(0x005AB9)
            .addField('Joke', jokeValue.setup)
            .addField('Punchline', jokeValue.punchline)
            .addField('Brought to you by:', "Scottish Bot");
        
        message.channel.send(embed);
    }
}