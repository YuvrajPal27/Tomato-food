import { useContext } from "react"
import { assets } from "../assets/assets"
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({id,name,price,description,image}) => {

    const {cartItem, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div id='food-item' className='w-full m-auto rounded-xl hover:scale-110 transition-all transition-duration-300 shadow-[0_0_10px_#00000015] hover:shadow-[0_0_15px_#00000025] cursor-pointer'>
        <div id="food-item-image-container" className='relative'>
            <img id='food-item-image' src={image} className='w-full rounded-t-xl '></img>
            {
                !cartItem[id] 
                    ? <img id="add" className="w-9 absolute bottom-4 right-4 cursor-pointer rounded-xl" onClick={() => addToCart(id)} src={assets.add_icon_white } /> 
                    : <div id="food-item-counter" className="absolute bottom-4 right-4 flex items-center gap-2 p-2 rounded-xl bg-white">
                        <img onClick={() => removeFromCart(id)} id="decrease" className="w-7" src={assets.remove_icon_red} />
                        <p> {cartItem[id]} </p>
                        <img onClick={() => addToCart(id)} className="w-7" src={assets.add_icon_green} />
                        </div>
            }
        </div>
        <div className='p-5' id="food-item-info">
            <div className='flex justify-between items-center mb-2' id="food-item-name-rating">
                <p className="text-xl font-bold"> {name}</p>
                <img src={assets.rating_starts} className="w-16 "></img>
            </div>
            <p className="text-slate-400 text-md" id="food-item-description">{description}</p>
            <p id="food-item-price" className="text-red-300 font-bold my-2 mx-0 text-xl">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem