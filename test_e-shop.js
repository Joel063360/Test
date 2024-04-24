
/* SCENARIO
   CREATION D'UN PANIER (ARTICLE) 
   PROFIL :  DECLARANT  */


   const {Builder, Browser, By, Key, until , Actions } = require('selenium-webdriver');
   async function test() {
   let driver = await new Builder().forBrowser("chrome").build();
   
   try {
   
       await driver.get(url); 
       await driver.sleep(3000)
       await driver.manage().window().maximize()
       await driver.sleep(80000)
     
       /* AUTHENTIFICATION */
       await driver.findElement(By.xpath('//*[@id="i0116"]')).sendKeys(email, Key.ENTER) // e-mail
       await driver.sleep(3000)
       await driver.findElement(By.id("i0118")).sendKeys(mdp, Key.ENTER); // MDP
       await driver.sleep(3000)
       await driver.findElement(By.xpath('//*[@class="win-button button_primary button ext-button primary ext-primary"]')).click() // Bouton << Oui >> rester connecté
       await driver.sleep(3000)
   
   
       /* MENU */
       await driver.findElement(By.xpath("//span[normalize-space()='Mes demandes']")).click();
       await driver.sleep(3000) 
       await driver.findElement(By.xpath("//span[normalize-space()='J'exprime un besoin (e-Shop360) ']")).click();
       await driver.sleep(3000) 
       ets = await driver.findElement(By.xpath("//span[normalize-space()='Établissement']")).click();
       await driver.sleep(3000) 
       await ets.sendKeys("joel",Key.ENTER);
       await driver.sleep(3000)
       await driver.findElement(By.xpath("//span[@class='body-1']")).click();   // or   //span[normalize-space()='JOEL TEST HOPITAL LYON SUD']
       await driver.sleep(3000)
       await driver.findElement(By.xpath("//span[normalize-space()='OUVRIR LA DEMANDE']")).click();
       await driver.sleep(3000)
       await driver.findElement(By.xpath("//span[normalize-space()='Recherche...']")).sendKeys('ruban',Key.ENTER); 
       await driver.sleep(3000)
   
   
       /* MENU */
       await driver.findElement(By.xpath('//a[@href="/administrative/ticket-home"]')).click() //  span[normalize-space()='Mes demandes']
       await driver.sleep(3000)
       await driver.findElement(By.xpath('/html/body/vex-root/vex-custom-layout/vex-layout/div/mat-sidenav-container/mat-sidenav-content/main/vex-ticket-home/vex-page-layout/div[3]/button[1]')).click(); //  span[normalize-space()='J\'exprime un besoin (e-shop360)']
       await driver.sleep(3000)
   
       /* SELECTION DE L'ETABLISSEMENT */
       await driver.findElement(By.xpath('//input[@id="mat-input-0"]')).sendKeys("joel",Key.ENTER); // Clic dans Champ texte "Etablissement" 
       await driver.sleep(3000)
       await driver.findElement(By.xpath('//div[@id="cdk-overlay-1"]')).click() // Clic sur la liste déroulante
       await driver.sleep(3000)
       await driver.findElement(By.css('.mat-button > .mat-button-wrapper')).click() // span[normalize-space()='OUVRIR LA DEMANDE']
       await driver.sleep(3000)
   
       /* AJOUT D'UN ARTICLE DANS LE PANIER */
       await driver.findElement(By.xpath('//*[@id="mat-input-3"]')).sendKeys('ruban',Key.ENTER); // Champ de  texte "RECHERCHE"
       await driver.sleep(4000)
       /* Ajout panier (x1) */
       basket = await driver.findElement(By.xpath("//body[1]/vex-root[1]/vex-custom-layout[1]/vex-layout[1]/div[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/main[1]/vex-ticket-details[1]/div[1]/vex-ticket-details-catalog[1]/vex-catalog-base[1]/div[1]/div[1]/div[3]/mat-tab-group[1]/div[1]/mat-tab-body[1]/div[1]/base-data-table[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[8]/catalog-quantity-column-base[1]/div[1]/button[1]"));
       await driver.sleep(3000)
       await basket.click();
       await driver.sleep(3000)
       
   
       /* ONGLET PANIER */
       await driver.findElement(By.xpath('//*[@id="mat-tab-link-4"]')).click();
       await driver.sleep(3000)

       /* ETAPE DE FINALISATION */
       await driver.findElement(By.xpath('//button[@class="mat-focus-indicator w-full mat-raised-button mat-button-base mat-primary ng-star-inserted"]')).click(); // Bouton FINALISER LE PANIER
       await driver.sleep(3000)
       /* Préciser la déstination */
       await driver.findElement(By.css('#mat-input-5')).sendKeys("1er batiment à gauche", Key.ENTER); // Champ texte destination
       await driver.sleep(3000)
       /* Finaliser le panier */
       await driver.findElement(By.xpath('//*[@id="mat-dialog-1"]/ticket-comment-modal-component/form/mat-dialog-actions/base-form-input/button[2]')).click(); // Clic sur "Fianliser le panier"
       await driver.sleep(3000)
    

       console.log("PANIER FINALISE ");


       
} catch (error) { 
    console.log("VOICI L\'ERREUR : ", error);
} 
    finally { await driver.quit();}
} test ();












/* LOGIN */ 
url = "...";
var email = "..@predik360.com";
var mdp = "test";

