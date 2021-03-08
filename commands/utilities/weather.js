const { Command } = require('discord.js-commando');
const axios = require('axios').default;
const config = require("../../config.json")
const Discord = require('discord.js')

module.exports = class WeatherCommand extends Command{
    constructor(client){
        super(client,{
            name:'weather',
            aliases:['temp'],
            group:'utilities',
            memberName: 'weather',
            description:'Sends weather data',
            throttling:{
                usages:3,
                duration:10
            },
            args:[{
                key:'text',
                prompt:'Country you are looking for',
                type:'string'
            }]
        })
    }
    run(message,{text}){
        const weather_link = "https://api.openweathermap.org/data/2.5/weather?q="+text+"&appid="+config.api.weather_api 
        axios.get(weather_link).then(response => {
            const weatherEmbed = new Discord.MessageEmbed()
            .addFields(
                {name:"Weather",value:response.data.weather[0].main,inline:false},
                {name:"Description",value:response.data.weather[0].description,inline:false},
                {name:"Temperature",value:Math.floor(response.data.main.temp - 273.15),inline:true})
            .setTitle(response.data.name)
            .setThumbnail("http://openweathermap.org/img/wn/"+response.data.weather[0].icon+"@2x.png")
            message.say(weatherEmbed)
        })
        .catch(err => {
            console.log(err)
        })
    }

}