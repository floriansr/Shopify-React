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
    await client.product.fetchAll().then((x) => {
      // console.log('ShopifyProvider  -> fetchAllProducts', x);
      return x;
    });
  }

  static async fetchAllProductWithId(id) {
    await client.product.fetch(id).then((x) => {
      // console.log('ShopifyProvider  -> fetchAllProductWithId', x);
      return x;
    });
  }
}
