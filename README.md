# SamuraiDoggo
A bot about memes,interesting utilities and database integration with ease!

## What can it do?
- Basic Moderation(Kick,Ban,Unban)
- Use of api(Weather,nasa)
- Use of mongodb using mongoose package

## Why SamuraiDoggo?
Currently, this bot has very limited functions because of the recent rewriting of the code base.

Because of this,we were able to achieve a healthier code base using discord.js-commando. Thanks to it being so easy to use and operate.

I am aware that it has limitied functionality but every week there is going to be a main update, that will focus on improving the bot with new features. You can expect new updates every day if not,every 2-3 days.

## What will be added?
- [ ] More fun utilities.
- [ ] New APIs.
- [ ] Code execution from discord using [piston](https://github.com/engineer-man/piston).
- [ ] Action logging may be added.
## Dependencies
- mongoose
- discord.js-commando
- discord.js
- axios
- node js 


## Config
Config file is very easy to use. Below is the config.json.example if you are going to create your own
```
{
    "bot":{
        "token":"token-here"
    },
    "api":{
        "weather_api":"key-here",
        "nasa_key":"key-here"
    },
    "database":{
        "mongoPass":"db-application-connection-link"
    }

}
```
Be careful to not to change the object names,if you do then change them in the code too.


### Explanation of the config
bot.token = bot token that the application will run


api.weather_api = api key for weather data. We use the [Open weather map](https://openweathermap.org/) for weather data.


api.nasa_key = nasa key for photo of the day. You can get your api key from their [website](https://api.nasa.gov/).

database.mongoPass = Mongodb application-connection-link since we are using atlas cloud for database storage. You have to sign up and create a cluster.


# Installation
Rename the config example and put your own details into it.

```
cd SamuraiDoggo
npm i --save

npm start
```

### Need help?
DM me from discord! Hikt#8143

## Want to add SamuraiDoggo to your server?
http://invitehektor.tk

Please excuse the use of [.tk](https://en.wikipedia.org/wiki/.tk) domain name :)



