import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Cart from "./Component/Cart";
import { useState } from "react";
import Login from "./User/Login";
import Signup from "./User/Signup";
// import Favourite from "./User/Favourite";
import Favourite from "./Component/Favourite";
import Filter from "./Component/Filter";
import NavBar from "./NavBar";



const App = () => {
  const [cart, setCart] = useState([]);
  const [favourite,setFavourite] = useState([]);
  return (
    <div>
  
      
      <BrowserRouter>
    
        <NavBar />
        

        <Routes>
        
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
         

          <Route path="/favourite" element={<Favourite favourite={favourite} setFavourite={setFavourite}/>} exact ></Route>
          <Route
            path="/"
            element={<Home cart={cart} setCart={setCart} favourite={favourite} setFavourite={setFavourite} />}
            exact
          ></Route>
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart}  />}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
      
      <div>
        
      </div>


    </div>
  );
};

export default App;
