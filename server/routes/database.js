
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

