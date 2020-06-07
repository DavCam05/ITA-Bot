module.exports = {
    name: 'pokemon',
    description: "Searches the PokeAPI for pokemon info",
    async execute(message, args, fetch, querystring, Discord){
        const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
        const pokemon = message.content.toLowerCase().split(" ")[1];

        async function getPokemon(pokemon) {
            let response = await fetch(`${BASE_URL}/${pokemon}`);
            return await response.json();
        }
        try {
            const pokeData = await getPokemon(pokemon);
            const { sprites, stats, weight, name, id,  base_experience, abilities, types } = pokeData;

            const embed = new Discord.MessageEmbed();
            embed.setTitle(`${name} #${id}`)
            embed.setColor(0xFFF300);
            embed.setThumbnail(`${sprites.front_default}`);
            stats.forEach(stat => embed.addField(stat.stat.name, stat.base_stat, true));
            types.forEach(type => embed.addField('Type', type.type.name, true));
            embed.addField('Weight', weight);
            embed.addField('Base Experience', base_experience);

            console.log(pokemon)
            message.channel.send("🔍 Searching PokeAPI Pokedex...")
            message.channel.send(embed);
        }
        catch(err) {
            console.log(err);
            message.channel.send(`Pokemon ${pokemon} does not exist.`);
        }
    }
}