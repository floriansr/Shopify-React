import { SET_PRODUCTS, SET_PRODUCT, SET_CHECKOUT } from 'redux/shop/shopType';

const initialState = {
  products: [],
  product: {},
  checkout: {},
  isCartOpen: false,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.details,
      };

    case SET_PRODUCT:
      return {
        ...state,
        product: action.details,
      };

    case SET_CHECKOUT:
      return {
        ...state,
        checkout: action.details,
      };
    default:
      return state;
  }
};

export default shopReducer;
