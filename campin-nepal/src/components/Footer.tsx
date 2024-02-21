import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logo footer__logo">
            <a href="#">Camp<span className='text-[#268B07]'>IN</span></a>
          </div>
          <p>
            Get Ready to Explore: Your One-Stop Shop for Quality Hiking/Camping Gear and Accessories!
          </p>
        </div>
        <div className="footer__col">
          <h4>More on CampIN</h4>
          <ul className="footer__links">
            <li><a href="#">About CampIN</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Write For Us</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>CampIN Socials</h4>
          <ul className="footer__socials">
            <li><a href="#"><i className="ri-facebook-box-fill"></i> <span className='text-base'>Facebook</span></a></li>
            <li><a href="#"><i className="ri-instagram-line"></i> <span className='text-base'>Instagram </span></a></li>
            <li><a href="#"><i className="ri-twitter-x-fill"></i> <span className='text-base'>Twitter </span></a></li>
            <li><a href="#"><i className="ri-linkedin-box-fill"></i> <span className='text-base'>LinkedIn </span></a></li>
            <li><a href="#"><i className="ri-mail-send-fill"></i> <span className='text-base'>Gmail </span></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer