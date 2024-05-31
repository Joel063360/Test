import { driver } from '../src/setup';
import { filltext, clickelement,waitforelement, cleartext} from '../src/actions';

describe('Modification des inforamtions d\'un établissement', () => {
  test('Modifier code APE et adresse', async () => {
    jest.setTimeout(60000); 
    
    await clickelement(driver, '//span[normalize-space()="Etablissements"]');
    await filltext(driver, "//input[@placeholder='Recherche...']","CAFE CITY");
    await clickelement(driver, '//td[normalize-space()="CAFE CITY"]');
    await clickelement(driver, '//span[normalize-space()="MODIFIER"]');
    await cleartext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[3]/mat-form-field/div/div[1]/div[1]/input") // clear code ape
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[3]/mat-form-field/div/div[1]/div[1]/input", "0922A") // code ape
    await cleartext(driver,"//mat-dialog-content[@class='mat-dialog-content']/div[1]/base-form-input[1]/mat-form-field/div/div[1]/div/input") // clear code adress
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/div[1]/base-form-input[1]/mat-form-field/div/div[1]/div/input", "40 Rue de Marseille") // Adresse
    await clickelement(driver,"//mat-dialog-actions[@class='mat-dialog-actions']/base-form-input/button[2]") //modifier

}, 60000); 
});
