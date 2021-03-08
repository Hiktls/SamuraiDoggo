const Discord = require('discord.js')
const {Command} = require('discord.js-commando')

module.exports = class BanCommand extends Command{
    constructor(client){
        super(client,{
            name:'unban',
            aliases:['unbanyeet'],
            group:'moderation',
            memberName: 'unban',
            description:'Unban someone using their ID',
            args:[
                {
                    key:"id",
                    prompt:"ID Of the person that got banned",
                    type:'string'
                }
            ]
        })
    }
    run(message,{id}){
        if(message.member.hasPermission("BAN_MEMBERS")){
            message.guild.members.unban(id).then(() => {
                const unbanEmbed = new Discord.MessageEmbed()
                .addField(id,"Just got unbanned!")
                .setFooter("By " + message.author.username)
                .setColor("#00ff15")
                .setTitle("Unban!")
                message.say(unbanEmbed)
            })
        }
        else if(!message.member.hasPermission("BAN_MEMBERS")){
            message.reply("You don't have enough permissions!")
        }
    }
}