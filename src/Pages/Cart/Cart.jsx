import { useContext } from 'react';
import {StoreContext} from '../../context/StoreContext';
import { food_list } from '../../assets/assets';
import { useNavigate } from 'react-router';
const Cart = () => { 
  const {cartItem, setCartItem, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div id='cart' className='mt-25'>
      <div id="cart-items">
      <div id='cart-items-title' className='grid grid-cols-6 items-center'>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl font-medium'>Items</p>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl font-medium'>Title</p>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl font-medium'>Price</p>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl font-medium'>Quantity</p>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl font-medium'>Total</p>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl font-medium'>Remove</p>
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
      <div id="cart-bottom" className='mt-20 flex flex-col-reverse justify-between gap-5 md:flex-row'>
        <div id="cart-total" className='flex-1 flex flex-col gap-5  '>
          <h2>Cart Total</h2>
          <div>
            <div id="cart-total-details" className='flex justify-between text-slate-500'>
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2 mx-0 ' />
            <div id="cart-total-details" className='flex justify-between text-slate-500'>
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='my-2 mx-0 ' />
            <div id="cart-total-details" className='flex justify-between text-slate-500'>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 :getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')} className='border-none text-white bg-red-400 w-50 py-3 px-0 rounded-md cursor-pointer '>Proceed To Checkout</button>
        </div>
        <div id='cart-promo-code' className='flex-1 justify-start'>
          <div>
            <p className='text-slate-500'>Have a Promo Code? Enter Here:</p>
            <div className="cart-promocode-input" className="mt-1 flex justify-between items-center bg-gray-300 rounded-md ">
              <input type='text' placeholder='Promo Code' className='bg-transparent border-none outline-none pl-2'></input>
              <button className='w-40 py-3 px-1 bg-black border-none text-white  rounded-md'>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;