import React from 'react'

const Nav = () => {
    return (
        <nav>
        <div className="nav__bar">
          <div className="logo nav__logo">
            <a href="/" className='logo-name'>Camp<span className='text-[#268B07]'>IN</span></a>
          </div>
          <ul className="nav__links" id="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blogs</a></li>
            <li><a href="#equipment">Products</a></li>
          </ul>
          <div className="nav__menu__btn" id="menu-btn">
            <i className="ri-menu-line"></i>
          </div>
          <div className="nav__action__btn">
            <button className="btn">
              <span><i className="ri-discount-percent-line"></i></span>
              <span>Offers</span>
            </button>
          </div>
        </div>
      </nav>
    )
}

export default Nav