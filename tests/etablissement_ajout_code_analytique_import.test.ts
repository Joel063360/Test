import { driver } from '../src/setup';
import { filltext, clickelement,waitforelement, cleartext} from '../src/actions';

describe('Ajout d\'un code analystique à un établissement', () => {
  test('Via importation fichier xlsx  ', async () => {
    jest.setTimeout(60000); 
    
    await clickelement(driver, '//span[normalize-space()="Etablissements"]');
    await filltext(driver, "//input[@placeholder='Recherche...']","CAFE CITY");
    await clickelement(driver, '//td[normalize-space()="CAFE CITY"]');
    await clickelement(driver, '//*[normalize-space()="PLAN ANALYTIQUE"]');
    await clickelement(driver, "//div[@class='px-6 h-16 border-b sticky left-0 bg-white']/div[4]/button");
    await clickelement(driver, "//span[@title='Sélectionner un fichier .xlsx']");//selection
    //await clickelement(driver,"//span[normalize-space()='IMPORTER ']") //Importer


await driver.sleep(30000)
}, 60000); 
});
