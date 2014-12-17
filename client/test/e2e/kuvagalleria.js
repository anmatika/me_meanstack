describe('homepage', function() {
  
  beforeEach(function (){
    browser.get('http://localhost:3000');
  });
  
  it('menu click routes kuvagalleria', function() {

	  var kuvagalleria = element(by.id('kuvagalleria'))
	  kuvagalleria.click(); 
	  expect(browser.getLocationAbsUrl()).toMatch("/kuvagalleria");

  });

});