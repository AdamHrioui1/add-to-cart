import React, { useEffect } from 'react'
import CardItem from './CardItem'

function Card({ cardItems, setCardItems, increaseQuantity, decreaseQuantity, removeFromCard, total, addToCard, totalItems }) {
    
    useEffect(() => {
        setCardItems(cardItems)
    }, [cardItems])

    return (
        <div>
                    
            <div className="card">
                <h2>SHOPPIN CARD</h2>
                <h1>{cardItems.length > 0 ? `ITEM (${totalItems})` : 'No item in the card' }</h1>
                <span className="border"></span>
                 
                {
                    cardItems.map(item => {
                        return (
                            <CardItem key={item.id} item={item} 
                                    increaseQuantity={increaseQuantity}
                                    decreaseQuantity={decreaseQuantity}
                                    removeFromCard={removeFromCard}
                                    cardItems={cardItems}
                                    setCardItems={setCardItems}
                                    addToCard={addToCard}

                            />
                        )
                    })
                }
                
                {cardItems.length > 0 ? 
                <> 
                    <span className="border"></span>
                    <div className="total_container">
                        <h2>TOTAL</h2>
                        <h2>${total}</h2>
                    </div> 
                </> : ''}
            </div>
        </div>
    )
}

export default Card
