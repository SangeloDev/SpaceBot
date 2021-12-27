import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import testSchema from './test-schema'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on('ready', async () => {
//    await mongoose.connect(process.env.MONGO_URI || '', {keepAlive: true})
    console.log('SpaceBot > SpaceBot is now ready.')

    new WOKCommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['740159308792070157'],
        botOwners: ['373525255102136341'],
        mongoUri: process.env.MONGO_URI,
        dbOptions: {
            keepAlive: true,
        },
    })

    setTimeout(async () => {
        await new testSchema({
            message: 'hellow world',
        }).save()
    }, 1000)
})

client.login(process.env.TOKEN)
