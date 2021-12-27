import { ButtonInteraction, MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Testing',
    slash: true,
    testOnly: true,
    callback: async ({ interaction: msgInt, channel }) => {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('ban_yes')
                    .setEmoji('⚒️')
                    .setLabel('Ban')
                    .setStyle('SUCCESS')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('ban_no')
                    .setLabel('Cancel')
                    .setStyle('DANGER')
            )

        const linkRow = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setURL('https://sangelo.space/cloud')
                        .setLabel('Visit Help Document')
                        .setStyle('LINK')
                )
        await msgInt.reply({
            content: 'Are you sure you want to ban this user?',
            components: [row, linkRow],
            ephemeral: true,
        })

        const filter = (btnInt: ButtonInteraction) => {
            return msgInt.user.id === btnInt.user.id
        }

        const collector = channel.createMessageComponentCollector({
            filter,
            max: 1,
            time: 1000 * 15
        })

        collector.on('collect', (i: ButtonInteraction) => {
            i.reply({
                content: "You clicked a button",
                ephemeral: true,
            })
        })
    }
} as ICommand