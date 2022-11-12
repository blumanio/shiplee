import React, { useState }from "react"
import { NavLink } from "react-router-dom"
import "./header.css"
import shipping from "../../images/shipping.png"

const Header = () => {

  const [navlist, setnavlist] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className="logo">
            <a href="/">
              <img src={shipping} alt="" />
            </a>
          </div>

          <div className="nav">
            <ul className={navlist ? "small" : "flex"}>
              {/* <li>
                <NavLink to='/' exact>Home</NavLink>
              </li> */}
              <li>
                <NavLink to='/about'>Order</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Travel</NavLink>
              </li>
              {/* <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li> */}
            </ul>
          </div>

          <div className="button flex">
            <button>
              <i className="fa fa-sign-out"></i> Sign In
            </button>
          </div>

          <div className="toggle">
            <button onClick={() => setnavlist(!navlist)}>
              {navlist? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header