import { useParams } from "react-router-dom";
import { useProducts } from "../../providers/context/ProductContext";
import { Facebook, Heart, Linkedin, Star, Twitter, Youtube } from "lucide-react";
import { useCartState } from "../providers/context/CartContext";

export default function Book() {
    const { books } = useProducts();
    const { add } = useCartState();
    const { id } = useParams();
    const book = books.find((item) => item.id === Number(id));
    return (
        <div>
            {book ? (
                <div>
                    <div>
                        <img src={book.image} alt="" />
                    </div>
                    <div>
                        <h5>{book.name}</h5>
                        <div>
                            <span>${book.price}</span>
                            <span>${book.discount_price}</span>
                        </div>
                        <div>
                            <Star size={16} strokeWidth={3} />
                            <Star size={16} strokeWidth={3} />
                            <Star size={16} strokeWidth={3} />
                            <Star size={16} strokeWidth={3} />
                            <Star size={16} strokeWidth={3} />
                        </div>
                        <div>
                            <p>
                                Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.
                            </p>
                        </div>
                        <p>{book.author}</p>
                        <div>
                            <button onClick={() => add(book)}>Add to Cart</button>
                            <button>Read Sample</button>
                        </div>
                        <div>
                            <span><Heart size={16} /> Add to Wishlist</span>
                        </div>
                        <div>
                            <h5>Share:</h5> <Facebook size={16} strokeWidth={1.5} />
                            <Twitter size={16} strokeWidth={1.5} />
                            <Youtube size={16} strokeWidth={1.5} />
                            <Linkedin size={16} strokeWidth={1.5} />

                        </div>
                    </div>
                </div>
            ) : (<p>Loading..</p>)}
        </div>
    )
}
