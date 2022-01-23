import React from 'react'
import GetBtns from './GetBtns'
import Item from './Item'

function ProductsContainer({ products, addToCart, currentPage, itemsPerPage, btns, prevBtns, currentBtns, nextBtns, setPage, currentBtn }) {
    return (
        <div className="container">
            {
                products.slice(currentPage*itemsPerPage, currentPage*itemsPerPage+itemsPerPage).map(product => {
                    return (                
                        <Item key={product.id} 
                                product={product}
                                addToCart={addToCart}
                        />
                    )
                })
            }
            <GetBtns 
                    btns={btns} 
                    prevBtns={prevBtns} 
                    currentBtns={currentBtns} 
                    nextBtns={nextBtns} 
                    setPage={setPage} 
                    currentBtn={currentBtn} />
        </div>    
        
    )
}

export default ProductsContainer
