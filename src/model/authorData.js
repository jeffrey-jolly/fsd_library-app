const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:user0ne@fsdfiles.gpcsd.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//Schema Defenition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    authorname: String,
    description: String,
    image: String

});

//Model Creation
var Authordata = mongoose.model('authorData', AuthorSchema);

module.exports = Authordata;