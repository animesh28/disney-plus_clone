import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import SliderImg1 from '../assets/images/slider-badag.jpg'
import SliderImg2 from '../assets/images/slider-badging.jpg'
import SliderImg3 from '../assets/images/slider-scale.jpg'
import SliderImg4 from '../assets/images/slider-scales.jpg'

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidestoShow: 1,
        slidestoScroll: 1,
        autoplay: true
    }

    const images = [
        SliderImg1,
        SliderImg2,
        SliderImg3,
        SliderImg4
    ]
    return (
        <div>
            <Carousel {...settings}>
               {
                   images.map((item, i) => 
                       <Wrap key={i}>
                            <a href=''>
                                <img src={item}/>
                            </a>
                       </Wrap>
                   )
               } 
            </Carousel>
        </div>
    )
}

const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 3vw;
        z-index: 1;

        
    }
    &:hover {
        & > button {
            opacity: 1;
            transition: opacity .2s ease 0s;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(158, 158, 171);
        }
    }

    li.slick-active button:before {
        color: #fff;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -65px;
    }

    .slick-next {
        right: -65px;
    }
`

const Wrap = styled.div`
    position: relative;
    border-radius: 4px;
    cursor: pointer;

    a {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        position: relative;
        display: block;
        padding: 4px;

        img {
            width: 100%;
            height: 100%;
        }

        &:hover {
            padding: 0;
            border: 4px solid rgba(249, 249, 249, .8);
            transition-duration: 300ms;
        }
    }
`

export default ImgSlider