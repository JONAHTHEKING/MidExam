import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import {IoMdLogIn} from "react-icons/io"

const Login = () => {
  return (
    <center>
      <div>
        <form className="login-form" >
          <h2>LOGIN</h2>
          <div>

            <input type="email" name="email" placeholder="Enter your Email" style={{ width: "18rem" }} />
          </div>
          <div>

            <input type="password" name="password" placeholder="Enter password" style={{ width: "18rem" }} />
          </div>
          <div>
            <h7>don't Have an Account Sign up  </h7><Link to="/signup">Here</Link>
          </div>
          <button type="submit" className="btn btn-outline-primary m-5">{IoMdLogIn}Login</button>


        </form>
        <div className='navbar-brand'>
          <a className='navbar-brand'> <Link to="/"><button style={{ height: "2rem" }} type="BacktoHomePage" className='btn btn-outline-secondary m-5'>Back To Home Page</button></Link> </a>
        </div>
      </div>
    </center>
  )
}

export default Login;
