class DashboardPage {
    constructor(page) {
        this.page = page;
        this.cartButton = '.shopping_cart_link';
    }

    async validateDashboard() {
        await this.page.waitForSelector(this.cartButton);
    }
}

module.exports = DashboardPage;
