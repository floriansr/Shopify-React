import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ShopifyProvider from 'services/ShopifySDK_Manager';

import { Container, Text, Div, Row, Button } from 'atomize';
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
        <h2>What items are you looking for ?</h2>
        <Container className="mb-3">
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
        </Container>

        <Row>
          {products
            .filter((x) => x.productType === choice)
            .map((p) => (
              <Div className="card col-lg-6" key={p.id}>
                <Div className="card-image">
                  <Link to={`/product/${p.id}`}>
                    <Div h="20rem" bgImg={p.images[0].src} bgSize="cover" />
                  </Link>
                </Div>
                <Div className="card-caption-overlay card-caption-overlay--2">
                  <Div className="card-caption">
                    <Div className="text-center">
                      <Link
                        to={`/product/${p.id}`}
                        className="heading heading-6 strong-500 mb-0"
                      >
                        <Text>{p.title}</Text>
                      </Link>

                      <span className="clearfix" />
                      <span className="text-sm">
                        <Text>{p.variants[0].price}</Text>
                      </span>
                    </Div>
                  </Div>
                </Div>
              </Div>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
