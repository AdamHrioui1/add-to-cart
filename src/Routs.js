import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Card from './Card';
import ProductsContainer from './ProductsContainer';
import SingleProduct from './SingleProduct';

function Routs({ products, addToCart, decreaseItem, removeFromCart, cart, totalItems, totalPrice }) {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<ProductsContainer 
                                        products={products} 
                                        addToCart={addToCart} />} />
                                        
                <Route exact path='/products' element={<ProductsContainer 
                                        products={products} 
                                        addToCart={addToCart} />} />

                <Route exact path='/card' element={<Card 
                                                    cart={cart}
                                                    addToCart={addToCart}
                                                    decreaseItem={decreaseItem}
                                                    removeFromCart={removeFromCart}
                                                    totalItems={totalItems}
                                                    totalPrice={totalPrice}
                />} />
                <Route path='/product/:id' element={<SingleProduct products={products}
                                                                   addToCart={addToCart}
                                                                   cart={cart}
                                                                    />} />
            </Routes>
        </>
    )
}

export default Routs
