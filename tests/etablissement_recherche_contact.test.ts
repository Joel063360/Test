import { driver } from '../src/setup';
import { filltext, clickelement,waitforelement, cleartext} from '../src/actions';

describe('Recherche d\'un contact interne rattaché à un établissement', () => {
  test('Recherche', async () => {
    jest.setTimeout(60000); 
    
    await clickelement(driver, '//span[normalize-space()="Etablissements"]');
    await filltext(driver, "//input[@placeholder='Recherche...']","CAFE CITY");
    await clickelement(driver, '//td[normalize-space()="CAFE CITY"]');
    await clickelement(driver, '//*[normalize-space()="CONTACT INTERNE"]');
    await filltext(driver,"//input[@placeholder='Recherche...']","ACTEURA");

}, 60000); 
});
