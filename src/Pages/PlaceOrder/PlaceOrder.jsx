import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form id='place-order' className='flex items-start justify-between gap-12 mt-25'>
       
        <div id="place-order-left" className='w-full max-w-[max(30%, 500px)] '>
          <p id="title" className='text-3xl font-semibold mb-4'>Delivery Information</p>
          <div className='flex gap-2 ' id="multi-fields">
            <input  className='mb-4 w-full p-2 border-2 border-olive-300 rounded-xl outline-red-300' type="text" placeholder='First Name ' />
            <input  className='mb-4 w-full p-2 border-2 border-olive-300 rounded-xl outline-red-300' type="text" placeholder='Last Name ' />
          </div>
          
          <input className='mb-4 w-full p-2 border-2 border-olive-300 rounded-xl outline-red-300' type="text" placeholder='Email' />
          <input className='mb-4 w-full p-2 border-2 border-olive-300 rounded-xl outline-red-300' type="text" placeholder='Street' />
        

        <div className='flex gap-2 ' id="multi-fields">
            <input className='mb-4 w-full p-2 border-2 border-olive-300 rounded-xl outline-red-300' type="text" placeholder='City ' />
            <input className='mb-4 w-full p-2 border-2 border-olive-300 rounded-xl outline-red-300' type="text" placeholder='State ' />
          </div>
          <div className='flex gap-2 ' id="multi-fields">
            <input className='mb-4 w-full p-2 border-2 border-olive-300 rounded-xl outline-red-300' type="text" placeholder='Pin Code ' />
            <input className='mb-4 w-full p-2 border-2 border-olive-300 rounded-xl outline-red-300' type="text" placeholder='Country ' />
          </div>
        <input className='mb-4 w-full p-2 border-2 border-olive-300 rounded-xl outline-red-300' type='text' placeholder='Phone' />
        </div>


        <div id="place-order-right" className='w-full max-w-[max(40%, 500px)]'>
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
          <button className='border-none text-white bg-red-400 w-50 mt-7 py-3 px-0 rounded-md cursor-pointer '>Proceed To Payment</button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOrder