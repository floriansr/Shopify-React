import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ShopifyProvider from 'services/ShopifySDK_Manager';
import { Container, Text, Div, Row, Col } from 'atomize';

import { setProduct } from '../../redux';

const Product = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await ShopifyProvider.fetchAllProductWithId(id);
      dispatch(setProduct(res));
    };
    fetchProduct();
  }, [id, dispatch]);

  const renderedItems = () => {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Div
                bgImg={product.images[0].src}
                bgSize="cover"
                bgPos="center center"
                h="40rem"
              />
            </Col>
            <Col>
              <Text>{product.title}</Text>
              <Text>{product.variants[0].price}</Text>
            </Col>
          </Row>
        </Container>
      </>
    );
  };

  return <>{!product.title ? '' : renderedItems()}</>;
};

export default Product;
