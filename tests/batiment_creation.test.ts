import { driver } from '../src/setup';
import { filltext, clickelement } from '../src/actions';

describe('Création d\'un batiments', () => {
  test('Nouveau batiments', async () => {
    jest.setTimeout(60000); 

    await clickelement(driver, '//span[normalize-space()="Bâtiments"]');
    await clickelement(driver, '//button[@class="mat-focus-indicator mat-tooltip-trigger ml-4 mat-mini-fab mat-button-base mat-primary ng-star-inserted" or aria-describedby="cdk-describedby-message-25"]');
    await clickelement(driver, "//mat-dialog-content[@class='mat-dialog-content']/base-form-input/mat-form-field/div/div[1]/div/input");
    await filltext(driver, "//mat-dialog-content[@class='mat-dialog-content']/base-form-input[1]/mat-form-field/div/div[1]/div/input", "Autre")//generique
    await clickelement(driver, "//span[@class='body-1']");
    await filltext(driver, "//mat-dialog-content[@class='mat-dialog-content']/base-form-input[2]/mat-form-field/div/div[1]/div/input", "CALORIES") //lbellé
    await filltext(driver, "//mat-dialog-content[@class='mat-dialog-content']/base-form-input[3]/mat-form-field/div/div[1]/div/input", "50") //surface
    await clickelement(driver, "//mat-dialog-content[@class='mat-dialog-content']/base-form-input[4]/mat-form-field/div/div[1]/div/mat-select") //type batiment
    await clickelement(driver, "//span[@class='mat-option-text'][normalize-space()='Autre']");
    await clickelement(driver, '//span[normalize-space()="ENREGISTRER"]');

    
}, 60000); 
});
