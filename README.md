# Y8aiI4JcLQ

## What is this?
This is a basic discord bot that I made while filling out the TechTok Developer application field. The name is set this way for anti-SEO reasons.

## How do I test it?

This was designed to be easily configured and deployed. Simply make a copy of `.env.example` call it `.env` and paste your discord bot token right after (on the same line, no spaces) `DISCORD_BOT_TOKEN=`
Then verify that the first key in `rules.json` matches your server's ID. If you need to find that [https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-](This can help).

Once you do all that simply run `npm install` to make sure discord.js and other dependencies are installed and finally run `npm start` to start the bot.

***Note:*** if the server you run this bot in is not on the list of `rules.json` it will throw a `NO_COMPATIBLE_SERVERS_FOUND` exception and shut down.

Once the bot is up and running simply type ?rules and the embed will be sent in that channel, and your inital command will be removed.

