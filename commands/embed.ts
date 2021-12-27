import { ContextMenuInteraction, DiscordAPIError, Message, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Send an embed',
    permissions: ['ADMINISTRATOR'],

    callback: async ({ message, text }) => {
        const json = JSON.parse(text)
        const embed = new MessageEmbed(json)
        return (json)
    //     const embed = new MessageEmbed()
    //         .setDescription('\"Hellow World [!sic]\"')
    //         .setTitle('Title')
    //         .setColor('AQUA')
    //         .setAuthor('SpaceBot')
    //         .setFooter('Footer')
    //         .addFields([{
    //             name: 'name',
    //             value: 'value',
    //             inline: true
    //         },
    //         {
    //             name: 'name two',
    //             value: 'value two',
    //             inline: true
    //         }])
    //         .addField('name three', 'value three')
    //     const newMessage = await message.reply({
    //         embeds: [embed]
    //     })

    //     await new Promise(resolve => setTimeout(resolve, 5000))

    //     const newEmbed = newMessage.embeds[0]
    //     newEmbed.setTitle('Edited Title')
    //     newMessage.edit({
    //         embeds: [newEmbed]
    //     })
    }
} as ICommand