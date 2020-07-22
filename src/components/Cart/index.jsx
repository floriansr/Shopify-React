import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SideDrawer, Div, Row, Col, Text, Anchor } from 'atomize';
import { removeCart } from '../../redux';

const Cart = () => {
  const dispatch = useDispatch();
  const { isCartOpen, checkout } = useSelector((state) => state.shop);

  const close = () => {
    dispatch(removeCart());
  };

  return (
    <>
      <SideDrawer isOpen={isCartOpen} onClose={close}>
        <Div d="flex" flexDir="column" m={{ b: '4rem' }}>
          {checkout.lineItems &&
            checkout.lineItems.map((item) => (
              <Row key={item.id}>
                <Col>
                  <Div
                    bgImg={item.variant.image.src}
                    bgSize="contain"
                    bgRepeat="no-repeat"
                    bgPos="center"
                    h="5rem"
                    w="4rem"
                  />
                </Col>
                <Col>
                  <Text>{item.title}</Text>
                  <Text>{item.variant.title}</Text>
                  <Text>{item.quantity}</Text>
                </Col>
                <Col>
                  <Text>{item.variant.price}</Text>
                </Col>
              </Row>
            ))}
          <Anchor href={checkout.webUrl} target="_blank">
            Checkout
          </Anchor>
        </Div>
      </SideDrawer>
    </>
  );
};

export default Cart;
