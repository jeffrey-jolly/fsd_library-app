const express = require('express');
var addbookRouter = express.Router();
const Bookdata = require('../model/bookData');

function book_routers(nav) {

    addbookRouter.get('/', function(req, res) {
        res.render('add_book', {
            title: 'Add New Book',
            nav
        });
    });
    addbookRouter.post('/add', function(req, res) {
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image,
            description: req.body.description
        }

        var book = Bookdata(item);
        book.save();
        res.redirect('/books');


    });

    return addbookRouter;
}

module.exports = book_routers;