import React from "react"
import { Link } from "react-router-dom"
import "./header.css"
import shipping from "../../images/shipping.png"

const Header = () => {

  return (
    <>
      <header>
        <div className='container flex'>
          <div className="logo">
            <img src={shipping} alt="" />
          </div>
          
          <div className="nav">
            <ul className="flex">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>

          {/* <div className="toggle">
            <button>
              <i className="fa fa-bars"></i>
            </button>
          </div> */}
        </div>
      </header>
    </>
  )
}

export default Header