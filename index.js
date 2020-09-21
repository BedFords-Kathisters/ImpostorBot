const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.login(config.token);

var express = require("express");
var app = express();
app.listen(config.port, () => {
 console.log("Server running on port 3000");
});

app.get("/mute/:flag", (req, res, next) => {
		
	client.channels.cache.get(config.dedicatedChannelId).members.forEach(function(member){
		member.voice.setDeaf(req.params.flag);
		member.voice.setMute(req.params.flag);
		}		
	); 	
});
