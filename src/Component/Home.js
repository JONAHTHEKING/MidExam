import React from 'react'
import { useState, useEffect } from 'react'
import Singleproduct from './Singleproduct'
import { connect } from 'react-redux'
import FavProduct from './FavProduct'
import Header from './Header'
import Filter from './Filter'


const Home = ({ cart, setCart, filter_name, favourite, setFavourite }) => {

//   const [count,setcount]= useState(50)

//   const increment = () => {

//     setcount(count + 1)

// }

// const decrement = () => {

//     setcount(count -1) 
// }



  const [data, setData] = useState([])
  const [clonedata, setcloneData] = useState([])
  const [Numberr, setNumber] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")

      .then(
        response => response.json()
      ).then(response => {
        setData(response);
        setcloneData(response);

      })

  }, [])


  useEffect(() => {

    if (filter_name != "ALL") {

      let specific = clonedata.filter(item => item.category === filter_name)
      setData(specific);
    }
    else {
      setData(clonedata)
    }

  }, [filter_name])
  console.log(data)
  return (
    <div>
      {/* <Header data={count}/>
      <Filter /> */}
    <div className='container'>
      
      <div className='row'>

        {
          data.map((item) => (
            <div className='col-md-3' style={{ padding: "10px" }}>

              <span>
                <Singleproduct className='col-md-3' item={item} cart={cart} setCart={setCart} key={item.id} favourite={favourite} setFavourite={setFavourite}></Singleproduct>
               
              </span>
            </div>
          )

          )

        }
      </div>

    </div>
    </div>
  )
}


const mapStateToProps = state => ({

  filter_name: state.filterreducer.filter_name
})

export default connect(mapStateToProps)(Home);


