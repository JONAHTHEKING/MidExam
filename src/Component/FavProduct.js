import React from 'react'
import { GiSelfLove } from 'react-icons/gi'
import { FaBeer } from 'react-icons/fa';

const FavProduct = ({ favourite, setFavourite, item }) => {
  return (
    <div className='card'>
      <img src={item.image} className='card-img-bottom' style={{ width: "10rem", height: "16rem", padding: "5px" }} />



      {favourite.includes(item) ? (
        <button variant="danger" onClick={() => setFavourite(favourite.filter((d) => d.id !== item.id))}><GiSelfLove /></button>
      ) : (

        <button className='btn btn-primary' onClick={(() => setFavourite([...favourite, item]))}> <GiSelfLove />  </button>
      )}


    </div>
  )
}

export default FavProduct

