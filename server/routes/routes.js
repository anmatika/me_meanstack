module.exports = function(router, passport) {
	
	var database = require('./database');

	// Setup a route /galleria/images
	// router.get('/galleria', galleria.getImages);
	// router.post('/createPost', database.createPost);
	// router.get('/getPosts', database.getPosts);
	router.get('/getProducts', database.getProducts);

	// process the signup form
	router.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/profile', // redirect to the secure profile section
		failureRedirect: '/signup', // redirect back to the signup page if there is an error
		failureFlash: true // allow flash messages
	}));

	// // process the login form
	router.post('/login', passport.authenticate('local-login', {
		successRedirect: '/profile', // redirect to the secure profile section
		failureRedirect: '/login', // redirect back to the signup page if there is an error
		failureFlash: true // allow flash messages
	}));

	router.get('/ping', function (req, res){
		res.send('pong');
	})
}

