import React from "react";
import { Link } from "react-router-dom";
import './Signup.css'

const Signup = () => {
  return (
    <center>
      <div>
        <form className="login-form">
          <h2>SIGN UP</h2>
          <div>
            <input
              type="firstname"
              name="firstname"
              placeholder="Enter your Firstname"
              style={{ width: "18rem" }}
            />
          </div>
          <div>
            <input
              type="lastname"
              name="lastname"
              placeholder="Enter lastname"
              style={{ width: "18rem" }}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              style={{ width: "18rem" }}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              style={{ width: "18rem" }}
            />
          </div>
          <div>
            <input
              type="password"
              name="conform password"
              placeholder="Enter conform password"
              style={{ width: "18rem" }}
            />
          </div>
          <div>
            <h7>already have an Account? Login</h7>
            <Link to="/login">Here</Link>
          </div>
          <button type="submit" className="btn btn-outline-primary m-5">
            Sign up
          </button>
        </form>
        <div className='navbar-brand'>
          <a className='navbar-brand'> <Link to="/"><button style={{ height: "2rem" }} type="BacktoHomePage" className='btn btn-outline-secondary m-5'>Back To Home Page</button></Link> </a>
        </div>
      </div>
    </center>
  );
};

export default Signup;
