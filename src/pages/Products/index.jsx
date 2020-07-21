import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ShopifyProvider from 'services/ShopifySDK_Manager';
import { setCheckout } from '../../redux';

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkout = async () => {
      const res = await ShopifyProvider.createCheckout();
      dispatch(setCheckout(res));
    };
    checkout();
  });

  return (
    <>
      <p>products page</p>
    </>
  );
};

export default Products;
