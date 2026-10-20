import { type Locator, type Page } from '@playwright/test';

export class inventoryPage {
  readonly page: Page;
  readonly ttacartTitle: Locator;
  readonly buttonAddToCartFirstItem: Locator;
  readonly cartContainer: Locator;
  readonly tittle:Locator;

  constructor(page: Page) {
    this.page = page;
    const testby = (id:string)=>page.locator(`[data-test="${id}"]`)
    this.tittle = testby('title');
    this.ttacartTitle = page.getByText("TTACart");
    this.buttonAddToCartFirstItem = page.getByRole("button", { name: "Add to cart" }).first();
    this.cartContainer = page.locator("#shopping_cart_container");
  }

  async addFirstItemToCart(){
    await this.buttonAddToCartFirstItem.click();
  }

  async openCart(){
    await this.cartContainer.click();
  }
}
