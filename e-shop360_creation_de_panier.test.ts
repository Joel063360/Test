
/* SCENARIO
   CREATION D'UN PANIER (ARTICLE) 
   PROFIL :  DECLARANT  */

   import { Builder, By, Key, until, WebDriver } from 'selenium-webdriver';
   import * as dotenv from 'dotenv';
   
   dotenv.config();
   
   const URL: string = process.env.URL as string; 
   const LOGIN: string = process.env.LOGIN as string; 
   const PASSWORD: string = process.env.PASSWORD as string;

   const timer = setTimeout(() => {
    console.log("Timer finished.");
  }, 1000);
  timer.unref();
  
   
   async function clicElement(driver: WebDriver, xpath: string): Promise<void> {
     try {
       const element = await driver.wait(until.elementLocated(By.xpath(xpath)), 10000);
       await driver.wait(until.elementIsVisible(element), 10000);
       await element.click();


     } catch (error) {
       console.error("Élément suivant non trouvé après 10 secondes.");
     }
   }
   
   async function fillText(driver: WebDriver, xpath: string, text: string): Promise<void> {
     try {
       const fill = await driver.wait(until.elementLocated(By.xpath(xpath)), 10000);
       await driver.wait(until.elementIsVisible(fill), 10000);
       await fill.sendKeys(text, Key.ENTER);
     } catch (error) {
       console.error("Élément suivant non trouvé après 10 secondes.");
     }
   }
   
   async function test() {
     const driver = await new Builder().forBrowser("chrome").build();
   
     try {
       await driver.manage().window().maximize();
       await driver.get(URL);
   
       /* AUTHENTIFICATION */
       await fillText(driver, '//*[@id="i0116" or @class="form-control ltr_override input ext-input text-box ext-text-box"]', LOGIN);
       await fillText(driver, '//*[@id="i0118" or @class="form-control input ext-input text-box ext-text-box"]', PASSWORD);
       await clicElement(driver, '//*[@class="win-button button_primary button ext-button primary ext-primary"]');
       await clicElement(driver, '//*[normalize-space()="Ignorer la configuration"]');
       await clicElement(driver, '//input[@value="Oui"]');
   
       /* MENU */
       await clicElement(driver, "//span[normalize-space()='Mes demandes']");
       await clicElement(driver, "//span[normalize-space()=\"J'exprime un besoin (e-Shop360)\"]");
       await fillText(driver, "//base-form-input[@type='autocomplete']/mat-form-field/div/div/div/input", "Asie");
       await clicElement(driver, "//span[normalize-space()='Asie']");
       await clicElement(driver, "//span[normalize-space()='OUVRIR LA DEMANDE']");
   
       /* AJOUT D'UN ARTICLE DANS LE PANIER */
       await fillText(driver, "//input[@id='catalogue-search']", "ruban");
       await clicElement(driver, "//span[normalize-space()='Ruban étiquettes BROTHER CZ-1003 - 19mm x 5m']");
   
       /* Ajout panier (x1) */
       const basket = await driver.wait(until.elementLocated(By.xpath("//body[1]/vex-root[1]/vex-custom-layout[1]/vex-layout[1]/div[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/main[1]/vex-ticket-details[1]/div[1]/vex-ticket-details-catalog[1]/vex-catalog-base[1]/div[1]/div[1]/div[3]/mat-tab-group[1]/div[1]/mat-tab-body[1]/div[1]/base-data-table[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[8]/catalog-quantity-column-base[1]/div[1]/button[1]")), 10000);
       await driver.wait(until.elementIsVisible(basket), 10000);
       await basket.click();
   
       /* ONGLET PANIER */
       await clicElement(driver, '//*[@id="mat-tab-link-4"]');
   
       /* ETAPE DE FINALISATION */
       await clicElement(driver, '//button[@class="mat-focus-indicator w-full mat-raised-button mat-button-base mat-primary ng-star-inserted"]');
       /* Préciser la déstination */
       await fillText(driver, '#mat-input-5', '1er batiment à gauche');
       /* Finaliser le panier */
       await clicElement(driver, '//*[@id="mat-dialog-1"]/ticket-comment-modal-component/form/mat-dialog-actions/base-form-input/button[2]');
   
       console.log("PANIER FINALISE");
   
     } catch (error) {
       console.error("VOICI L'ERREUR : ", error);
     } finally {
       await driver.quit();
     }
   }
   
   test();
   