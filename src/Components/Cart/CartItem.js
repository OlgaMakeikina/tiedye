import DataItem from '../../data/DataItem';
import { removeItemFromCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import './Cart.css'

const CartItem = ({cartItem}) => {
    const products = DataItem.find(item => item.id === cartItem.productId);
    const dispatch = useDispatch();
    return (
        <div>
            <p>{products.article}</p>
       <p>{cartItem.quantity}</p> 
       <p>Price: $ {products.price * cartItem.quantity}</p>
       <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
       <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
        </span>
        </div>  
    )
}

export default CartItem;