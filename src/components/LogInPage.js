import React, { useState } from "react"
import teaching from '../images/teaching.jpg'
import { FcGoogle } from 'react-icons/fc';
import { AiFillEyeInvisible , AiFillEye} from 'react-icons/ai';

const LogInPage = (props) => {

const [loginData , setLoginData] = useState({Email : "" , Password : ""});
const [showPassword , setShowPassword] = useState(false);

function changeHandler(e){
  setLoginData( (prevData) => ({
    ...prevData , [e.target.name] : e.target.value
  }))
}

function PasswordHandler(e){
  // console.log(e.target.parentElement.children[1]);
  // console.log(e.target.parentElement);
  setShowPassword(!showPassword);
  const tar = document.querySelector('#password');
  // console.log(tar);
  if(!showPassword){
    tar.type = "text"
  }
  else{
    tar.type = "password"
  }
}

function submitHandler(e){
  e.preventDefault();
  console.log(loginData);
  props.fun();
}

  return (
    <div className="LogInPage">
      <div>
        <form className="signInform" onSubmit={submitHandler}>
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
                {
                  !showPassword ? (
                    <AiFillEyeInvisible className="eyeLogo" onClick={PasswordHandler}></AiFillEyeInvisible>
                    ) : (
                    <AiFillEye className="eyeLogo" onClick={PasswordHandler}></AiFillEye>
                  )
                }
                <span className="forgotPassword">Forgot Password ?</span>
            </div>
            <br></br>
            <div>
                <button type="submit" className="signInButton">Sign In</button>
            </div>
            <br></br>
            <br></br>
            <div>
                <button type="submit" ><FcGoogle className="googleLogo"></FcGoogle>Sign In With Google</button>
            </div>
        </form>
        <img src={teaching} alt="the teacher is teaching" width={400} height={300} className="teachingImage"></img>
      </div>
    </div>
  )
};

export default LogInPage;
