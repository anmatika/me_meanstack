module.exports = function(router, passport) {

	var database = require('../lib/database');
	var paypalUtil = require('../lib/paypal');
	var util = require('util');

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

	router.get('/secure/orderComplete', function(req, res){
		res.render('orderComplete.ejs');
	});

	router.get('/secure/paymentExecute', function(req, res) {
		var paymentId = req.session.paymentId;
		var payerId = req.param('PayerID');
		console.log('/secure/paymentExecute');
		console.log('payment id: ' + paymentId);
		console.log('payer id: ' + payerId);

		paypalUtil.paymentExecute(paymentId, payerId).then(function(paypalRes) {
				res.redirect('/secure/orderComplete')
			},
			function(err) {
				console.log(util.inspect(err, {
					showHidden: false,
					depth: null
				}));
			});
	})

	router.post('/paypaypal', function(req, res) {
		paypalUtil.paypaypal().then(function(paypalRes) {

				var url;
				console.log(util.inspect(paypalRes, {
					showHidden: false,
					depth: null
				}));
				console.log('paypaypal resolved');
				console.log('payment id:' + paypalRes.id);
				req.session.paymentId = paypalRes.id;

				for (var i = 0; i < paypalRes.links.length; i++) {
					var link = paypalRes.links[i];
					if (link.method === 'REDIRECT') {
						url = link.href;
					}
				}
				console.log('url: ' + url);
				res.redirect(url);
			},
			function(err) {
				console.log(util.inspect(err, {
					showHidden: false,
					depth: null
				}));
			});
	});

	router.post('/paycredit', function(req, res) {
		paypalUtil.paycredit().then(function() {
				res.redirect('/secure/paymentSuccess');
			},
			function(err) {
				console.log(util.inspect(err, {
					showHidden: false,
					depth: null
				}));
			});
	});

	router.post('/checkout', function(req, res) {

		var items = req.body;
		req.session.checkedoutItems = items;
		console.log(JSON.stringify(req.body));

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