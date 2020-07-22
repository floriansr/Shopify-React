/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ShopifyProvider from 'services/ShopifySDK_Manager';
import { Container, Div, Row, Col, Icon, Button } from 'atomize';
import { message } from 'antd';

import { setProduct, setCart } from '../../redux';

const Product = () => {
  const [number, setNumber] = useState(1);
  const { id } = useParams();
  const { checkout, product } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await ShopifyProvider.fetchAllProductWithId(id);
      dispatch(setProduct(res));
    };
    fetchProduct();
  }, [id, dispatch]);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number > 0) setNumber(number - 1);
  };

  const redirection = () => {
    history.push('/');
  };

  const cart = async () => {
    await ShopifyProvider.addItemToCheckout(
      product.variants[0].id,
      number,
      checkout.id
    );
    message.success(`${number} ${product.title} added !`, 3);
    dispatch(setCart());
  };

  const renderedItems = () => {
    return (
      <>
        <Container>
          <h2>Is it the one ?</h2>

          <section className="slice bg-minimalist">
            <Div
              bgImg={product.images[0].src}
              bgSize="contain"
              bgRepeat="no-repeat"
              bgPos="center"
              h="15rem"
            />

            <div className="col-lg-12">
              <div className="px-4">
                <div className="product-description-wrapper">
                  <Row justify="space-between">
                    <h2 className="product-title heading heading-3 strong-400 text-capitalize">
                      {product.title}
                    </h2>

                    <Button
                      h="2.5rem"
                      w="2.5rem"
                      bg="info700"
                      hoverBg="info600"
                      rounded="circle"
                      m={{ r: '1rem' }}
                      shadow="2"
                      hoverShadow="4"
                      onClick={redirection}
                    >
                      <Icon name="LeftArrow" size="20px" color="white" />
                    </Button>
                  </Row>

                  <hr />

                  <div className="product-short-text mt-4">
                    <h3 className="heading heading-xs strong-500 text-uppercase">
                      Description:
                    </h3>
                    <p>{product.description}</p>
                  </div>

                  <div className="product-price py-3">
                    $<strong>{product.variants[0].price}</strong>
                  </div>

                  <Row>
                    <div className="col-lg-6">
                      <Row>
                        <Col>
                          <label className="text-uppercase strong-600">
                            Color
                          </label>

                          <ul className="list-inline checkbox-color">
                            <li>
                              <label
                                style={{ backgroundColor: '#38393d' }}
                                htmlFor="color-1"
                                data-toggle="tooltip"
                                data-original-title="Black"
                              >
                                <input type="radio" id="color-1" name="color" />
                              </label>
                            </li>
                            <li>
                              <label
                                style={{ backgroundColor: '#bfc0c2' }}
                                htmlFor="color-2"
                                data-toggle="tooltip"
                                data-original-title="Gray"
                              >
                                <input type="radio" id="color-2" name="color" />
                              </label>
                            </li>
                            <li>
                              <label
                                style={{ backgroundColor: '#eabfb9' }}
                                htmlFor="color-3"
                                data-toggle="tooltip"
                                data-original-title="Rose"
                              >
                                <input type="radio" id="color-3" name="color" />
                              </label>
                            </li>
                            <li>
                              <label
                                style={{ backgroundColor: '#000000' }}
                                htmlFor="color-3"
                                data-toggle="tooltip"
                                data-original-title="Rose"
                              >
                                <input type="radio" id="color-4" name="color" />
                              </label>
                            </li>
                            <li>
                              <label
                                style={{ backgroundColor: '#dcc4ac' }}
                                htmlFor="color-5"
                                data-toggle="tooltip"
                                data-original-title="Gold"
                              >
                                <input type="radio" id="color-5" name="color" />
                              </label>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>

                    <div className="col-lg-6">
                      <label className="text-uppercase strong-600">
                        Quantity
                      </label>
                      <Col>
                        <Row>
                          <Div d="flex" m="0.5rem">
                            <Button
                              h="2.5rem"
                              w="2.5rem"
                              bg="info700"
                              hoverBg="info600"
                              rounded="circle"
                              m={{ r: '1rem' }}
                              shadow="2"
                              hoverShadow="4"
                              onClick={decrement}
                            >
                              <Icon name="Minus" size="20px" color="white" />
                            </Button>

                            <Button
                              h="2.5rem"
                              w="2.5rem"
                              bg="warning700"
                              hoverBg="warning600"
                              rounded="circle"
                              m={{ r: '1rem' }}
                              shadow="2"
                              hoverShadow="4"
                            >
                              {number}
                            </Button>

                            <Button
                              h="2.5rem"
                              w="2.5rem"
                              bg="info700"
                              hoverBg="info600"
                              rounded="circle"
                              m={{ r: '1rem' }}
                              shadow="2"
                              hoverShadow="4"
                              onClick={increment}
                            >
                              <Icon name="Plus" size="20px" color="white" />
                            </Button>
                            <Button
                              prefix={
                                <Icon
                                  name="Draft"
                                  size="16px"
                                  color="white"
                                  m={{ r: '0.5rem' }}
                                />
                              }
                              bg="info700"
                              hoverBg="info800"
                              rounded="circle"
                              p={{ r: '1.5rem', l: '1rem' }}
                              shadow="3"
                              hoverShadow="4"
                              onClick={cart}
                            >
                              Add to cart
                            </Button>
                          </Div>
                        </Row>
                      </Col>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </>
    );
  };

  return <>{!product.title ? '' : renderedItems()}</>;
};

export default Product;
