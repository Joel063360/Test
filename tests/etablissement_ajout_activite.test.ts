import { driver } from '../src/setup';
import { filltext, clickelement,waitforelement, cleartext} from '../src/actions';

describe('Ajout d\'une activité à un établissement', () => {
  test('Via bouton Ajouter', async () => {
    jest.setTimeout(60000); 
    
    await clickelement(driver, '//span[normalize-space()="Etablissements"]');
    await filltext(driver, "//input[@placeholder='Recherche...']","CAFE CITY");
    await clickelement(driver, '//td[normalize-space()="CAFE CITY"]');
    await clickelement(driver, '//*[normalize-space()="ACTIVITÉS"]');
    await clickelement(driver, '//*[normalize-space()="AJOUTER"]');
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[1]/mat-form-field/div/div[1]/div[1]/input", "Cafétaria") // Libellé
    await clickelement(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[2]/mat-form-field/div/div[1]/div[1]/input") // Type activité
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[2]/mat-form-field/div/div[1]/div[1]/input", "Centre de Soins") 
    await clickelement(driver,"//span[@class='body-1'][normalize-space()='Centre de Soins']");//selection
    await clickelement(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[3]/mat-form-field/div/div[1]/div[1]/input")// Typologie résident
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[3]/mat-form-field/div/div[1]/div[1]/input", "Rééducation") 
    await clickelement(driver,"//span[@class='body-1'][normalize-space()='Rééducation']");//selection
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[4]/mat-form-field/div/div[1]/div[1]/input", "20") //pourcentage
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[5]/mat-form-field/div/div[1]/div[1]/input", "123456789") //Finess
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[6]/mat-form-field/div/div[1]/div[1]/input", "38 Rue de Marseille, Lyon")// adresse
    await clickelement(driver,'//span[normalize-space()="38 Rue de Marseille, Lyon"]'); 
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[7]/mat-form-field/div/div[1]/div[1]/input", "10") //Lits permanents
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[8]/mat-form-field/div/div[1]/div[1]/input", "5") //Lits permanents
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[9]/mat-form-field/div/div[1]/div[1]/input", "15") //cap accueil
    await clickelement(driver,"//span[normalize-space()='ENREGISTRER']") //enregistrer


}, 60000); 
});
