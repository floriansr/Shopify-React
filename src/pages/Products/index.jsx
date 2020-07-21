import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ShopifyProvider from 'services/ShopifySDK_Manager';

import { Container, Text, Div, Row, Col, Button } from 'atomize';
import { setCheckout, setProducts } from '../../redux';

const Products = () => {
  const [choice, setChoice] = useState('Chairs');
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.shop);

  useEffect(() => {
    const checkout = async () => {
      const res = await ShopifyProvider.createCheckout();
      dispatch(setCheckout(res));
    };
    const allProducts = async () => {
      const res = await ShopifyProvider.fetchAllProducts();
      dispatch(setProducts(res));
    };
    checkout();
    allProducts();
  }, [dispatch]);

  const set = (e) => {
    setChoice(e.target.textContent);
  };

  return (
    <>
      <Container>
        <Row>
          <Button type="button" onClick={(e) => set(e)}>
            Chairs
          </Button>
          <Button type="button" onClick={(e) => set(e)}>
            Sofas
          </Button>
          <Button type="button" onClick={(e) => set(e)}>
            Lamp
          </Button>
          <Button type="button" onClick={(e) => set(e)}>
            Sofas
          </Button>
        </Row>

        <Row>
          {products
            .filter((x) => x.productType === choice)
            .map((product) => (
              <Col key={product.id} size="4">
                <Link to={`/product/${product.id}`}>
                  <Div p="2rem">
                    <Div
                      h="20rem"
                      bgImg={product.images[0].src}
                      bgSize="cover"
                      bgPos="center center"
                    >
                      <Text>{product.title}</Text>
                      <Text>{product.variants[0].price}</Text>
                    </Div>
                  </Div>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
