class CartPage {
    constructor(page) {
        this.page = page;
        this.item = '.inventory_item';
    }

    async validateItemInCart() {
        await this.page.waitForSelector(this.item);
    }
}

module.exports = CartPage;
