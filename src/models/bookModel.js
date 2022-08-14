const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    BookName: {
        type: String,
        unique: true,
        required: true
    },
    AuthorName: {
        type: String,
        require: true
    },
    Category: {
        type: String,
        require: true,
        enum: ["Science", "English", "Maths"]
    },
    Year: Number,

}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books