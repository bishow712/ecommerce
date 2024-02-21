import React from 'react'
import Nav from './Nav'

const Header = () => {
    return (
        <header className="header" id="home">
            <Nav />

            <div className="section__container header__container">
                <div className="header__content">
                    <h3 className="section__subheader text-base">Hiking/Camping Accessories in Nepal</h3>
                    <h1 className="section__header">
                        Equip Yourself for Mountain Adventures and Beyond!
                    </h1>
                    <div className="scroll__btn">
                        <a href="#about">
                            Scroll down
                            <span>  <i className="ri-arrow-down-line"></i></span>
                        </a>
                    </div>
                </div>
                <div className="header__socials">
                    <span>Follow us</span>
                    <a href="#"><i className="ri-facebook-box-fill"></i></a>
                    <a href="#"><i className="ri-instagram-line"></i></a>
                    <a href="#"><i className="ri-twitter-x-fill"></i></a>
                    <a href="#"><i className="ri-linkedin-box-fill"></i></a>
                    {/* <a href="#"><i className="ri-mail-send-fill"></i></a> */}
                </div>
            </div>
        </header>
    )
}

export default Header