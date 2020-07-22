import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ShopifyProvider from 'services/ShopifySDK_Manager';

import { Container, Div, Row } from 'atomize';
import { setCheckout, setProducts } from '../../redux';

const Products = () => {
  const [choice, setChoice] = useState('Chairs');
  const dispatch = useDispatch();
  const { products, checkout } = useSelector((state) => state.shop);

  useEffect(() => {
    const createCheckout = async () => {
      const res = await ShopifyProvider.createCheckout();
      dispatch(setCheckout(res));
    };
    const allProducts = async () => {
      const res = await ShopifyProvider.fetchAllProducts();
      dispatch(setProducts(res));
    };
    !checkout.lineItems && createCheckout();
    allProducts();
  }, [dispatch, checkout.lineItems]);

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
              <div className="col-md-12">
                <div className="text-center">
                  <h3 className="heading heading-3 strong-500 text-capitalize">
                    Featured products
                  </h3>
                </div>
              </div>
            </div>
            <Div
              d="flex"
              justify="center"
              className="link-menu link-menu--style-3 mb-5 align-items-center"
            >
              <button
                type="button"
                onClick={(e) => set(e)}
                className={choice === 'Chairs' ? 'active' : ''}
              >
                Chairs
              </button>
              <button
                type="button"
                onClick={(e) => set(e)}
                className={choice === 'Sofas' ? 'active' : ''}
              >
                Sofas
              </button>
              <button
                type="button"
                onClick={(e) => set(e)}
                className={choice === 'Tables' ? 'active' : ''}
              >
                Tables
              </button>
              <button
                type="button"
                onClick={(e) => set(e)}
                className={choice === 'Lamps' ? 'active' : ''}
              >
                Lamps
              </button>
              <button
                type="button"
                onClick={(e) => set(e)}
                className={choice === 'Kit' ? 'active' : ''}
              >
                Kit
              </button>
              <button
                type="button"
                onClick={(e) => set(e)}
                className={choice === 'Decoration' ? 'active' : ''}
              >
                Decoration
              </button>
            </Div>
            <div className="row-wrapper">
              <div className="cols-xs-space cols-md-space">
                <Row>
                  {products
                    .filter((x) => x.productType === choice)
                    .map((pa) => (
                      <div className="col-lg-3 col-md-6" key={pa.id}>
                        <div className="block product no-border z-depth-2--hover mb-5">
                          <div className="block-image">
                            <Link to={`/product/${pa.id}`}>
                              <Div
                                h="10rem"
                                m="1.5rem"
                                bgImg={pa.images[0].src}
                                bgSize="contain"
                                bgRepeat="no-repeat"
                                bgPos="center"
                              />
                            </Link>
                          </div>

                          <div className="block-body px-0 text-center">
                            <h3 className="heading heading-6 strong-500 text-capitalize">
                              <Link to={`/product/${pa.id}`}>{pa.title}</Link>
                            </h3>
                            <div className="price-wrapper">
                              <span className="price heading-6 c-gray-light strong-400">
                                <span className="price-value">
                                  ${pa.variants[0].price}
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
