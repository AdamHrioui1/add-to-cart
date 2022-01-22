import React from 'react'
import Item from './Item'

function ProductsContainer({ products, addToCart }) {
    return (
        <div className="container">
            {
                products.map(product => {
                    return (                
                        <Item key={product.id} 
                                product={product}
                                addToCart={addToCart}
                        />
                    )
                })
            }
        </div>    
        
    )
}

export default ProductsContainer
