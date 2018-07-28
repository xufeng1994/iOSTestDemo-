var { Given, When, Then } = require('cucumber')
let { BeforeAll, Before, After, AfterAll, setDefaultTimeout } = require('cucumber')
let { driver } = require('../surpport/driver')
let { path } = require("path")
let cuketest = require('cuketest');
setDefaultTimeout(60 * 1000)

BeforeAll(async function(){
    await cuketest.minimize()

    let desiredCaps = {
        platformName: "iOS",
        platformVersion: "11.4",
        deviceName: "iPhone 7",
        automationName: "XCUITest",
        app: '/Users/zack/Library/Developer/Xcode/DerivedData/FoodTracker-bidmzqqybmbcqcbncwomyqmqbvoi/Build/Products/Debug-iphonesimulator/FoodTracker.app'
    };

    await driver.init(desiredCaps);
    await driver.setImplicitWaitTimeout(15000);
})

After(async function () {

})

AfterAll(async function () {
    await driver.quit()
})
