import React, { useEffect } from 'react'

function CardItem({ item, cardItems, setCardItems, increaseQuantity, decreaseQuantity, removeFromCard, addToCard }) {
    
    useEffect(() => {
        setCardItems(cardItems)
    }, [cardItems])

    const { id, img, name, price, quantity } = item
    return (
        <div className="card_item" >
            <div className="img_container">
                <img src={img} alt={name} />
            </div>
            <div className="info">
                <p>{name}</p>
                <p>${price}.99</p>
            </div>

            <div className="btns_container">
                <div className="btns">
                    <button className='btn' onClick={() => decreaseQuantity(id)}>-</button>
                    <span>{quantity}</span>
                    <button className='btn' onClick={() => increaseQuantity(id)}>+</button>
                </div>
                <div className="btn" onClick={() => removeFromCard(id)}>&#10006;</div>
            </div>
        </div>
    )
}

export default CardItem
