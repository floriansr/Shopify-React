import { SET_PRODUCTS, SET_PRODUCT } from 'redux/shop/shopType';

export const setProducts = (x) => {
  return {
    type: SET_PRODUCTS,
    details: x,
  };
};

export const setProduct = (x) => {
  return {
    type: SET_PRODUCT,
    details: x,
  };
};
