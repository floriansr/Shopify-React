import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ShopifyProvider from 'services/ShopifySDK_Manager';

import { Container, Text, Div, Row, Col } from 'atomize';
import { setCheckout, setProducts } from '../../redux';

const Products = () => {
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
  });

  return (
    <>
      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product.id} size="3">
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
