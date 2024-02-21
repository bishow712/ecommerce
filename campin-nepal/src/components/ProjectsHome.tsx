import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import about1 from '../images/home/About-1.png'


const ProjectsHome = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 2,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const products = [
        { image: about1, name: "tent", description: "tent" },
        { image: about1, name: "tent-2", description: "tent-2" },
        { image: about1, name: "tent-2", description: "tent-2" },
        { image: about1, name: "tent-2", description: "tent-2" },
        { image: about1, name: "tent-2", description: "tent-2" },
        { image: about1, name: "tent-2", description: "tent-2" },

    ]

    return (
        <div className='bg-[#1e2d37]'>
            <div className='products__header'>
                <h1 className='products__header-1 text-center'>Our Products</h1>
            </div>

            <div className="viweallprojects__btn">
                <a href="#">
                    View all Products
                    <span><i className="ri-arrow-right-line"></i></span>
                </a>
            </div>

            <div className='flex flex-wrap justify-center p-4'>
                <Carousel
                    className=''
                    partialVisbile
                    swipeable={true}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    itemClass="carousel-items">

                    {products.map((m, index) => (
                        <a key={index} href='#' target='_blank' rel="noreferrer"
                            className="relative isolate h-96 flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-4 pt-40 m-4 hover:scale-110 transition-transform duration-200 ease-in-out">
                            <img src={m.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90"></div>
                            <h3 className="z-10 mt-3 text-3xl font-bold text-[#4FC1E9]">{m.name}</h3>
                            <div className="z-10 overflow-hidden pt-2 text-sm font-bold text-gray-500">{m.description}</div>
                        </a>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default ProjectsHome