import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCartState = () => useContext(CartContext);
export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity = 1) => {
        if (!item) return;

        const existItem = cart.findIndex(ci => ci.id === item.id);
        if (!cart.length || (existItem < 0)) {
            setCart(oldState => [...oldState, { ...item, quantity }])
        }
        else {
            setCart(oldState => {
                oldState[existItem].quantity += quantity;
                return [...oldState];
            })
        }
    }
    return (
        <CartContext.Provider value={{
            cart,
            add: addToCart,
            count: cart.length
        }}>
            {children}
        </CartContext.Provider>
    )
}