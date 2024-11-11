import { Outlet } from "react-router-dom";
import CartProvider from "../providers/context/CartContext";
import Header from "../layout/Header";



export default function Layout() {
    return (
        <CartProvider>
            <Header />
            <Outlet />
        </CartProvider>
    )
}