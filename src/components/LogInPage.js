import React, { useState } from "react"
import teaching from '../images/teaching.jpg'
import { FcGoogle } from 'react-icons/fc';
import { AiFillEyeInvisible } from 'react-icons/ai';

const LogInPage = (props) => {

const [loginData , setLoginData] = useState({Email : "" , Password : ""})

function changeHandler(e){
  setLoginData( (prevData) => ({
    ...prevData , [e.target.name] : e.target.value
  }))
}
  console.log(loginData);


  return (
    <div className="LogInPage">
      <div>
        <form className="signInform">
            <h1>Welcome Back</h1>
            <div>Build skills for today / tomorrow and beyond </div>
            <div className="signBluetxt">Education to future proof your career</div>
            <div>
                <label htmlFor="email">Email Address</label>
                <br></br>
                <input required type="email" id="email" placeholder="Enter email address" name="Email" onChange={changeHandler} value={loginData.Email}></input>
            </div>
            <br></br>
            <div className="password">
                <label htmlFor="password">Enter Password</label>
                <input type="password" id="password" placeholder="Enter Password" name="Password" onChange={changeHandler} value={loginData.Password}></input>
                <AiFillEyeInvisible className="eyeLogo"></AiFillEyeInvisible>
                <span className="forgotPassword">Forgot Password ?</span>
            </div>
            <br></br>
            <div>
                <button type="submit"   onClick={props.fun} className="signInButton">Sign In</button>
            </div>
            <br></br>
            <br></br>
            <div>
                <button type="submit" onClick={props.fun}><FcGoogle className="googleLogo"></FcGoogle>Sign In With Google</button>
            </div>
        </form>
        <img src={teaching} alt="the teacher is teaching" width={400} height={300} className="teachingImage"></img>
      </div>
    </div>
  )
};

export default LogInPage;
