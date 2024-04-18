/* CODE BASE  */

const {Builder, Browser, By, Key, until , Actions } = require('selenium-webdriver');
async function test() {
let driver = await new Builder().forBrowser("chrome").build();


try {


    await driver.get('https://google.fr');
    driver.manage().window().maximize()
    // await driver.manage().window().setSize({width:1920, height:1080});
    await driver.sleep(8000)
  





} catch (error) {
    console.log('VOICI L\'ERREUR : ', error);
} finally {
    await driver.quit();
}
} test();