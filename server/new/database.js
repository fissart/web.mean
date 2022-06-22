"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
async function startConnection() {
    const db = await mongoose_1.connect('mongodb://localhost/fgpa', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log('Database is connected');
}
exports.startConnection = startConnection;
