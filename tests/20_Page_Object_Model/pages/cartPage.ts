import { type Locator, type Page } from '@playwright/test';

export class cartPage {
  readonly page: Page;
  readonly inventoryItemName: Locator;
  readonly inventoryItemPrice: Locator;
  readonly linkCheckout: Locator;

  constructor(page: Page) {
    this.page = page;
    const byTest = (id: string) => page.locator(`[data-test="${id}"]`);
    this.inventoryItemName = byTest('inventory-item-name');
    this.inventoryItemPrice = byTest('inventory-item-price');
    this.linkCheckout = byTest('checkout');
  }

  async goto() {
    await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/inventory");
  }
}
