import { Heart, ShoppingBag, Star } from "lucide-react";
import styles from "./product.module.css";
import { useNavigate } from "react-router-dom";
import { useCartState } from "../providers/context/CartContext";
import Flex from "../shared/Flex";


export default function ProductItem({ book }) {
    const navigate = useNavigate();
    const { add } = useCartState();

    return (
        <Flex as="article" className={styles.productItem}>
            <div className={styles.productImage}>
                <img src={book.image} alt="" />
                <div className={styles.productHover}>
                    <button onClick={() => navigate(`/books/${book.id}`)}>Wiev Book</button>
                </div>
            </div>
            <div>
                <h5>{book.name}</h5>
                <p>{book.author}</p>
                <div>
                    <Star size={16} strokeWidth={3} />
                    <Star size={16} strokeWidth={3} />
                    <Star size={16} strokeWidth={3} />
                    <Star size={16} strokeWidth={3} />
                    <Star size={16} strokeWidth={3} />
                </div>
                <div>
                    <span>${book.price}</span>
                    <span>${book.discount_price}</span>
                </div>
                <div>
                    <button onClick={() => add(book)}><ShoppingBag size={16} strokeWidth={1.25} /></button>
                    <button><Heart size={16} strokeWidth={1.25} /></button>
                </div>
            </div>
        </Flex>
    )
}
