import { driver } from '../src/setup';
import { filltext, clickelement,waitforelement, cleartext} from '../src/actions';

describe('Ajout d\'une adresse de livraison pour un établissement', () => {
  test('Ajout via bouton Ajouter', async () => {
    jest.setTimeout(60000); 
    
    await clickelement(driver, '//span[normalize-space()="Etablissements"]');
    await filltext(driver, "//input[@placeholder='Recherche...']","CAFE CITY");
    await clickelement(driver, '//td[normalize-space()="CAFE CITY"]');
    await clickelement(driver, '//span[normalize-space()="AJOUTER"]');
    await clickelement(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[1]/mat-form-field/div/div[1]") // type adresse
    await clickelement(driver, '//span[normalize-space()="Livraison"]');
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[2]/mat-form-field/div/div[1]/div/input", "38 Rue de Marseille") // adresse
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[3]/mat-form-field/div/div[1]/div/input", "Portail Gris") // complement adresse
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[4]/mat-form-field/div/div[1]/div/input", "69007") // code postal
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[5]/mat-form-field/div/div[1]/div/input", "Lyon") // ville
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[6]/mat-form-field/div/div[1]/div/input", "France") // Pays
    await clickelement(driver, '//span[normalize-space()="France"]');
    await clickelement(driver, '//span[normalize-space()="ENREGISTRER"]');


}, 60000); 
});
