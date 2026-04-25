import { createContext, useEffect, useState } from "react"
import {food_list} from "../assets/assets"

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});
    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev,[itemId]:(prev[itemId] || 0) + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev,[itemId]:prev[itemId] - 1}))
    }

    useEffect(() => {
        console.log(cartItem);
    }, [cartItem])

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        removeFromCart,
        addToCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;