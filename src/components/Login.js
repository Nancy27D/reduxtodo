import React, { useState } from "react";
import "./login.css";

import { useHistory } from "react-router";

function Login() {
  const history = useHistory();

  const [state, setstate] = useState("");
  const [errorMessage, setErrorMessage] = useState(); // Showing Error Message

  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value });
  };
  const handleClick = () => {
    if (state.Uname === '' || state.pass === '') {
      setErrorMessage('* Empty username/password field')
  }
  else {
     
      setErrorMessage('')
      localStorage.setItem("token","LoggedIn")
      history.push('/todo')
  
  }
    
  };
  return (<>
  
    <div className="login">
      <form className="login_form">
        <h1>Login Here</h1>

        <input
          type="name"
          placeholder=" Enter UserName"
         
          onChange={handleChange}></input>

        <input
          type="password"
          placeholder="Enter password"
          onChange={handleChange}></input> 
      </form>
      <button type="submit" className="submit_btn" onClick={handleClick}>
        Login </button>
    </div>
    </>
  );
}

export default Login;
