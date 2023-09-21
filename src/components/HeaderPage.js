import React from "react"
import myImage from '../images/logo.webp'

const HeaderPage = (props) => {
    function clickhandler(e){
        console.log(e.target);
    }
  return (
    <div className='header'>
        <div className='companyname'>
            <img src={myImage} width={20} height={20} alt='company logo' onClick={clickhandler}></img>
            <div onClick={clickhandler}>StudyNotion</div>
        </div>
        <nav className='navigator'>
            <div onClick={clickhandler}>Home</div>
            <div onClick={clickhandler}>About</div>
            <div onClick={clickhandler}>Contact</div>
        </nav>
        <div className='auth'>
            <button onClick={clickhandler}>Log In</button>
            <button onClick={clickhandler}>Sign Up</button>
        </div>
    </div>
  )
};

export default HeaderPage;
