import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
function change(omar){
  omar.target.style.backgroundColor='pink';

}





  return (
<>
{/* header section strats */}
<div className='hero_area' onClick={(e)=>change(e)}>
  <header className="header_section">
  <nav className="navbar navbar-expand-lg custom_nav-container ">
    <Link className="navbar-brand" to="index.html">
      <span>
        Giftos
      </span>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link   id='sho'  className="nav-link" to="/Shopol">
            Shop
          </Link>

        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Whys">
            Why Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Testnonil">
            Testimonial
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ContacT">Contact Us</Link>
        </li>
      </ul>
      <div className="user_option">
        <Link to>
          <i className="fa fa-user" aria-hidden="true"/>
          <span>
            Login
          </span>
        </Link>
        <Link to>
          <i className="fa fa-shopping-bag" aria-hidden="true" />
        </Link>
        <form className="form-inline ">
          <button className="btn nav_search-btn" type="submit">
            <i className="fa fa-search" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  </nav>
</header></div>

{/* end header section */}

</> 


)
}

export default Header ;