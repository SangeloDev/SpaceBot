"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Testing',
    description: 'Replies with Pong',
    slash: 'both',
    testOnly: true,
    callback: ({ message, interaction }) => {
        return 'Pong';
    }
};
