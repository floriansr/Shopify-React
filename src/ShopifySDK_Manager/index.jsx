import Client from 'shopify-buy';

const client = Client.buildClient({
  storefrontAccessToken: 'your-storefront-access-token',
  domain: 'your-shop-name.myshopify.com',
});
