const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:user0ne@fsdfiles.gpcsd.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//Schema Defenition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String,
    description: String
});

//Model Creation
var Bookdata = mongoose.model('bookData', BookSchema);

module.exports = Bookdata;