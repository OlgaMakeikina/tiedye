import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedCategory, getSelectedSize, filterCategory, filterSize, filterPrice } from '../../redux/productSlice';
import Filter from './Filter';
import './Filter.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; 

const AllCategories = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);
  const selectedSize = useSelector(getSelectedSize);
  const [priceRange, setPriceRange] = useState([0, 500]); // Начальный диапазон цен

  const categories = ['all', 'man', 'woman', 'child'];
  const sizes = ['P', 'PP', 'M', 'G', 'GG'];

  const handlePriceChange = (range) => {
    setPriceRange(range);
    dispatch(filterPrice({ minPrice: range[0], maxPrice: range[1] }));
  };

  // Обработка изменения цен в input
  const handleInputChange = (index, value) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = Number(value);

    // Обновление диапазона, если значения в пределах допустимого диапазона
    if (newPriceRange[0] >= 0 && newPriceRange[0] <= 1000 && newPriceRange[1] >= 0 && newPriceRange[1] <= 1000) {
      setPriceRange(newPriceRange);
      dispatch(filterPrice({ minPrice: newPriceRange[0], maxPrice: newPriceRange[1] }));
    }
  };

  return (
    <div className="filter">
      <h2 className="filter-header">Filter</h2>

      {/* Фильтр по категориям */}
      <h2 className="catalog">Category</h2>
      <div className="filter-categories">
        {categories.map((category) => (
          <Filter
            key={category}
            category={category}
            onClick={() => dispatch(filterCategory(category))}
            isSelected={selectedCategory === category}
            type="category"
          />
        ))}
      </div>

      {/* Фильтр по размерам */}
      <h2 className="catalog">Size</h2>
      <div className="filter-sizes">
        {sizes.map((size) => (
          <Filter
            key={size}
            category={size}
            onClick={() => dispatch(filterSize(size))}
            isSelected={selectedSize.includes(size)}
            type="size"
          />
        ))}
      </div>


      <h2 className="catalog">Price</h2>
      <div className="filter-price">
        <Slider 
          range 
          min={0} 
          max={1000} 
          value={priceRange} 
          onChange={handlePriceChange} 
        />
        <div>
          <input 
            type="number" 
            value={priceRange[0]} 
            onChange={(e) => handleInputChange(0, e.target.value)} 
          />
          <input 
            type="number" 
            value={priceRange[1]} 
            onChange={(e) => handleInputChange(1, e.target.value)} 
          />
        </div>
      </div>
    </div>
  );
};

export default AllCategories;