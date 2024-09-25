import DataItem from '../../data/dataItem';
import { removeItemFromCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import './Cart.css'

const CartItem = ({cartItem}) => {
    const products = DataItem.find(item => item.id === cartItem.productId);
    const dispatch = useDispatch();
    return (


        
        <div className='cart-item'>
       <img className="img-item" src={`./${products.image}.jpeg`} width="50px" alt="t-shirt" />
       <p>{products.article}</p>
       <p>{cartItem.quantity}</p> 
       <p>$ {products.price * cartItem.quantity}</p>
       <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
       <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width="20px" alt="icon"/> 
        </span>
        </div>  
    )
}

export default CartItem;