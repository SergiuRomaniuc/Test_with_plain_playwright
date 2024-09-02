import { LoginPage } from "../pages/login-page";
import { expect, test } from "@playwright/test"

test("Must login successfully", async ({page}) => {

    const loginPage = new LoginPage(page);
    await loginPage.navigateTo(loginPage.url);
    await loginPage.completeForm(loginPage.loginPath, 'tomsmith');
    await loginPage.completeForm(loginPage.passPath, 'SuperSecretPassword!');
    await loginPage.clickButton('//*[@id="login"]/button')
    expect(await loginPage.getPageTitle('h2')).toContain('Secure Area');
    
});

