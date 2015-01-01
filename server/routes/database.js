
var PostProvider = require('./postProvider').PostProvider;
var PostProvider = new PostProvider();

exports.createPost = function (req, res){

        PostProvider.save({
            title: req.param('title'),
            body:  req.param('body')
        }, function(error, docs) {
            if(error){
                res.send('error: ' + error)
            }

            res.send('done');
        });
    };

exports.getPosts = function (req, res){

        PostProvider.findAll(function(error, posts) {
            if(error){
                res.send('error: ' + error)
            }

            res.send(posts);
        });
    };

exports.getProducts = function (res, res) {
    var products = [
        {
            id: 1,
            name: "Item 1",
            price: "24.95",
            quantity: 1,
            description: "Solid, amazing product",
            data: {}
        },
        {
            id: 2,
            name: "Item 2",
            price: "54.95",
            quantity: 1,
            description: "Super product",
            data: {}
        },
        {
            id: 3,
            name: "Item 3",
            price: "154.95",
            quantity: 1,
            description: "Super-duper product",
            data: {}
        },
        {
            id: 4,
            name: "Item 4",
            price: "5.95",
            quantity: 1,
            description: "Good product",
            data: {}
        },
        {
            id: 5,
            name: "Item 5",
            price: "15.95",
            quantity: 1,
            description: "Great product",
            data: {}
        }
    ];

    res.send(products)
}

