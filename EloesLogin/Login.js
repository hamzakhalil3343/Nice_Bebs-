import React, { useState } from "react";
import { Button, FormGroup, FormControl,ControlLabel ,FormLabel } from "react-bootstrap";
import './mystyle.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
   <div>
     <img class="wave" src={require('./img/wave.png')} />
	<div class="container">
		<div class="img">
			<img src={require('./img/bg.svg')}/>
		</div>
		<div class="login-content">
			<form action="index.html">
				<img src={require('./img/avatar.svg')} />
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Username</h5>
           		   		<input type="text" class="input" />
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input type="password" class="input" />
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" class="btn" value="Login" />
            </form>
        </div>
    </div>
   </div>
  
  );
}
