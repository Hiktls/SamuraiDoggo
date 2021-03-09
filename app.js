const config = require('./config.json') // Loading the config file
const Commando = require('discord.js-commando');
const path = require('path');
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect(config.database.mongoPass,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

// MODELS
const Data = require('./models/data.js')


const client = new Commando.CommandoClient({ // Setting up the client with the owner id
    owner:['363996307062521859','472347794108317696'],
    commandPrefix:"s!"
})

// Registiration
client.registry
.registerDefaultTypes()
.registerGroups([
    ['anime','Anime related stuff!'],
    ['moderation','Moderation related commands'],
    ['utilities','Utilies...']
])
.registerDefaultGroups()
.registerDefaultCommands({
    help:false
})
.registerCommandsIn(path.join(__dirname,'commands'));


const prefix = config.bot.prefix // Prefix the bot will look for

client.on('ready',() => {
    console.log("I am ready to go!")
    client.user.setActivity('-help for help!')
})

client.on('error',err => {
    console.log("I got an error!",err)
})

client.on('message',message => {
    if(message.content.toLowerCase().startsWith("oh no")){
        message.reply("Anyway")
        message.member.user.username
    }
        if(message.content.startsWith("size")){
           Data.find({},(err,data)=>{
            if(data){
                message.channel.send(data[0])
            }
            if(err){
                message.channel.send(err)
            }
        }).sort({_id:-1}).limit(1)
        if(message.content.startsWith(".d")){
            return;
        }
    }
})


// Adding the servers that the bot joined or left
client.on('guildCreate',guild =>{
    Data.findOne({
        name:guild.name,
        nameID:guild.id,
        count:client.guilds.cache.size
    },(err,data)=>{
        if(err) console.log(err)
        if(!data){
            const newData = new Data({
                name:guild.name,  
                nameID:guild.id,
                count:client.guilds.cache.size
            })
            newData.save().catch(err => console.log(err));
        }
        else{
            const newData = new Data({
                name:guild.name,
                nameID:guild.id,
                count:client.guilds.cache.size
            })
            newData.save().catch(err => console.log(err));
        }
    })
})
client.on('guildDelete',guild =>{
    Data.findOne({
        name:guild.name,
        nameID:guild.id,
        count:client.guilds.cache.size
    },(err,data)=>{
        if(err) console.log(err)
        if(!data){
            const newData = new Data({
                name:guild.name,
                nameID:guild.id,
                count:client.guilds.cache.size
            })
            newData.save().catch(err => console.log(err));
        }
        else{
            const newData = new Data({
                name:guild.name,
                nameID:guild.id,
                count:client.guilds.cache.size
            })
            newData.save().catch(err => console.log(err));
        }
    })
})


client.login(config.bot.token)