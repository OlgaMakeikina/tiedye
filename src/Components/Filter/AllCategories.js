import React from 'react';
import Filter from './Filter';

const AllCategories = () => {
  const categories = ['all', 'man', 'woman', 'child'];
  const sizes = ['all', 'P', 'PP', 'M', 'G', 'GG'];

  return (
    <div className="filter">
      <h2 className="filter-header">Filter</h2>
      

      <h2 className="catalog">Category</h2>
      <div className="filter-categories">
        {categories.map((category) => (
          <Filter key={category} category={category} type="category" />
        ))}
      </div>

      <h2 className="catalog">Size</h2>
      <div className="filter-sizes">
        {sizes.map((size) => (
          <Filter key={size} category={size} type="size" />
        ))}
      </div>
    </div>
  );
};

export default AllCategories;

