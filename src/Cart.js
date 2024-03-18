import React from 'react'

const Cart = ({cartItems , removeFromCart ,removeAll}) => {
  return (
    <div className='cart_items'>
            {cartItems.length === 0 ? (<p>Cart Empty</p>) : (
            <>
            <ul>
                {cartItems.map((item , index) => 
                
                    <li key={index}>
                        <img src={item.image} alt={item.name}/>
                        <div>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <h>{item.description}</h>
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                            
                        </div>
                    </li>
                    
                )} 
            </ul>
            <button onClick={() => removeAll()}>Remove All</button>
            </>
            )

         }
        </div>
    )
}

export default Cart
