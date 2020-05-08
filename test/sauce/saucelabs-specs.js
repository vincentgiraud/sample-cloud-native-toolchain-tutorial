var webdriver = require('selenium-webdriver'),
/* Change the username and accessKey to your Saucelabs.com credentials */
username = process.env.SAUCE_USERNAME,
accessKey = process.env.SAUCE_ACCESS_KEY,
/* Base URL sets the target test application */
baseUrl = process.env.APP_URL,
/* driver instantiates via callback */
driver;

/* Describe is a way to group your tests together and set test suite parameters like timetous */
describe('Instant Sauce Test', function () {
this.timeout(40000);
  /* it represents an actual test, the parameters are the title of the test case */
  it('should-open-safari', function (done) {
    /* Instantiate a WebDriver and set browser capabilities */
    driver = new webdriver.Builder().withCapabilities({
      'browserName': 'safari',
      'platform': 'macOS 10.13',
      'version': '11.1',
      /* Pass Sauce User Name and Access Key */
      'username': username,
      'accessKey': accessKey,
      'name': this.test.title,
    }).usingServer("https://" + username + ":" + accessKey +
      "@ondemand.eu-central-1.saucelabs.com:443/wd/hub").build();
    /* The driver navigates to the target application, stored in this variable baseUrl*/
    driver.get(baseUrl);
    /* The driver grabs the title of the web page and displays it in your console */
    driver.getTitle().then(function (title) {
      console.log("title is: " + title);
    });
    /* This tears down the current WebDriver session and ends the test method*/
    driver.quit();
    done();
  });
});