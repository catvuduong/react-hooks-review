import React, { useMemo, useRef, useState } from 'react';

const AddProduct = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProduct] = useState([])

    const nameRef = useRef();

    const handleSubmit = () => {
        console.log(name, price);
        setProduct([...products, {
            name,
            //khi input số vào thẻ input nó sẽ thành string nên phải chuyển sang số bằng +price
            price: +price
        }])

        setName('')
        setPrice('')

        nameRef.current.focus()
    }

    const total = useMemo(() => {
        const res = products.reduce((result, prod) => {
            console.log("Tính toán lại");
            return result + prod.price
        }, 0)
        return res
    }, [products]);

    console.log(products);
    return (
        <div>
            <input type="text"
                ref={nameRef}
                value={name}
                placeholder='input Name'
                onChange={(e) => setName(e.target.value)}
            />
            <input type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder='input Price'
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            Total: {total}
            <ul>
                {products.map((product, index) => <li key={index}>{product.name} - {product.price}</li>)}
            </ul>
        </div >
    );
}

export default AddProduct;
