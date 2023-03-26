import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../../assets/logo.svg';
import './navbar.css';

// BEM -> Block Element Modifier

const Menu = () => {
  return <>
    <p><a href="#Home">Home</a></p>  
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#feature">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt4__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-sign">
          <p className="gpt3__navbar-sign-in">Sign in</p>
          <button className="gpt3__navbar-sign-up" type="button">Sign Up</button>
          <div className="gpt3__navbar-menu">
            {toggleMenu ? <AiOutlineClose color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
              : <AiOutlineMenu color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
            }
            {toggleMenu && (
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <Menu />
                  <div className="gpt3__navbar-menu_container-links-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar