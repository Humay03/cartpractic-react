import { createContext, useContext, useEffect, useState } from "react"

const ProductContext = createContext(null);

export const useProducts = () => {
    if (!ProductContext) return "context ehtiyac var!";
    return useContext(ProductContext);
};

export default function ProductProvider({ children }) {
    const [books, setBooks] = useState([]);

    const getProducts = async () => {
        const request = await fetch('/src/data/book.json');
        return await request.json();
    }

    useEffect(() => {
        getProducts().then(data => setBooks(data))
    }, []);

    if(!books.length) return <div>Loading...</div>
    return (
        <ProductContext.Provider value={{
            books,
        }}>
            {children}
        </ProductContext.Provider>
    )
}
