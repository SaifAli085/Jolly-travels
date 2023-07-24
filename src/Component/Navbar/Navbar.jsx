import React, {useState} from 'react'
import "./Navbar.css"
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const showNavbar = ()=>{
    setActive('navBar activeNavbar')
  }
  const hideNavbar = ()=>{
    setActive('navBar')
  }
  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className="logoDiv">
          <a href="/" className='logo flex'>
            <h1><MdOutlineTravelExplore className="icon"/>Travel</h1>
          </a>
        </div>
        
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className='navLink'>Home</a>
            </li>
            <li className="navItem">
              <a href="/" className='navLink'>Packages</a>
            </li>
            <li className="navItem">
              <a href="/" className='navLink'>Shop</a>
            </li>
            <li className="navItem">
              <a href="/" className='navLink'>About</a>
            </li>
            <li className="navItem">
              <a href="/" className='navLink'>Pages</a>
            </li>
            <li className="navItem">
              <a href="/" className='navLink'>News</a>
            </li>
            <li className="navItem">
              <a href="/" className='navLink'>Contact</a>
            </li>
            <button className="btn">Book Now</button>

          </ul>
          <div className="closeNavbar" onClick={hideNavbar}>
            <AiOutlineClose className='icon'/>

          </div>
          
        </div>

        <div className="toggleNavbar" onClick={showNavbar}>
            <TbGridDots className="icon"/>
          </div>

      </header>


    </section>
  )
}

export default Navbar