import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  return (
    <>
      <p>{id}</p>
    </>
  );
};

export default Product;
