const discord = require ("discord.js");

exports.run = (client, message, args) =>{
    const help = new discord.MessageEmbed()
    .setColor('#b434eb')
    .setTitle('BOT Template')
    .setURL("https://github.com/LachlanDev/Discord-BOT-Template")
    .addField("Info", "This is a template for Discord BOT's.")
    .setFooter("BOT Template Made by LachlanDev#8014", "https://avatars1.githubusercontent.com/u/58458169?s=460&u=79564adeae9287fecf24814f64ed89cff91ca358&v=4")
    message.channel.send({embed: help })
};
