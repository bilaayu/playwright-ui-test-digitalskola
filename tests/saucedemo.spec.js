const { test, expect } = require('@playwright/test');

test('User success login and add item to cart', async ({ page }) => {
    // a. User success login
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // b. Validate user berada di dashboard setelah login
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');

    // c. Add item to cart
    await page.click('.inventory_item:nth-child(1) .btn_inventory');

    // d. Validate item sukses ditambahkan ke cart
    const cartCount = await page.locator('.shopping_cart_badge').innerText();
    expect(cartCount).toBe('1'); // Validasi bahwa satu item ditambahkan
});
