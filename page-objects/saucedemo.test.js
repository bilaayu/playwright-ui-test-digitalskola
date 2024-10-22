const { test, expect } = require('@playwright/test');
const LoginPage = require('./page-objects/LoginPage');
const DashboardPage = require('./page-objects/DashboardPage');
const CartPage = require('./page-objects/CartPage');

test('User can login and add item to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const cartPage = new CartPage(page);

    await page.goto('https://www.saucedemo.com');
    
    // Login
    await loginPage.login('standard_user', 'secret_sauce');
    
    // Validate user berada di dashboard
    await dashboardPage.validateDashboard();

    // Add item to cart
    await page.click('.inventory_item:first-child .btn_inventory');

    // Navigate to cart
    await page.click(dashboardPage.cartButton);

    // Validate item sukses ditambahkan ke cart
    await cartPage.validateItemInCart();
});
