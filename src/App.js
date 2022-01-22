import { useState, useEffect } from 'react'
import Routs from './Routs';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './SingleProduct.css'
import './card.css';
import data from './data/data'
import Navbar from './Navbar';

function App() {
  const products = data
  const [cart, setCart] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setTotalItems(cart.reduce((total, item) => total + item.quantity, 0))
    setTotalPrice(cart.reduce((total, item) => total + item.quantity * item.price, 0))
  }, [cart])

  const addToCart = (id) => {
    const productExist = cart.find(item => item.id === id)
    if(productExist) {
      setCart(cart.map(item => item.id === productExist.id ? {...item, quantity: item.quantity + 1} : item))
    }
    else {
      let newProduct = products.find(item => item.id === id)
      setCart([...cart, {...newProduct, quantity: 1}])
    }
  }

  const decreaseItem = (id) => {
    let currentItem = cart.find(item => item.id === id)
    if(currentItem.quantity === 1) {
      removeFromCart(id)
    }
    else {
      setCart(cart.map(item => item.id === id ? {...item, quantity: currentItem.quantity - 1} : item))
    }
  } 

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  return (
    <div className="App">
      <Router>
        <Navbar totalItems={totalItems} />
        <Routs products={products} 
               addToCart={addToCart}
               cart={cart} 
               decreaseItem={decreaseItem}
               removeFromCart={removeFromCart}
               totalItems={totalItems}
               totalPrice={totalPrice}
               />
      </Router>
    </div>
  );
}

export default App;
