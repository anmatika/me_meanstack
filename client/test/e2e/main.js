describe('homepage', function() {
  beforeEach(function (){
    browser.get('http://localhost:3000');
  });

  it('root should match /', function() {
    
    expect(browser.getLocationAbsUrl()).toMatch("/");
  
  });

  it('should have title', function() {
    
    expect(browser.getTitle()).toEqual("The amatika's");
  
  });

 //  it('logo click routes back to home', function() {

	// browser.get('http://localhost:3000/#/ryhmat');
	// var logo = element(by.id('navbar_logo'));
	// logo.click();
	// expect(browser.getLocationAbsUrl()).toMatch("/");

 //  });

});