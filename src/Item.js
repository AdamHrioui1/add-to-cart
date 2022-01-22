import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Item({ product, addToCart }) {

    const item = useRef()

    const { id, name, price, date, img } = product
    return (
        <Link to={`/product/${id}`}>
        <div className="item" key={id} ref={item}>
            <div className="item_img_container">
                <img src={img} alt={name} />
            </div>
            <div className="info">  
                <p>{name}</p>
                <div className="date_price">
                    <p>{date}</p>
                    <p>${price.toLocaleString()}</p>
                </div>
            </div>
            
            {/* <div className="add_to_card_container">
                <div className="info">
                    <p className='title'>{name}</p>
                    <p>${price.toLocaleString()}.00</p>
                </div>
                <button className='add_to_card_btn' onClick={() => addToCart(id)}>Add To Card</button>
            </div> */}
        </div>
        
        </Link>
    )
}

export default Item
