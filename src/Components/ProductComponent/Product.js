import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from '../../redux/cartSlice';
import './ProductItems.css';

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()

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