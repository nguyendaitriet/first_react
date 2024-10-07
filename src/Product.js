import { useMemo, useState } from "react";

function Product() {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [products, setProducts] = useState([]);
    const handleAddButton = () => {
        setProducts((prev) => [...prev, { title, price: +price }]);
        setTitle('');
        setPrice('');
    }

    const totalPrice = useMemo(
        () => products.reduce((result, product) => result + product.price, 0),
        [products]
    )

    console.log(totalPrice);
    
    return (
        <>
            <input
                value={title}
                placeholder="Enter product Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                value={price}
                placeholder="Enter product Price" type="number"
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleAddButton}>Add</button>
            <p>Total Price: {totalPrice}</p>
            <ul>
                {
                    products &&
                    products.map(
                        ({ title, price }, index) => <li key={index}>{title} - {price}</li>
                    )
                }
            </ul>
        </>
    )
}

export default Product;