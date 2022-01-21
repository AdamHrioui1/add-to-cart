import React from 'react'
import Item from './Item'

function ProductsContainer({ products, addToCard }) {
    return (
        <div className="container">
            {
                products.map(product => {
                    return (
                        <Item key={product.id} product={product} addToCard={addToCard} />
                    )
                })
            }
        </div>    
        
    )
}

export default ProductsContainer
