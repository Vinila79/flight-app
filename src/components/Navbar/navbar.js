import React, {useState} from 'react'

import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../../asserts/flight_logo.jpeg";
// import logo from '../../asserts/logo.png';


const Navbar = () => {
  const[active, setACtive]=useState('navBarMenu')
  const showNavBar = () => {
    setACtive('navBarMenu showNavBar')
  };
  const removeNavBar = () => {
    setACtive('navBarMenu')
  };


  const[noBg, addBg]=useState('navBarTwo')
  const addBgColor = () => {
    if(window.scrollY >= 10){
      addBg('navBarTwo navbar_with_Bg')
    }else{
      addBg('navBarTwo')
    }
  };
  window.addEventListener('scroll', addBgColor)
  
  return (
    <div className='navBar flex'>
        <div className="navBarOne flex">
            <div><SiConsul className="icon"/></div>
            <div className='none flex'>
                <li className='flex'> <BsPhoneVibrate className='icon' />Support</li>
                <li className='flex'><AiOutlineGlobal className='icon' />Languages</li>
            </div>
            <div className='atb flex'>
              <span>Sign In</span>
              <span>Sign Out</span>
            </div>

        </div>
        <div className='noBg navBarTwo'>

          <div className="logoDiv">
            <img src={logo} alt="flight logo" className='logo'/>
          </div>

          <div className={active} >
            <ul className="menu flex">
              <li onClick={removeNavBar} className="listItem">Home</li>
              <li onClick={removeNavBar} className="listItem">About</li>
              <li onClick={removeNavBar} className="listItem">Offers</li>
              <li onClick={removeNavBar} className="listItem">Seats</li>
              <li onClick={removeNavBar} className="listItem">Destination</li>
            </ul>
            <button onClick={removeNavBar} className='btn flex btnOne'
            >contact
            </button>
          </div>
          
          <button className='btn flex btnTwo'>
            contact
            </button>

          <div onClick={showNavBar} className='toggleIcon'>
          <CgMenuGridO className='icon'/>
          </div>

        </div>

    </div>
  )
}

export default Navbar;