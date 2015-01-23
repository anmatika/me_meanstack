var superagent = require('superagent')
var expect = require('expect.js')
var fs = require('fs');
var app = require('../app')
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

	it('gets signup', function(done) {
		// request.session.items = {id: 1};
		var agent = superagent.agent();
		
		// console.log(agent);
		// agent.session.checkedoutItems = "dsd";

		agent.get('https://localhost/secure/signup')
			.ca(cert)
			.end(function(e, res) {
				// console.log(res)
				expect(e).to.eql(null)
			    expect(res.text.length).to.be.above(0)
				
				done()
			})
	});

	it('gets orderphase1', function(done) {

		var agent = superagent.agent();
		
		agent.get('https://localhost/secure/orderphase1')
			.ca(cert)
			.end(function(e, res) {
				expect(e).to.eql(null)
			    expect(res.text.length).to.be.above(0)
				done()
			})
	})

	it('gets orderphase2', function(done) {

		var agent = superagent.agent();
		
		agent.get('https://localhost/secure/orderphase2')
			.ca(cert)
			.end(function(e, res) {
				expect(e).to.eql(null)
			    expect(res.text.length).to.be.above(0)
				done()
			})
	})

	it('posts orderphase2', function(done) {

		var agent = superagent.agent();
		
		// agent.post('https://localhost/secure/orderphase2')
		superagent.post('https://localhost/secure/orderphase2')
			.ca(cert)
			.end(function(e, res) {
				expect(e).to.eql(null)
			    expect(res.text.length).to.be.above(0)
			    // res.header['location'].should.include('orderphase2')
				console.log(res.header);
				done()
			})
	})

	it('gets orderphase3', function(done) {

		var agent = superagent.agent();
		
		agent.get('https://localhost/secure/orderphase3')
			.ca(cert)
			.end(function(e, res) {
				expect(e).to.eql(null)
			    expect(res.text.length).to.be.above(0)
				done()
			})
	})
})