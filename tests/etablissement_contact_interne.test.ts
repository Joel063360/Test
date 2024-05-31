import { driver } from '../src/setup';
import { filltext, clickelement,waitforelement, cleartext} from '../src/actions';

describe('Envoyer un email à un contact interne rattaché à un établissement', () => {
  test('Icone enveloppe', async () => {
    jest.setTimeout(60000); 
    
    await clickelement(driver, '//span[normalize-space()="Etablissements"]');
    await filltext(driver, "//input[@placeholder='Recherche...']","CAFE CITY");
    await clickelement(driver, '//td[normalize-space()="CAFE CITY"]');
    await clickelement(driver, '//*[normalize-space()="CONTACT INTERNE"]');
    await filltext(driver,"//input[@placeholder='Recherche...']","ACTEURA");
    await clickelement(driver, "//div[@class='bg-app-bar p-2 ng-star-inserted']/a[2]");// mail


    await driver.sleep(30000)
}, 60000); 
});
