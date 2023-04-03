
import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import {TfiShoppingCartFull} from "react-icons/tfi"
import { useSelector } from 'react-redux'
import counterReducer from '../Reducer/maths'

const Header = () => {
  const counter = useSelector(state => state.counterReducer.counter)
  // const fcounter = useSelector(state => state.counterReducer.fcounter)

  return (
    <div >

      <nav className='nav-container'>

        <ul className='right-side'>
          <li class="multicolortext">SHOPLANE </li>


        </ul>
        <ul className='left-side' >

          <Link to="/login" ><li >  Login</li></Link>
          <Link to="/signup" ><li>SignUp</li></Link>
          <Link to="/favourite"><li> favourite</li></Link>
          <Link to="/cart"><li style={{fontSize:"2rem",color:"red"}}><TfiShoppingCartFull/>{counter}</li></Link>
          
        </ul>
      </nav>

    </div>
  )
}

export default Header

