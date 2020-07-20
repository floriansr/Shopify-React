import { SET_PRODUCTS, SET_PRODUCT } from 'redux/shop/shopType';

const initialState = {
  products: [],
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
    default:
      return state;
  }
};

export default shopReducer;
