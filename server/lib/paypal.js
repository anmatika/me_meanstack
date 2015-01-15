var paypal = require('paypal-rest-sdk');
var q = require('promised-io/promise');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AX0r9BBFqWVLpYsLK_MkDKBY-zDVG4i8R_jGok4m7cH1u08gsTCKUWnwRpVu',
  'client_secret': 'ENo0HRBhNtB_JFOHYqIXeLI5wvCySj6hm4DGP9Iz9rylnOXsMpE4QgujTI4t'
});

exports.pay = function () {
	var deferred = q.defer();
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
				deferred.resolve('success');
			}
		});

		return deferred.promise;
}