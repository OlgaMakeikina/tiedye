import React from 'react';
import ProductItems from './Components/ProductComponent/ProductItems';
import AllCategories from './Components/Filter/AllCategories';

const Home = () => {
  return (
    <div>
      <h1 className="main-header">TIE-DYE COLLECTION</h1>
      <div className="app-container">
        <div className="content-shop">
          <ProductItems />
        </div>
        <div className="content-filter">
          <AllCategories />
        </div>
      </div>
    </div>
  );
};

export default Home;