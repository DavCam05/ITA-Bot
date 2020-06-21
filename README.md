# DavBot

DavBot is a discord bot using discord.js v12. 
Currently active on https://thed4ccrusaders.glitch.me Discord server
Hosted on a Raspberry Pi 3B+ 

You can use this [invite link](https://discordapp.com/oauth2/authorize?client_id=716403885622951937&scope=bot&permissions=2146958847) to invite the bot to your server

# Installation

To install this project download the latest stable release.
Make an application on https://discord.com/developers/ and get the bot token
Travel to your directory using command prompt/powershell/terminal
make sure you have the lates node.js and npm release.

Run:
`npm install`

Then type in the terminal:
`node .`

You should see `DavBot is ready to use!!` in the terminal

>**Note**: V1.2.1 needs a confing.json to hold the token. Follow the guide below to fix this into a .env
Make a .env file and write
`TOKEN=[your token here]`

In index.js make these changes if they are not present:
```
require('dotenv').config();
const config = {
    token = process.env.TOKEN
}
//rest of code
client.login(config.token)
```



## Usage
Once you have the project installed and running go to https://discordapi.com/permissions.html#8
The bot needs every permission. Once done paste the Application ID found in the main page in your app in Discord developer portal and click the link generated.
This will invite the bot into your server. The bot is now ready to use!

## Credits
This bot was made by DavCam05

## Licence
Check LICENCE.md
