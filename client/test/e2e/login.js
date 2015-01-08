describe('homepage', function() {
  var loginURL;

  beforeEach(function (){
    browser.get('http://localhost:3000/#/login');
    loginURL = browser.getCurrentUrl();
  });

  it('url should match /login', function() {
    
    expect(browser.getLocationAbsUrl()).toMatch("/login");
  
  });

  it('login should succeed', function() {
    element(by.model('email')).sendKeys('a@a.com');
    element(by.model('password')).sendKeys('1');
    element(by.id('login')).click();
    // expect(browser.isElementPresent(by.id('success'))).toBe(true);
    
    // expect(browser.getCurrentUrl()).not.toEqual(loginURL);
    
    var username = element(by.exactBinding('username')).getText();
    expect(username).toEqual('a@a.com');
  });

  it('logout should success', function(){
    element(by.id('logout')).click();

    var username = element(by.exactBinding('username')).getText();
    expect(username).toEqual('');
  })

  it('login should fail', function() {
    
    element(by.model('email')).sendKeys('a@a.com');
    element(by.model('password')).sendKeys('12');
    element(by.id('login')).click();
    
    // browser.waitForAngular();
    
    var username = element(by.exactBinding('username')).getText();
    expect(username).toEqual('');
  });

 //  it('logo click routes back to home', function() {

	// browser.get('http://localhost:3000/#/ryhmat');
	// var logo = element(by.id('navbar_logo'));
	// logo.click();
	// expect(browser.getLocationAbsUrl()).toMatch("/");

 //  });

});