import React from "react"
import myImage from '../images/logo.webp'
import { NavLink, useNavigate } from "react-router-dom";

const HeaderPage = (props) => {

    const navigate = useNavigate();
    function loadLoginPage(){
        navigate("/signin");
    }

    function loadSignUpPage(){
        navigate("/signup");
    }

  return (
    <div className='header'>
        <div className='companyname'>
            <img src={myImage} width={20} height={20} alt='company logo'></img>
            <div>StudyNotion</div>
        </div>
        <nav className='navigator'>
            <NavLink to="/">Home</NavLink>
            <div>About</div>
            <div>Contact</div>
        </nav>
        <div className='auth'>
            <button onClick={loadLoginPage}>Log In</button>
            <button onClick={loadSignUpPage}>Sign Up</button>
        </div>
    </div>
  )
};

export default HeaderPage;
