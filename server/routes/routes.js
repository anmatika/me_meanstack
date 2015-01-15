module.exports = function(router, passport, paypal) {

	var database = require('../lib/database');
	var paypalUtil = require('../lib/paypal');
	// Setup a route /galleria/images
	
	router.get('/getProducts', database.getProducts);

	// process the signup form
	router.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/', // redirect to the secure profile section
		failureRedirect: '/signup', // redirect back to the signup page if there is an error
		failureFlash: true // allow flash messages
	}));

	// // // process the login form
	router.post('/login', passport.authenticate('local-login', {
		successRedirect: '/', // redirect to the secure profile section
		failureRedirect: '/login', // redirect back to the signup page if there is an error
		failureFlash: true // allow flash messages
	}));

	router.get('/test', function(req, res) {
		res.header('Content-type', 'text/html');
		return res.end('<h1>Hello, Secure World!</h1>');
	});

	// router.post('/signup', function(req, res, next) { 

	// 	passport.authenticate('local-signup', function(err, user, info) {
	// 		if (err) {
	// 	           	return next(err);
	// 	       	}
	//         console.log('user: ' + user);
	//         if (!user) {
	// 			console.log('info.message: ' + info.message);
	//             return res.send({ success: false, message: info.message });
	//         }

	//         // login after succesful signup
	//         req.login(user, function (err) {
	//             if (err) {
	//                 return next(err);
	//             }
	//             res.cookie('user', JSON.stringify({'id': user.id }), { httpOnly: false } );
	//             return res.send({ success: true, user: req.user });
	//         });
	// 	})(req, res, next);
	// });

	// router.post('/login', function(req, res, next) { 

	// 	passport.authenticate('local-login', function(err, user, info) {
	// 		if (err) {
	// 	           	return next(err);
	// 	       	}
	//         console.log('user: ' + user);
	//         if (!user) {
	//             // return res.send(401);
	//             console.log('info.message: ' + info.message);
	//             return res.send({ success: false, message: info.message });
	//             // res.redirect('/login');
	//         }

	// 			// no errors user ok -> login
	//         req.login(user, function (err) {
	//             if (err) {
	//                 return next(err);
	//             }
	//             res.cookie('user', JSON.stringify({'id': user.id }), { httpOnly: false } );
	//             // res.cookie('email', JSON.stringify({'email': req.user.local.email }), { httpOnly: false } );
	//             res.cookie('email', req.user.local.email, { httpOnly: false } );
	//             return res.send({ success: true, user: req.user });
	//             // return res.redirect('/');
	//         });
	// 	})(req, res, next);
	// });

	// get user from session
	router.get('/getUser', function(req, res) {
		res.send(req.isAuthenticated() ? req.user : '0');
	});

	router.get('/logout', function(req, res) {
		req.logOut();
		res.clearCookie('email');
		// res.send(200);
		res.redirect('/');
	});


	router.get('/ping', function(req, res) {
		res.send('pong');
	});

	// EJS-template:
	// =====================================
	// PROFILE SECTION =====================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	router.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user: req.user // get the user out of session and pass to template
		});
	});

	router.get('/secure/login', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('login.ejs', {
			message: req.flash('loginMessage')
		});
	});

	router.get('/secure/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('signup.ejs', {
			message: req.flash('signupMessage')
		});
	});

	router.get('/secure/orderconfirmation', function(req, res) {
		// render the page and pass in any flash data if it exists
		// var items = req.flash('orderItems');
		var items = req.session.checkedoutItems;
		res.render('orderConfirmation.ejs', {
			items: items
		});
	});

	router.get('/secure/paymentSuccess', function(req, res){
		res.render('paymentSuccess.ejs');
	});

	router.post('/pay', function(req, res) {
		paypalUtil.pay().then(function(){
			res.redirect('/secure/paymentSuccess');
		},
		function(err){
			console.log(err);
		});
	});

	router.post('/pay2', function(req, res) {
		var card_data = {
			"type": "visa",
			"number": "4417119669820331",
			"expire_month": "11",
			"expire_year": "2018",
			"cvv2": "123",
			"first_name": "Joe",
			"last_name": "Shopper"
		};

		paypal.creditCard.create(card_data, function(error, credit_card) {
			if (error) {
				console.log(error);
				throw error;
			} else {
				console.log("Create Credit-Card Response");
				console.log(credit_card);
			}
		})
	});

	router.post('/checkout', function(req, res) {

		var items = req.body;
		req.session.checkedoutItems = items;
		console.log(JSON.stringify(req.body));
		// for (var i in items) {
		// 	console.log('orderItems: ' + JSON.stringify(items[i]._name));

		// }
		// req.flash('orderItems', items);
		// res.redirect('/secure/orderconfirmation');
		res.send(items, 200);
	});

	// route middleware to make sure a user is logged in
	function isLoggedIn(req, res, next) {

		// if user is authenticated in the session, carry on 
		if (req.isAuthenticated())
			return next();

		// if they aren't redirect them to the home page
		res.redirect('/');
	}

}