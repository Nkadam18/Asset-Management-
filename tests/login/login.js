export const DASHBOARD = 'https://qa.d3kq8oy4csoq2n.amplifyapp.com/dashboard';
export class LoginPage {
  constructor(page) {
    this.page = page;
  

  }
  async login() {
 
    await this.page.goto('https://qa.d3kq8oy4csoq2n.amplifyapp.com/');

    await this.page.getByTestId('SI-username-input-password').click();
    await this.page.getByTestId('SI-username-input-password').fill('7058735643');

    await this.page.getByTestId('SI-password-input-password').click();
    await this.page.getByTestId('SI-password-input-password').fill('Nagesh@7058');

    await this.page.locator('path').nth(3).click();
    await this.page.locator('svg').nth(3).click();

    await this.page.getByTestId('SI-submit-button-show').click();

    await this.page.getByTestId('CG-search-input').click();
    await this.page.getByTestId('CG-search-input').fill('cr');

    await this.page
      .getByTestId('CG-org-select-arrow-c92f8010-47b9-416b-a434-22cad830b8ef')
      .locator('path')
      .click();

    await this.page.waitForURL(DASHBOARD);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(2000);

    console.log('✔ Client Login Successful');
  }
}
 