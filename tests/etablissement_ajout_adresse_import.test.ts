import { driver } from '../src/setup';
import { filltext, clickelement,waitforelement, cleartext} from '../src/actions';

describe('Ajout d\'une adresse de livraison pour un établissement', () => {
  test('Ajout via importation fichier xlsx', async () => {
    jest.setTimeout(60000); 
    
    await clickelement(driver, '//span[normalize-space()="Etablissements"]');
    await filltext(driver, "//input[@placeholder='Recherche...']","CAFE CITY");
    await clickelement(driver, '//td[normalize-space()="CAFE CITY"]');
    await clickelement(driver, '//span[normalize-space()="IMPORTER"]');
    await clickelement(driver, "//span[@title='Sélectionner un fichier .xlsx']");//selection

}, 60000); 
});
