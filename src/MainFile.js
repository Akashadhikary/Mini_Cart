import React, { useState } from 'react'
import MineCart from './MineCart'


const MainFile = () => {

    const [cartItems , setCarttems] = useState([])


    const products = [
        {
            id: 1,
            name : "Product 1",
            image: "data:image/jpeg;base64,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",
            price: 100 ,
            description:"Good Product"
        },
        {
            id: 2,
            name : "Product 2",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeP_yhn0XiqNjvTFmNSd2PwO_L_EeiTGnJKwsZhuHR1Q&s",
            price: 200 ,
            description:"Good Product"
        },
        {
            id: 3,
            name : "Product 3",
            image: "data:image/jpeg;base64,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",
            price: 300 ,
            description:"Good Product"
        },
        {
            id: 4,
            name : "Product 4",
            image: "data:image/jpeg;base64,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",
            price: 400 ,
            description:"Good Product"
        },
        {
            id: 5,
            name : "Product 5",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp79yEkp52xCcPHrgCkkscYvq-Unnix6weHrFuGTe67WJWBbjv8kd7jd66eA&s",
            price: 500 ,
            description:"Good Product"
        },
    
    ]

const addToCart = (product)=> {
    setCarttems([...cartItems , product])
}

  return (
    <div className='App'>
      <h1>MineCart Application</h1>
      <div className='prouct_list'>
        {products.map((product) => (
            <div className='product' key={product.id}>
                <h>{product.name}</h>
                <img src={product.image} alt={product.name}/>
                <p>Price :  ${product.price}</p>
                <h>{product.description}</h>
                <button onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
        ))}
       </div> 
        <MineCart cartItems = {cartItems} setCarttems={setCarttems}/>
      </div>
  )
}

export default MainFile