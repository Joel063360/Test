import { driver } from '../src/setup';
import { clickelement} from '../src/actions';

describe('Création d\'un établissement', () => {
  test('Importation via fichier xlsx', async () => {
    jest.setTimeout(60000); 

    await clickelement(driver, '//span[normalize-space()="Etablissements"]');
    await clickelement(driver, "//button[@mattooltip='Importer']");//importer
    await clickelement(driver, "//span[@title='Sélectionner un fichier .xlsx']");//selection
    

}, 60000); 
});
