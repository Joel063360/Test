
/* SCENARIO DE TEST */
/* PILOTAGE DES ACHATS : PROCESSUS ACHATS : FINALISER UNE COMMANDE SOUS ENGAMEMENTS
/* PRECOMMANDER ARTICLE/PRESTATION   */
/* Profil / approvisonneur */



const {Builder, Browser, By, Key, until , Actions } = require('selenium-webdriver');
async function test() {
let driver = await new Builder().forBrowser("chrome").build();

try {
    await driver.get(url);
    driver.manage().window().maximize()
    await driver.sleep(3000)

    // AUTHENTIFICATION
    await driver.findElement(By.xpath('//*[@id="i0116"]')).sendKeys(email, Key.ENTER) // e-mail
    await driver.sleep(3000)
    await driver.findElement(By.id("i0118")).sendKeys(mdp, Key.ENTER); // MDP
    await driver.sleep(3000)
    await driver.findElement(By.xpath('//*[@class="win-button button_primary button ext-button primary ext-primary"]')).click(); // Bouton << Oui >> rester connecté
    await driver.sleep(3000)

    
    /* PROCESSUS ACHATS */
    await driver.findElement(By.xpath('//div[@class="mat-ripple ng-tns-c48-18 item ng-star-inserted"]')).click(); // Processus achat
    await driver.sleep(3000)

    /* finaliser une commande sous engagements */
    await driver.findElement(By.xpath('//a[@href="/achat/order-management"]')).click()  // Finaliser une commande sous engagement
    await driver.sleep(5000)

    /* Champ établissement */
    await driver.wait(until.elementLocated(By.xpath('//*[@id="mat-select-value-5"]'))).click();
    await driver.sleep(3000)

    /* Choix établissement */
    await driver.wait(until.elementLocated(By.xpath('//*[@id="mat-option-58"]'))).click();
    await driver.sleep(5000)

    /* Clic sur Intitulé article / prestation */
    await driver.findElement(By.xpath("//div[normalize-space()='Jeu de 2 empreintes de pas jaune']")).click(); // click sur article nommé : "..."
    await driver.sleep(5000)

    /* Clic article du panier */
    await driver.findElement(By.xpath("//tbody/tr[2]/td[1]/mat-checkbox[1]")).click(); // article 1 
    await driver.sleep(3000)

    /* PRECOMMANDER à coté intitulé Fournisseur */
     await driver.findElement(By.xpath("//th[normalize-space()='LACOSTE DACTYL']/following-sibling::td/button[1]")).click();
     await driver.sleep(3000)

    /* Enregistrer */
     await driver.findElement(By.xpath("//span[normalize-space()='ENREGISTRER']")).click();
     await driver.sleep(3000)
    



    } catch (error) {
        console.log('VOICI L\'ERREUR : ', error);
    } finally {
        await driver.quit();
    }
    } test();
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* LOGIN */
    var url = "...."
    var email = "...@predik360.com";
    var mdp = "....";