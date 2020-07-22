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

        <section className="slice bg-minimalist">
          <Container>
            <div className="row align-items-center mb-5">
              <div className="col-md-6">
                <div className="text-center">
                  <h3 className="heading heading-3 strong-500 text-capitalize">
                    Featured products
                  </h3>
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-center text-md-right">
                  <ul className="inline-links">
                    <li>
                      <Button
                        type="button"
                        onClick={(e) => set(e)}
                        className="active"
                      >
                        Chairs
                      </Button>
                    </li>
                    <li>
                      <Button type="button" onClick={(e) => set(e)}>
                        Sofas
                      </Button>
                    </li>
                    <li>
                      <Button type="button" onClick={(e) => set(e)}>
                        Decorations
                      </Button>
                    </li>
                    <li>
                      <Button type="button" onClick={(e) => set(e)}>
                        Lamp
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row-wrapper">
              <div className="cols-xs-space cols-md-space">
                <Row>
                  {products
                    .filter((x) => x.productType === choice)
                    .map((pa) => (
                      <div className="col-lg-3 col-md-6" key={pa.id}>
                        <div className="block product no-border z-depth-2--hover mb-5">
                          <div className="block-image">
                            <Link to="/">
                              <Div
                                h="10rem"
                                m="3rem"
                                bgImg={pa.images[0].src}
                                bgSize="contain"
                                bgRepeat="no-repeat"
                                bgPos="center"
                              />
                            </Link>
                          </div>

                          <div className="block-body px-0 text-center">
                            <h3 className="heading heading-6 strong-500 text-capitalize">
                              <Link to="/">{pa.title}</Link>
                            </h3>
                            <div className="price-wrapper">
                              <span className="price heading-6 c-gray-light strong-400">
                                <span className="price-value">
                                  {pa.variants[0].price} $
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </Row>
              </div>
            </div>
          </Container>
        </section>
      </Container>
    </>
  );
};

export default Products;
