var superagent = require('superagent')
var expect = require('expect.js')
var fs = require('fs');
describe('express rest api server', function() {
	
	var id
	var cert = fs.readFileSync('/usr/local/etc/ssl/cert.pem');
	
	// it('gets orderconfirmation', function(done) {
	// 	// request.session.items = {id: 1};
	// 	var agent = superagent.agent();

	// 	console.log(agent);
	// 	// agent.session.checkedoutItems = "dsd";

	// 	agent.get('http://localhost/secure/orderconfirmation')
	// 		.ca(cert)
	// 		.end(function(e, res) {
	// 			// console.log(res)
	// 			expect(e).to.eql(null)
	// 		    expect(res.body.length).to.be.above(0)
	// 			// expect(res.body.map(function(item) {
	// 			// 	return item._id
	// 			// })).to.contain(id)
	// 			done()
	// 		})
	// })

	it('gets orderconfirmation', function(done) {
		// request.session.items = {id: 1};
		var agent = superagent.agent();
		
		// console.log(agent);
		// agent.session.checkedoutItems = "dsd";

		agent.get('http://localhost/secure/signup')
			.ca(cert)
			.end(function(e, res) {
				console.log(res)
				expect(e).to.eql(null)
			    expect(res.text.length).to.be.above(0)
				// expect(res.redirects).to.eql('https://localhost:8000/secure/signup')
				// expect(res.body.map(function(item) {
				// 	return item._id
				// })).to.contain(id)
				done()
			})
	})
})