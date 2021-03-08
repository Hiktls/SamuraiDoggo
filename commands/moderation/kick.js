const {Command} = require('discord.js-commando')
const Discord = require('discord.js')

module.exports = class KickCommand extends Command{
    constructor(client){
        super(client,{
            name:'kick',
            aliases:['yeet'],
            group:'moderation',
            memberName: 'kick',
            description:'Kicks the tagged person for given reason',
            args:[
                {
                    key:'user',
                    prompt:'Who do you want to kick?',
                    type: 'member'
                },
                {
                    key:'reason',
                    prompt:'What is the reason?(Default is Empty)',
                    type:'string',
                    default:'No Reason'
                }
            ]
        })
    }
    run(message,{user,reason}){
        if(message.member.hasPermissions("KICK_MEMBERS")){
            user.kick(reason).then(() => {
                const kickEmbed = new Discord.MessageEmbed()
                .setTitle("Kick")
                .addField(user.user.username,resaon,false)
                .setColor("#91243e")
                .setFooter("By " + message.author)
                message.say(kickEmbed)
            })
        }
        else if(!message.member.hasPermissions("KICK_MEMBERS")){
            message.reply("You don't have enough permissions for this action :/")
        }
    }
}