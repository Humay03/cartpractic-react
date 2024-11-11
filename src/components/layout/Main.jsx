
import ProductProvider from "../../providers/context/ProductContext";
import ProductGrid from "../products/ProductGrid";
import Section from "./Section";
import styles from "./styles/section.module.css"


export default function Main() {
    const headerActionElement = (
        <div className={styles.viewProduct}><button>View More</button></div>
    )
    return (
        <ProductProvider>
            <main style={{ backgroundColor: 'lightgrey', height: '100%', padding: 16 }}>
                <Section
                    headerTitle="Brows books"
                    headerAction={headerActionElement}
                ><ProductGrid /></Section>
            </main>
        </ProductProvider>
    )
}
