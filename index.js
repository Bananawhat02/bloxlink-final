const { Client, GatewayIntentBits, DiscordAPIError, userMention } = require("discord.js")
const token = process.env.MTAzNTA4MzA4NjAyODg4MTk4MA.GlMF4h.e_-_sBGmbEd9kLi5Lh44Ksw7mySKTAe_5cfSJM

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () =>{
    console.log("bot opérationnel");
});

client.login("MTAzNTA4MzA4NjAyODg4MTk4MA.GlMF4h.e_-_sBGmbEd9kLi5Lh44Ksw7mySKTAe_5cfSJM")

client.on("messageCreate", message => {
    console.log(message)
    if(message.content === "/verify"){
        message.channel.send("Please Complete Verification To Get Access To Rest Of The Server!")
        
    }
});






