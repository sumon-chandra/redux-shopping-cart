import React, { useEffect, useState } from 'react'

function Products() {
    const [products, setProducts] = useState([]);
    const api = 'https://fakestoreapi.com/products'

    useEffect(() => {
        fetch(api)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
  return (
    <div>
        {
            products.map(product => (
                <article className='cart' key={product.id}>
                    <h4>{product.title}</h4>
                </article>
            ) )
        }
    </div>
  )
}

export default Products