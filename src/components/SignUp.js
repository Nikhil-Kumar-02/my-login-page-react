import React from "react"
import teaching from '../images/teaching.jpg'
import { FcGoogle } from 'react-icons/fc';
import { AiFillEyeInvisible } from 'react-icons/ai';


const SignUp = (props) => {

    function currentUserRole(e){
        e.preventDefault();
        let ele = e.target.parentElement;
        ele = ele.children;
        if(e.target == ele[0]){
            ele[0].style.backgroundColor = "rgb(188, 188, 188)";
            ele[1].style.backgroundColor = "rgb(81, 79, 79)"
        }
        else{
            ele[1].style.backgroundColor = "rgb(188, 188, 188)";
            ele[0].style.backgroundColor = "rgb(81, 79, 79)"
        }
    }

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
      <form className="signup-form">
            <div className="signup-text">
                <h1>Join the millions learning to code with StudyNotion for free</h1>
                <span>Build skills for today / tomorrow and beyond</span>
                <br></br>
                <span className="signup-bluetxt">Education to future proof your career</span>
            </div>
            <div className="selectUser">
                <button onClick={currentUserRole}>Student</button>
                <button onClick={currentUserRole}>Instructor</button>
            </div>
            <div className="signupPersonalDetails">
                <div className="signupfName">
                    <label htmlFor="fname">First Name</label>
                    <br></br>
                    <input placeholder="Enter First Name" id="fname" type="text"></input>
                </div>
                <div className="signuplName">
                    <label htmlFor="lname">Last Name</label>
                    <br></br>
                    <input placeholder="Enter Last Name" id="lname" type="text"></input>
                </div>
            </div>
            <div className="signupEmail">
                <label htmlFor="email">Email Address</label>
                <br></br>
                <input type="email" placeholder="Enter Email Address" id="email"></input>
            </div>
            <div className="signup-password">
                <div className="crePassword">
                    <label htmlFor="crePassword">Create Password</label>
                    <br></br>
                    <AiFillEyeInvisible className="signupEyeLogo"></AiFillEyeInvisible>
                    <input placeholder="Create Password" id="crePassword" type="password"></input>

                </div>
                <div className="cnfPassword">
                    <label htmlFor="cnfPassword">Confirm Password</label>
                    <br></br>
                    <AiFillEyeInvisible className="signupEyeLogo"></AiFillEyeInvisible>
                    <input placeholder="Confirm Password" id="cnfPassword" type="password"></input>
                </div>
            </div>
            <button className="createAccount" onClick={props.fun}>Create Account</button>
            <div className="signup-google">
                <button onClick={props.fun}><FcGoogle className="signup-google-logo"></FcGoogle>Sign in with Google</button>
            </div>
        </form>
        <img src={teaching} alt="the teacher is teaching" width={400} height={300} className="teachingImage"></img>
      </div>
    </div>
  )
};

export default SignUp;
