import React, { useEffect } from 'react'
import CardItem from './CardItem'

function Card({ cart, addToCart, decreaseItem, removeFromCart, totalItems, totalPrice }) {
    
    return (    
            <div className="card">
                <h2>SHOPPIN CARD</h2>
                <h1>{totalItems > 0 ? `ITEM (${totalItems})` : 'No items in the cart'}</h1>
                <span className="border"></span>
                {
                    cart.map(item => {
                        return (
                            <>
                                <CardItem key={item.id} item={item}
                                                        addToCart={addToCart}
                                                        decreaseItem={decreaseItem}
                                                        removeFromCart={removeFromCart}
                                                        totalItems={totalItems}
                                />
                            </>
                        )
                    })
                }
                {totalItems ? 
                <>
                    <span className="border"></span>
                    <div className="total_container">
                        <h2>TOTAL</h2>
                        <h2>${totalPrice.toLocaleString()}</h2>
                    </div> 
                </> : ''}
        </div>
    )
}

export default Card
