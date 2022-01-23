import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Card from './Card';
import ProductsContainer from './ProductsContainer';
import SingleProduct from './SingleProduct';

function Routs({ products, addToCart, decreaseItem, removeFromCart, cart, totalItems, totalPrice, currentPage, itemsPerPage, btns, prevBtns, currentBtns, nextBtns, setPage, currentBtn  }) {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<ProductsContainer 
                                        products={products} 
                                        addToCart={addToCart}
                                        btns={btns} 
                                        prevBtns={prevBtns} 
                                        currentBtns={currentBtns} 
                                        nextBtns={nextBtns} 
                                        setPage={setPage} 
                                        currentBtn={currentBtn}
                                        currentPage={currentPage} 
                                        itemsPerPage={itemsPerPage} />} />
                                        
                <Route exact path='/products' element={<ProductsContainer
                                        products={products} 
                                        addToCart={addToCart}
                                        btns={btns} 
                                        prevBtns={prevBtns} 
                                        currentBtns={currentBtns} 
                                        nextBtns={nextBtns} 
                                        setPage={setPage} 
                                        currentBtn={currentBtn}
                                        currentPage={currentPage} 
                                        itemsPerPage={itemsPerPage} />} />

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
