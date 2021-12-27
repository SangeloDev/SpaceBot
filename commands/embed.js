"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    category: 'Testing',
    description: 'Send an embed',
    permissions: ['ADMINISTRATOR'],
    callback: ({ message, text }) => __awaiter(void 0, void 0, void 0, function* () {
        const json = JSON.parse(text);
        const embed = new discord_js_1.MessageEmbed(json);
        return (json);
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
    })
};
