import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ShopifyProvider from 'services/ShopifySDK_Manager';
import { setCheckout, setProducts } from '../../redux';

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkout = async () => {
      const res = await ShopifyProvider.createCheckout();
      dispatch(setCheckout(res));
    };
    const products = async () => {
      const res = await ShopifyProvider.fetchAllProducts();
      dispatch(setProducts(res));
    };
    checkout();
    products();
  });

  return (
    <>
      <p>products page</p>
    </>
  );
};

export default Products;
