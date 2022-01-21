import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Card from './Card';
import ProductsContainer from './ProductsContainer';

function Routs({ products, cardItems, setCardItems, addToCard, increaseQuantity, decreaseQuantity, removeFromCard, total, totalItems }) {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<ProductsContainer products={products} addToCard={addToCard} />} />
                <Route exact path='/products' element={<ProductsContainer products={products} />} addToCard={addToCard} />
                <Route exact path='/card' element={<Card cardItems={cardItems} 
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        removeFromCard={removeFromCard}
                        setCardItems={setCardItems}
                        total={total}
                        addToCard={addToCard}
                        totalItems={totalItems}

                />} />
            </Routes>
        </>
    )
}

export default Routs
