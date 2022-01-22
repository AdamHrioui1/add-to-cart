import React from 'react';
import { useParams } from 'react-router-dom'

function SingleProduct({ products, addToCart, cart }) {
    let pid = useParams()
    const currentItem = products.find(product => product.id === parseInt(pid.id))
    const productInCart = cart.find(item => item.id === parseInt(pid.id)) || {quantity: 0}

    const { id, name, img, desc, date, price } = currentItem
    const { quantity } = productInCart

    return (
        <div className="single_product_container" key={id}>
            <article>    
                <div className="single_product_img_container">
                    <img src={img} alt={name} />
                </div>

                <div className="info">
                    <h1>{name}</h1>
                    <span className='date'>{date}</span>
                    <p>{desc}</p>
                    
                    <div className="price_add_to_cart">
                        <select name="" id="">
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        </select>
                        <h3>${price.toLocaleString()}</h3>
                    </div>
                    <div className="btn" onClick={() => addToCart(id)}>{quantity ? `(${quantity}) Items Added` : 'Add to cart' }</div>
                </div>
            </article>
        </div>
    )
}

export default SingleProduct;
