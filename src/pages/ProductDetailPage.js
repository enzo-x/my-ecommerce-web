import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProducts } from '../redux/slices/productSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => dispatch(addToCart(product))} className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
