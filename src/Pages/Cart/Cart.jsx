import { useContext } from 'react';
import {StoreContext} from '../../context/StoreContext';
import { food_list } from '../../assets/assets';
const Cart = () => { 
  const {cartItem, setCartItem, removeFromCart} = useContext(StoreContext);

  return (
    <div id='cart' className='mt-25'>
      <div id="cart-items">
        <div id='cart-items-title' className='grid grid-cols-6 items-center '>
          <p className='text-2xl font-medium'>Items</p>
          <p className='text-2xl font-medium'>Title</p>
          <p className='text-2xl font-medium'>Price</p>
          <p className='text-2xl font-medium'>Quantity</p>
          <p className='text-2xl font-medium'>Total</p>
          <p className='text-2xl font-medium'>Remove</p>
        </div>
        <br/>
        <hr />
        {food_list.map((item,index) => {
          if(cartItem[item._id] > 0){
            return(
              <>
              <div id='cart-items-title cart-items-items' className='grid grid-cols-6 items-center my-2 mx-0 text-black'>
              <img src={item.image} className='w-12'></img>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItem[item._id]}</p>
              <p>${item.price * cartItem[item._id]}</p>
              <p onClick={() => removeFromCart(item._id)} className='cursor-pointer'>x</p>
            </div>
            <hr className='h-1'/>
            </>
            
            )
          }
          
        })}
      </div>
      <div id="card-bottom">
        <div id="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div id="cart-total-details">
              <p>SubTotal</p>
              <p>{0}</p>
            </div>
            <hr />
            <div id="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div id="cart-total-details">
              <b>Total</b>
              <b>{0}</b>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div id='cart-promo-code'></div>
      </div>
    </div>
  )
}

export default Cart;