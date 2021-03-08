const {Command} = require('discord.js-commando')
const Discord = require('discord.js')
module.exports = class BanCommand extends Command{
    constructor(client){
        super(client,{
            name:'ban',
            aliases:['banyeet'],
            group:'moderation',
            memberName: 'ban',
            description:'Ban the person for a reason',
            args:[
                {
                    key:'user',
                    prompt:'Who do you want to ban?',
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
        if(message.member.hasPermission("BAN_MEMBERS")){
            const banEmbed = new Discord.MessageEmbed()
                .setTitle("Ban!")
                .addFields({name:user.user.username,value:reason,inline:false})
                .setDescription(user+" just got banned!")
                .setColor("#c4212c")
                .setFooter("By " + message.author.username)
                .setAuthor(user.id)
            user.ban({reason:reason}).then(() => {
                message.say(banEmbed)
            })
        }
        else if(!message.member.hasPermission("BAN_MEMBERS")){
            message.reply("You don't have enough permissions!")
        }
    }
}