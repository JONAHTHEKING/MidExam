import React, { useEffect, useState } from 'react'
import Singleproduct from './Singleproduct'
import { Link } from 'react-router-dom'
import "./Cart.css"

const Cart = ({ cart, setCart, favourite,setFavourite}) => {

  
  const [total, setTotal] = useState([])
  useEffect(() => {
    setTotal(cart.reduce((acc, current) => acc + Number(current.price), 0));
  }, [cart])
  
  return (
    <div className='hai' >

      <center>
        <h3>summery</h3>
        <span>Total : ₹ {total}</span>
      </center>
      <div style={{ width: "20rem", padding: "5px", position: "absolute" }} >
        {
          cart.map((item) => (

            <Singleproduct item={item} key={item.id} cart={cart} setCart={setCart} favourite={favourite} setFavourite={setFavourite} />


          ))
        }

      </div>

      <div className='navbar-brand' >

        <a className='navbar-brand'> <Link to="/"><button type="BacktoHomePage" className='btn btn-outline-secondary m-5'>Back To Home Page</button></Link> </a>
        {

        }

      </div>
    </div>
  )
}

export default Cart

