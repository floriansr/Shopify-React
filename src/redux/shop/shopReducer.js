import {
  SET_PRODUCTS,
  SET_PRODUCT,
  SET_CHECKOUT,
  SET_CART,
  REMOVE_CART,
} from 'redux/shop/shopType';

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

    case SET_CART:
      return {
        ...state,
        isCartOpen: true,
      };

    case REMOVE_CART:
      return {
        ...state,
        isCartOpen: false,
      };
    default:
      return state;
  }
};

export default shopReducer;
