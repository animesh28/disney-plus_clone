import React, { useEffect } from 'react'
import styled from 'styled-components'
import ViewImg1 from '../assets/images/viewers-disney.png'
import ViewImg2 from '../assets/images/viewers-pixar.png'
import ViewImg3 from '../assets/images/viewers-marvel.png'
import ViewImg4 from '../assets/images/viewers-starwars.png'
import ViewImg5 from '../assets/images/viewers-national.png'
import ViewVid1 from '../assets/videos/disney.mp4'
import ViewVid2 from '../assets/videos/pixar.mp4'
import ViewVid3 from '../assets/videos/marvel.mp4'
import ViewVid4 from '../assets/videos/star-wars.mp4'
import ViewVid5 from '../assets/videos/national-geographic.mp4'

function Viewers() {
    
    const images = [
        {
            img: ViewImg1,
            vid: ViewVid1
        },
        {
            img: ViewImg2,
            vid: ViewVid2
        },
        {
            img: ViewImg3,
            vid: ViewVid3
        },
        {
            img: ViewImg4,
            vid: ViewVid4
        },
        {
            img: ViewImg5,
            vid: ViewVid5
        },
    ]
    return (
    <Container>
        {
            images.map((item,i) => 
                <Wrap key={i}>
                    <img src={item.img}/>
                    <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                        <source src={item.vid}/>
                    </video>
                </Wrap>
            )
        }
    </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;
    border: 3px solid rgba(249, 249, 249, .1);
    background: linear-gradient(to bottom, #141b29, #0c111b 300px);

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        opacity: 1;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;  
    }

    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        opacity: 0;
        z-index: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, .8);

        video {
            opacity: 1;
        }
    }
`

export default Viewers