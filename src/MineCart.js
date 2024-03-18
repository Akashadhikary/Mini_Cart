import React, { useState } from 'react'
import Cart from './Cart';
import { Link } from 'react-router-dom';

const MineCart = ({cartItems , setCarttems}) => {

    const [isOpen , setIsOpen] = useState(false)
    const [searchItems , setSearchItems] = useState('');


    const toggle = () => {
        setIsOpen(!isOpen);
        
    }

    const navigateToCart = () => {
        <Link to="/cart">Cart</Link>
    }

    const calculateTotalPrice =()=>{
        return cartItems.reduce((total , item) => total + item.price , 0)
    }

    const removeFromCart = (itemToRemove) => {
        const  newCartItems = cartItems.filter((item) =>  item !== itemToRemove)
        setCarttems(newCartItems)
    }

    const removeAll = () => {
        setCarttems([])
    }


  return (
    <div className='mini_cart'>
      <button onClick={() => {toggle(); navigateToCart()}}>Cart ({cartItems.length})</button>
      {isOpen && (
        
        <>
            <input
                type='text'
                placeholder='Search for items...'
                value={searchItems}
                onChange={(e) => setSearchItems(e.target.value)}
            />
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} removeAll={removeAll}/>
            <p>Total Price : ${calculateTotalPrice()}</p>
        </>
      )}
    </div>
    )
}

export default MineCart
