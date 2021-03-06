"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: String,
    type: String,
    subtype: String,
    author: String,
    description: String,
    file: String,
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
}, {
    timestamps: true
});
exports.default = mongoose_1.model('Book', schema);
