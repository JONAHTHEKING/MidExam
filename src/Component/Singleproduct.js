import React, { useState } from 'react'
import { GiSelfLove } from 'react-icons/gi'
import { FaBeer } from 'react-icons/fa';

import { useDispatch } from 'react-redux';

const Singleproduct = ({ item, cart, setCart, favourite, setFavourite }) => {

  // const [count, setcount] = useState(0)
  const dispatch = useDispatch()

  const hello = () => {

    // setcount(count + 1)

    if (!cart.includes(item)) {
      // setCart(cart.filter((c) => c.id !== item.id))
      setCart([...cart, item])
      increment()
    }
  }
  const increment = () => {
    dispatch({ type: "increment" })
  }


  const hey = () => {

    if (cart.includes(item)) {
      setCart(cart.filter((c) => c.id !== item.id))
      decrement()
    }
  }

  const decrement = () => {
    dispatch({ type: "decrement" })

  }
  const bye = () => {

    if (!favourite.includes(item)) {
      // setFavourite(favourite.filter((d) => d.id !== item.id))
      setFavourite([...favourite, item])
      increment1()
    }

  }

  const increment1 = () => {
    dispatch({ type: "increment1" })
  }

  return (
    <div>
      <div className='card' style={{ height: "35rem", padding: "10px" }}>
        <button class="btn btn-outline-info" style={{ width: "2.5rem" }} onClick={bye}> <GiSelfLove /> </button>
        <img src={item.image} className='card-img-bottom' style={{ width: "10rem", height: "15rem", padding: "5px" }} />
        <div className='card-body'>
          <p className='card-title'> <h5>Brand,</h5> {item.title}</p>
          <p className='card-price' >${item.price}</p>
          <p className='card-rating'>Rating: {item.rating.rate}</p>


          {/* {cart.includes(item) ? (

            <button  variant="danger" onClick={() => setCart(cart.filter((c) => c.id !== item.id))}>Remove from cart</button>
          ) : (
            <button className='btn btn-primary' onClick={(() => setCart([...cart, item]))}>Add To Cart </button>
          )} */}

          {/* {favourite.includes(item) ? (

<button  variant="danger" onClick={() => setFavourite(favourite.filter((c) => c.id !== item.id))}>Remove from fav</button>
) : (
<button className='btn btn-primary' onClick={(() => setFavourite([...favourite, item]))}>Add To fav </button>
)} */}

          <button className="btn btn-outline-primary m-1" onClick={hello}>add to cart</button>

          <button class="btn btn-outline-danger" onClick={hey}>Remove</button>
        </div>

      </div>

    </div>
  )
}

export default Singleproduct
