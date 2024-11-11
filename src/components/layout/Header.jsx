import { Search, ShoppingCart } from "lucide-react";
import styles from "./styles/header.module.css";
import Flex from "../shared/Flex";
import { useCartState } from "../providers/context/CartContext";
import { Link } from "react-router-dom";
import Dropdown, { DropdownContent, DropdownTrigger } from "../shared/Dropdown";

export default function Header() {
    const { count, cart } = useCartState();


    return (
        <Flex as="header" className={styles.header} justifyContent="space-between">
            <div>
                <Link to='/'>BOOKSHOPPING</Link>
                <span>
                    <Search size={20} strokeWidth={0.75} />
                </span>
                <input type="search" name="" id="" placeholder="Search..." />
            </div>
            <div>
                <ul>
                    <Dropdown as="li">
                        <DropdownTrigger>
                            <ShoppingCart />
                            <span >{count}</span>
                        </DropdownTrigger>
                        <DropdownContent>
                            <ul>
                                {cart.map((item) => (
                                    <li key={item.id}>
                                        <div as="justifyContent">
                                            <img src={item.image} alt="" />
                                            <span>${item.discount_price}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </DropdownContent>
                    </Dropdown>
                </ul>
            </div>
        </Flex>
    );
}