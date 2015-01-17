var paypal = require('paypal-rest-sdk');
var q = require('promised-io/promise');

paypal.configure({
	'mode': 'sandbox', //sandbox or live
	'client_id': 'AX0r9BBFqWVLpYsLK_MkDKBY-zDVG4i8R_jGok4m7cH1u08gsTCKUWnwRpVu',
	'client_secret': 'ENo0HRBhNtB_JFOHYqIXeLI5wvCySj6hm4DGP9Iz9rylnOXsMpE4QgujTI4t'
});

exports.paypaypal = function(items) {

	var deferred = q.defer();
	var priceTotal = 0;

	for (var i = 0; i < items.length; i++) {
		priceTotal += items[i]._price;
	}

	priceTotal = priceTotal.toFixed(2);

	console.log('price total:' + priceTotal);

	var payment = {
		intent: "sale",
		payer: {
			payment_method: "paypal"
		},
		redirect_urls: {
			return_url: "https://localhost/secure/paymentExecute",
			cancel_url: "https://localhost/cancelPayment"
		},
		transactions: [{
			amount: {
				currency: "USD",
				total: "" + priceTotal
			},
			description: "Pair of shoes, total: " + priceTotal
		}]
	};

	console.log('payment' + JSON.stringify(payment));

	paypal.payment.create(payment, function(err, paypalRes) {
		if (err) {
			// console.log(err);
			for (var i in err.response.details) {
				console.log(err.response.details[i]);
			}

			deferred.reject(err);
		}

		if (paypalRes) {
			console.log("Create Payment Response");
			// console.log(paypalRes);

			deferred.resolve(paypalRes);
		}
	});

	return deferred.promise;
}

exports.paycredit = function() {
	var payment = {
		"intent": "sale",
		"payer": {
			"payment_method": "credit_card",
			"funding_instruments": [{
				"credit_card": {
					"type": "visa",
					"number": "4417119669820331",
					"expire_month": "11",
					"expire_year": "2018",
					"cvv2": "874",
					"first_name": "Joe",
					"last_name": "Shopper",
					"billing_address": {
						"line1": "52 N Main ST",
						"city": "Johnstown",
						"state": "OH",
						"postal_code": "43210",
						"country_code": "US"
					}
				}
			}]
		},
		"transactions": [{
			"amount": {
				"total": "8",
				"currency": "USD",
				"details": {
					"subtotal": "6",
					"tax": "1",
					"shipping": "1"
				}
			},
			"description": "This is the payment transaction description."
		}]
	};

	paypal.payment.create(payment, function(err, paypalRes) {
		// paypal.payment.create(payment, config_opts, function(err, payment) {
		if (err) {
			console.log(err);
			deferred.reject(err);
		}

		if (paypalRes) {
			console.log("Create Payment Response");
			console.log(paypalRes);
			deferred.resolve(paypalRes);
		}
	});
}

exports.paymentExecute = function(paymentId, payerId) {

	var deferred = q.defer();
	var details = {
		"payer_id": payerId
	};

	paypal.payment.execute(paymentId, details, function(error, payment) {
		if (error) {
			deferred.reject(error);
		} else {
			deferred.resolve(payment);
		}
	});

	return deferred.promise;
}