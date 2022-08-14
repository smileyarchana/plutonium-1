const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: String,
    bookPrice: String,
    bookAuthor: String,
    title: String,

    







}, { timestamps: true });

module.exports = mongoose.model('User', bookSchema) //books