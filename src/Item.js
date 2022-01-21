import React from 'react'

function Item({ product, addToCard }) {
    const { id, name, date, img, price } = product
    return (
        <div className="item">
            <div className="item_img_container">
                <img src={img} alt={name} />
            </div>
            <div className="info">  
                <p>{date}</p>
                <p>{name}</p>
            </div>
            
            <div className="add_to_card_container">
                <div className="info">
                    <p>{name}</p>
                    <p>${price}.99</p>
                </div>
                <button className='add_to_card_btn' onClick={() => addToCard(id)}>Add To Card</button>
            </div>
        </div>
    )
}

export default Item
