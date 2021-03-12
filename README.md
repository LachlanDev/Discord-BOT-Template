<h1 align="center">
    <br>
    <img src="https://i.imgur.com/ZOKp8LH.jpg" height="200">
    <br>
    <p>Discord BOT Template</p>
    <p>This is a template used to start developing a Discord BOT in Node.JS.</p>
<h1>

## Setup
* Download the repo 
* Edit the **config.json** adding your BOT's token and desired prefix.
* Start the BOT using the commmand **node main.js** in the same directory as **main.js**

## Folder Structure
```bash
├── cfg
│   └── config.json
├── commands
│   ├── help.js
│   └── Other commands here. (Filename = command usage)
├── events
│   ├── message.js
│   └── ready.js
├── node_modules
│   └── All modules are included in source code.
├── main.js
├── package-lock.json
└── package.json
```

## Creating Commands
Creating a new command is simple, create a new file in the commands folder calling it whatever you want the command to be called, for example **ping.js**
</br>
Add the following code to the new command file. In every command file you will always need to use this format. (message.channel.send('pong!') **is not reqired**, just an example). 
```javascript
const discord = require ("discord.js");

exports.run = (client, message, args) =>{
    message.channel.send ('pong!')
}
```
Further documentation can be found [here](https://discord.js.org/#/) or you can read my Blog Post which will explain how to create a Basic Discord BOT [here](https://blog.lachlan-dev.com/discord-bot-development-basics/)

## Contribute
If you would like to contribute to the project please open a PR (Pull Request) clearly showing your changes.

## Issues
If you have any issues feel free to open an issue or join the [Discord Server](https://discord.com/invite/w7B5nKB)

## Extra
__Created by LachlanDev#8014__
* [Website](https://lachlan-dev.com)
* [Twitter](https://twitter.com/LachlanDev)
* [Discord Server](https://discord.com/invite/w7B5nKB)
