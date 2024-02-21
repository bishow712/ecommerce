import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import about1 from '../images/home/About-1.png'
import about2 from '../images/home/About-2.png'
import about3 from '../images/home/About-3.jpg'
import ProjectsHome from '../components/ProjectsHome'

const Home = () => {
  return (
    <div>
      <Header />

      <section className="about">
        <div className="section__container about__container">
          <div className="about__image about__image-1" id="about">
            <img src={about1} alt="about" />
          </div>
          <div className="about__content about__content-1">
            <h3 className="section__subheader">GET STARTED</h3>
            <h2 className="section__header">Unearth Your Inner Adventurer!</h2>
            <p>
              Whether you're a seasoned outdoor enthusiast or a beginner camper eager to embrace nature, our tailored guide will help you uncover your camping persona. From serene lakeside retreats to rugged mountain expeditions, we've handpicked a selection of camping experiences suited to every adventurer's style. Dive into our curated recommendations, find your perfect camping match, and embark on unforgettable outdoor adventures with confidence.
            </p>
            <div className="about__btn">
              <a href="/">
                Explore Destinations
                <span><i className="ri-arrow-right-line"></i></span>
              </a>
            </div>
          </div>
          <div className="about__image about__image-2" id="equipment">
            <img src={about2} alt="about" />
          </div>
          <div className="about__content about__content-2">
            <h3 className="section__subheader">HIKING ESSENTIALS</h3>
            <h2 className="section__header">Gear Up Right for Your Outdoor Adventure!</h2>
            <p>
              From sturdy tents that withstand the elements to compact cooking sets for gourmet campfire meals, our comprehensive gear guide is your roadmap to selecting the perfect camping essentials. We'll help you navigate the vast array of gear options, ensuring you're fully equipped for a comfortable and memorable outdoor experience. So, pack your bags and hit the trail with confidence, knowing you've got the best gear for your camping adventure!
            </p>
            <div className="about__btn">
              <a href="/">
                Hiking/Camping Accessories
                <span><i className="ri-arrow-right-line"></i></span>
              </a>
            </div>
          </div>
          <div className="about__image about__image-3" id="blog">
            <img src={about3} alt="about" />
          </div>
          <div className="about__content about__content-3">
            <h3 className="section__subheader">CONNECT WITH NATURE</h3>
            <h2 className="section__header">Experience Nature Responsibly!</h2>
            <p>
              Explore our guide to sustainable camping practices and connect with nature in a way that leaves a positive impact. Discover eco-friendly gear, learn Leave No Trace principles, and embark on a journey that respects the environment. Together, let's preserve our outdoor playgrounds for future generations.
            </p>
            <div className="about__btn">
              <a href="/">
                Read our blogs
                <span><i className="ri-arrow-right-line"></i></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProjectsHome />

      <Footer />
    </div>
  )
}

export default Home