import React from "react"
import teaching from '../images/teaching.jpg'
import { FcGoogle } from 'react-icons/fc';
import { AiFillEyeInvisible } from 'react-icons/ai';

const LogInPage = (props) => {
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
                <input type="email" id="email" placeholder="Enter email address"></input>
            </div>
            <br></br>
            <div className="password">
                <label htmlFor="password">Enter Password</label>
                
                <input type="password" id="password" placeholder="Enter Password" ></input>
                <AiFillEyeInvisible className="eyeLogo"></AiFillEyeInvisible>
                <span className="forgotPassword">Forgot Password ?</span>
            </div>
            <br></br>
            <div>
                <button className="signInButton">Sign In</button>
            </div>
            <br></br>
            <br></br>
            <div>
                <button><FcGoogle className="googleLogo"></FcGoogle>Sign In With Google</button>
            </div>
        </form>
        <img src={teaching} alt="the teacher is teaching" width={400} height={300} className="teachingImage"></img>
      </div>
    </div>
  )
};

export default LogInPage;
