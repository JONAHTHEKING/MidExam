import React from 'react'
import Singleproduct from './Singleproduct'
import { Link } from 'react-router-dom'
import FavProduct from './FavProduct'
import "./Favourite.css"

const Favourite = ({ favourite, setFavourite }) => {
  return (
    <div style={{ width: "20rem", padding: "5px", position: "absolute" }}>
      {
        favourite.map((item) => (

          <Singleproduct item={item} key={item.id} favourite={favourite} setFavourite={setFavourite} />

        ))
      }
      <div className='navbar-brand'>

        <a className='fav'> <Link to="/"><button type="BacktoHomePage" className='btn btn-outline-secondary m-5'>Back To Home Page</button></Link> </a>
        {

        }

      </div>
    </div>
  )
}

export default Favourite
