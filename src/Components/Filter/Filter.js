import { useDispatch, useSelector } from "react-redux";
import { filterCategory, filterSize, getSelectedCategory, getSelectedSize } from "../../redux/productSlice";
import './Filter.css';

const Filter = ({ category, type }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);
  const selectedSize = useSelector(getSelectedSize);

  const handleFilterClick = () => {
    console.log('Clicked filter:', category);
    if (type === 'category') {
      dispatch(filterCategory(category));
    } else if (type === 'size') {
      dispatch(filterSize(category)); 
    }
  };

  const isSelected = type === 'category' ? selectedCategory === category : selectedSize === category;

  return (
    <div>
      <p
        onClick={handleFilterClick}
        className={isSelected ? 'categoryButtonSelected categoryButton' : 'categoryButton'}
      >
        {category}
      </p>
    </div>
  );
};

export default Filter;