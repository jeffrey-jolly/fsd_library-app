const express = require('express');
const authorsRouter = express.Router();

function routers(nav) {
    var authors = [{
            name: "Dan Brown",
            novel: "The Da Vinci Code",
            image: "dan.jpg",
            description: "Dan Brown is the author of numerous #1 bestselling novels, including The Da Vinci Code, which has become one of the best selling novels of all time as well as the subject of intellectual debate among readers and scholars. Brown’s novels are published in 56 languages around the world with over 200 million copies in print."
        },
        {
            name: "Paulo Coelho",
            novel: "The Alchemist",
            image: "paulo.jpg",
            description: "The Brazilian author PAULO COELHO was born in 1947 in the city of Rio de Janeiro. Before dedicating his life completely to literature, he worked as theatre director and actor, lyricist and journalist."
        },
        {
            name: "M T Vasudevan Nair",
            novel: "Randamoozham",
            image: "MT.jpg",
            description: "Madath Thekkepaattu Vasudevan Nair (born 1933), popularly known as MT, is an Indian author, screenplay writer and film director.[1] He is a prolific and versatile writer in modern Malayalam literature, and is one of the masters of post-Independence Indian literature."
        }
    ];

    authorsRouter.get('/', function(req, res) {
        res.render("authors", {
            nav,
            title: 'Authors',
            authors
        });
    })

    // authorsRouter.get('/:i',function(req,res){
    //     var i = req.params.i;
    //     req.render("author.ejs"
    //     {
    //         nav,
    //         title:'Authors',
    //         author:authors[i]
    //     });
    // });

    authorsRouter.get('/:i', function(req, res) {
        var i = req.params.i;
        res.render('author.ejs', {
            nav,
            title: 'Authors',
            author: authors[i]
        });
    });


    return authorsRouter;
}

module.exports = routers;