import React from 'react';

function AddToCartButton(props) {
  const { product, onAddToCart } = props;

  const handleAddToCart = () => {
    onAddToCart(product);
  };
  return (
    <button onClick={handleAddToCart}>
      購物車
    </button>
  );
}

export default AddToCartButton;