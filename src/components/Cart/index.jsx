import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SideDrawer } from 'atomize';
import { removeCart } from '../../redux';

const Cart = () => {
  const dispatch = useDispatch();
  const { isCartOpen } = useSelector((state) => state.shop);

  const close = () => {
    dispatch(removeCart());
  };

  return (
    <>
      <SideDrawer isOpen={isCartOpen} onClose={close}>
        test
      </SideDrawer>
    </>
  );
};

export default Cart;
