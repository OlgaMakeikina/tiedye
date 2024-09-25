import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedCategory, getSelectedSize, getMinPrice, getMaxPrice } from '../../redux/productSlice';
import DataItem from '../../data/DataItem';
import Product from './Product'; 

const ProductItems = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  const selectedSize = useSelector(getSelectedSize); 
  const minPrice = useSelector(getMinPrice);   // Получаем минимальную цену
  const maxPrice = useSelector(getMaxPrice);   // Получаем максимальную цену

  return (
    <div className="product-list">
      {DataItem.filter(product => {
        const categoryMatch = selectedCategory === 'all' || selectedCategory === product.category;
        const sizeMatch = selectedSize.length === 0 || selectedSize.includes(product.size);
        
        // Проверка цены на соответствие диапазону
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;

        return categoryMatch && sizeMatch && priceMatch; // Учитываем все условия
      }).map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductItems;
 



