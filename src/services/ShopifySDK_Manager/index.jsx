import Client from 'shopify-buy';

const client = Client.buildClient({
  storefrontAccessToken: 'dba38120a0cb6165d08d638fc292abdf',
  domain: 'developer-test-w3lead.myshopify.com',
});

export default class ShopifyProvider {
  static async createCheckout() {
    const res = await client.checkout.create();
    return res;
  }

  static async fetchAllProducts() {
    const res = await client.product.fetchAll();
    return res;
  }

  static async fetchAllProductWithId(id) {
    const res = await client.product.fetch(id);
    return res;
  }
}
