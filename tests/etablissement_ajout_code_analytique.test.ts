import { driver } from '../src/setup';
import { filltext, clickelement,waitforelement, cleartext} from '../src/actions';

describe('Ajout d\'un code analystique à un établissement', () => {
  test('Via Icone  " + "  ', async () => {
    jest.setTimeout(60000); 
    
    await clickelement(driver, '//span[normalize-space()="Etablissements"]');
    await filltext(driver, "//input[@placeholder='Recherche...']","CAFE CITY");
    await clickelement(driver, '//td[normalize-space()="CAFE CITY"]');
    await clickelement(driver, '//*[normalize-space()="PLAN ANALYTIQUE"]');
    await clickelement(driver, "//div[@class='px-6 h-16 border-b sticky left-0 bg-white']/div[2]/button");
    await filltext(driver, "//mat-dialog-content[@class='mat-dialog-content']/base-form-input[1]/mat-form-field/div/div[1]/div/input", "001");
    await filltext(driver, "//mat-dialog-content[@class='mat-dialog-content']/base-form-input[2]/mat-form-field/div/div[1]/div/input", "Par défaut");
    await clickelement(driver,"//span[normalize-space()='ENREGISTRER']") //enregistrer

}, 60000); 
});
