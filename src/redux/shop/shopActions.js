import {
  SET_PRODUCTS,
  SET_PRODUCT,
  SET_CHECKOUT,
  SET_CART,
  REMOVE_CART,
} from 'redux/shop/shopType';

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

export const setCheckout = (x) => {
  return {
    type: SET_CHECKOUT,
    details: x,
  };
};

export const setCart = () => {
  return {
    type: SET_CART,
  };
};
export const removeCart = () => {
  return {
    type: REMOVE_CART,
  };
};
