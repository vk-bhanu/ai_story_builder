import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false);
  return (
    <div className="aibuilder__navbar">
      <div className="aibuilder__navbar-links">
        <div className="aibuilder__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="aibuilder__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#waib">What's GPT?</a></p>
          <p><a href="#possibility">OpenAI</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#href">Library</a></p>
        </div>
      </div>
      <div className="aibuilder__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="aibuilder__navbar-menu">
        {toggleMenu
        ? < RiCloseLine color="#fff" size={27} onClick= {() => setToggleMenu(false)} />
        : < RiMenu3Line color="#fff" size={27} onClick= {() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="aibuilder__navbar-menu_container scale-up-centre">
            <div className="aibuilder__navbar-menu_container-links">
             <p><a href="#home">Home</a></p>
             <p><a href="#waib">What's GPT?</a></p>
             <p><a href="#possibility">OpenAI</a></p>
             <p><a href="#features">Features</a></p>
             <p><a href="#href">Library</a></p>
             <div className="aibuilder__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
         </div>
        )
        }
        </div>
    </div>
  )
}

export default Navbar