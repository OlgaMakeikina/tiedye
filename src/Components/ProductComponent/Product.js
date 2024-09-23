import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from '../../redux/cartSlice';
import { useSelector } from 'react-redux';
import DataItem from '../../data/DataItem'; 
import { getSelectedCategory, getSelectedSize } from '../../redux/productSlice';
import './ProductItems.css';

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()

const selectedCategory = useSelector(getSelectedCategory);
const selectedSize = useSelector(getSelectedSize);

  const filterProducts = () => {
    return DataItem.filter(item => {
      const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
      const sizeMatch = selectedSize === 'all' || item.size === selectedSize;
      return categoryMatch && sizeMatch;
    });
  };
  
  const filteredProducts = filterProducts();

  return (
      <div className="product-list">
          <div className="product-card">
             
              <img className="img-item" src={`./${product.image}.jpeg`} width="230px" alt="t-shirt" />
               <p>{product.article}</p>
              <h3>${product.price}</h3>
              <p>Size: {product.size}</p>
              <ChangeQuantity 
                  quantity={quantity}
                  setQuantity={setQuantity}
              />
              <button 
                  className="addToCart-btn" 
                  onClick={() => {dispatch(addItemToCart({ product, quantity }))}}
              >
                  Add
              </button>
          </div>
      </div>
  )
}
export default Product;