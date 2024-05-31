
import { driver } from '../src/setup';
import { filltext, clickelement,waitforelement } from '../src/actions';

describe('Création d\'un établissement', () => {
  test('Nouvel établissement', async () => {
    jest.setTimeout(60000); 

    await clickelement(driver, '//span[normalize-space()="Etablissements"]');
    await clickelement(driver, '//button[@class="mat-focus-indicator mat-tooltip-trigger ml-4 mat-mini-fab mat-button-base mat-primary ng-star-inserted" or aria-describedby="cdk-describedby-message-25"]');
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[1]/mat-form-field/div/div[1]/div[1]/input", "CAFE CITY") // Libellé
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[2]/mat-form-field/div/div[1]/div[1]/input", "FR12345678901") // N°TVA
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[3]/mat-form-field/div/div[1]/div[1]/input", "0925A") // code ape 
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[4]/mat-form-field/div/div[1]/div[1]/input", "266900273") // N°Siren
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[5]/mat-form-field/div/div[1]/div[1]/input", "26690027300324") //  N°Siret
    await clickelement(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[6]") // Statut TVA
    await clickelement(driver,"//span[normalize-space()='Soumis']") // Selection liste déroulante
    await clickelement(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[7]/mat-form-field/div/div[1]/div[2]/button") // clean champ texte comptable
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[7]/mat-form-field/div/div[1]/div[1]/input", "a") // Comptable
    await waitforelement(driver,"//span[normalize-space()='acteurd TESTEUR']")
    await clickelement(driver,"//span[normalize-space()='acteurd TESTEUR']")
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/div[1]/base-form-input[1]/mat-form-field/div/div[1]/div/input", "38 Rue de Marseille") // Adresse
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/div[2]/base-form-input[1]/mat-form-field/div/div[1]/div/input", "69007") // code postal
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/div[2]/base-form-input[2]/mat-form-field/div/div[1]/div/input", "Lyon") // Ville
    await clickelement(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[9]/mat-form-field/div/div[1]/div[2]/button") // clean champ texte Pays
    await filltext(driver,"//mat-dialog-content[@class='mat-dialog-content']/base-form-input[9]/mat-form-field/div/div[1]/div[1]/input", "france") // Pays
    await clickelement(driver,"//span[normalize-space()='France']") // Selection liste déroulante
    await clickelement(driver,"//mat-dialog-content[@class='mat-dialog-content']/mat-form-field") // capacité budgétaire
    await clickelement(driver,"//span[normalize-space()='Medium']") // Selection liste déroulante
    await waitforelement(driver,"//span[normalize-space()='ENREGISTRER']")
    await clickelement(driver,"//span[normalize-space()='ENREGISTRER']") //enregistrer


  }, 60000); 
});
