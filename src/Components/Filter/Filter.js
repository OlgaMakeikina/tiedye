import React from 'react';
import './Filter.css';

const Filter = ({ category, onClick, isSelected, type }) => {
  return (
    <div className={type === 'size' ? 'filter-checkbox' : ''}>
      {type === 'size' ? (
        <label>
          <input
            type="checkbox"
            checked={isSelected}  
            onChange={onClick}    
          />
          {category}
        </label>
      ) : (
        <p
          onClick={onClick}
          className={isSelected ? 'categoryButtonSelected categoryButton' : 'categoryButton'}
        >
          {category}
        </p>
      )}
    </div>
  );
};

export default Filter;