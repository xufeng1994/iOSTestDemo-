
const { Given, When, Then } = require('cucumber');
let { driver } = require("../surpport/driver")
//// 你的步骤定义 /////



Given(/^点击第(\d+)课星$/, async function (arg1) {
    
    await driver.elementByAccessibilityId('Set 2 start rating').click()

});