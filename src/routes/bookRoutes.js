const express = require("express");
const booksRouter = express.Router();
const Bookdata = require('../model/bookData');

function router(nav) {
    // var books = [{
    //         title: "The Da Vinci Code",
    //         author: "Dan Brown",
    //         genre: "Mystery Thriller",
    //         image: "davincicode.jpg",
    //         description: "The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. It is Brown's second novel to include the character Robert Langdon: the first was his 2000 novel Angels & Demons. The Da Vinci Code follows 'symbologist' Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together."
    //     },
    //     {
    //         title: "The Alchemist",
    //         author: "Paulo Coelho",
    //         genre: "Fantasy",
    //         image: "alchemist.jpg",
    //         description: "Santiago, a young shepherd living in the hills of Andalucia, feels that there is more to life than his humble home and his flock. One day he finds the courage to follow his dreams into distant lands, each step galvanised by the knowledge that he is following the right path: his own. The people he meets along the way, the things he sees and the wisdom he learns are life-changing."
    //     },
    //     {
    //         title: "Randamoozham",
    //         author: "M T Vasudevan Nair",
    //         genre: "Mythology, drama, historical fiction",
    //         image: "randamoozham.jpg",
    //         description: "Randamoozham is a 1984 Malayalam novel by Indian author M. T. Vasudevan Nair, widely credited as his masterpiece.The story begins with the incident of Mahaprasthanika Parva where the Pandavas leave for the pilgrimage to Himalayas forsaking all the worldly possessions. The story runs through the eyes of Bhima who faces seemingly severe frustrations as a young man."
    //     },
    //     {
    //         title: "Digital Fortress",
    //         author: "Dan Brown",
    //         genre: "Thriller",
    //         image: "digital.jpeg",
    //         description: "Digital Fortress is a techno-thriller novel written by American author Dan Brown and published in 1998 by St. Martin's Press. The book explores the theme of government surveillance of electronically stored information on the private lives of citizens, and the possible civil liberties and ethical implications of using such technology."
    //     }
    // ];

    booksRouter.get('/', function(req, res) {
        Bookdata.find()
            .then(function(books) {
                res.render("books", {
                    nav,
                    title: 'Library',
                    books
                });
            })

    });

    booksRouter.get('/:i', function(req, res) {
        var i = req.params.i;
        Bookdata.findOne({ _id: i })
            .then(function(book) {
                res.render('book.ejs', {
                    nav,
                    title: 'Library',
                    book
                });
            })

    });

    return booksRouter;
}


module.exports = router;