const { Command } = require('discord.js-commando');
const axios = require('axios').default;
const config = require("../../config.json")
const Discord = require('discord.js')


module.exports = class NasaCommand extends Command{
    constructor(client){
        super(client,{
            name:'nasa',
            aliases:['pod'],
            group:'utilities',
            memberName: 'nasa',
            description:'Sends the photo of the day...',
            throttling:{
                usages:1,
                duration:5
            },
        })
    }
    run(message){
        const NASA_API = "https://api.nasa.gov/planetary/apod?api_key=" + config.api.nasa_key
        axios.get(NASA_API).then(response => {
            const nasaEmbed = new Discord.MessageEmbed()
            .setTitle("Photo of the day")
            .setDescription(response.data.explanation)
            .setImage(response.data.url)
            message.say(nasaEmbed)
        })
    }
}