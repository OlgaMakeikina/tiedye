import DataItem  from "../../data/DataItem";
import Product from "./Product";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/productSlice";
import './ProductItems.css'
const ProductItems = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  return (
      <div className="product-list">
          {DataItem.filter(product => {
              if (selectedCategory === 'all') return true;
              return selectedCategory === product.category;
          }).map(product => (
              <Product key={product.id} product={product} />
          ))}
      </div>
  )
}

export default ProductItems;