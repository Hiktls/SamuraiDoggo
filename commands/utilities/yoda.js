const { Command } = require('discord.js-commando');
const axios = require('axios').default;
const Discord = require('discord.js')


module.exports = class YodaCommand extends Command{
    constructor(client){
        super(client,{
            name:'yoda',
            aliases:['yodish'],
            group:'utilities',
            memberName: 'yoda',
            description:'Makes your text as if yoda said it. Complex sentences will break it.',
            throttling:{
                usages:1,
                duration:5
            },
            args:[
                {
                    key:'text',
                    prompt:'What is the text that you want to convert?',
                    type:'string'
                }
            ]
        })
    }
    run(message,{text}){
        const YODA_API = "http://yoda-api.appspot.com/api/v1/yodish?text="+text
        axios.get(YODA_API).then(response => {
            const yodaEmbed = new Discord.MessageEmbed()
            .setTitle("Yoda said;")
            .setDescription(response.data.yodish)
            .setColor("#00f508")
            .setFooter("Yoda likes you")
            message.say(yodaEmbed)
        })
    }
}