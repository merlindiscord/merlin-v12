const Discord = require('discord.js')
const server = require('./server.json')
const client = new Discord.Client();

client.once('ready', () =>{
    var a = ["Merlin V12 Aktif"]
    console.log(a);
})

client.login(server.m_token);