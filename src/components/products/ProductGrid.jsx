
import { useProducts } from "../providers/context/ProductContext";
import ProductItem from "./ProductItem";
import styles from './product.module.css';


export default function ProductGrid() {
    const { books } = useProducts();
    return <div className={styles.productGrid}>
        {books?.map((item) => (
            <ProductItem key={item.id} book={item} />
        ))}
    </div>;

}
