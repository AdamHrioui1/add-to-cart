import { useState, useEffect } from 'react'
import Routs from './Routs';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './card.css';
import data from './data/data'
import Navbar from './Navbar';

function App() {
  const products = data
  const [cardItems, setCardItems] = useState([])
  const [total, setTotal] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    setTotal(cardItems.reduce((total, item) => total + item.quantity * item.price, 0))
    setTotalItems(cardItems.reduce((total, item) => parseInt(total) + parseInt(item.quantity), 0) )
    console.log('total: ', total);
    console.log('cardItems: ', cardItems);
    console.log('total items: ', totalItems);
  }, [cardItems])

  const addToCard = (id) => {
    const productExist = cardItems.find(item => item.id === id)
    if(productExist) {
      setCardItems(cardItems.map(item => item.id === id ? {...item, quantity: productExist.quantity + 1 } : item ))
    }
    else {
      const product = products.find(item => item.id === id)
      setCardItems([...cardItems, {...product, quantity: 1}])
    }
  }

  const increaseQuantity = (id) => {
    console.log('increase Quantity');
    setCardItems(cardItems.map(item => item.id === id ? {...item, quantity: item.quantity + 1 } : item))
  }

  const decreaseQuantity = (id) => {
    console.log('decrease');
    const currentItem = cardItems.find(item => item.id === id)
    if(currentItem.quantity === 1) {
      removeFromCard(id)
    }
    else {
      setCardItems(cardItems.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item))
    }
  }

  const removeFromCard = (id) => {
    console.log('remove From Card');
    setCardItems(cardItems.filter(item => item.id !== id))
  }
  
  useEffect(() => {
    console.log(products); 
  })

  return (
    <div className="App">
    {/* navBar */}
    <Router>
      <Navbar cardItems={cardItems} totalItems={totalItems} />
      <Routs products={products} 
              cardItems={cardItems} 
              setCardItems={setCardItems}
              addToCard={addToCard} 
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCard={removeFromCard} 
              total={total}     
              totalItems={totalItems}
      />
    </Router>
    </div>
  );
}

export default App;
