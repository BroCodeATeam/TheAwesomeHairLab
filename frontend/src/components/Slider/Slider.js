import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

import Slide1 from '../../images/slide-1.jpg'
import Slide2 from '../../images/slide-2.jpg'
import Slide3 from '../../images/slide-3.jpg'

import './Slider.css'
import '@splidejs/react-splide/css'

export default function Slider() {

    return (
        <Splide
            aria-label="My Favorite Images"
            options={ {
                type         : 'loop',
                autoplay     : true,
                pauseOnHover : true,
                resetProgress: false,
                margin       : '0',
            } } >
            <SplideSlide>
                <img className='splide_slide' src={Slide1} alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
                <img className='splide_slide' src={Slide2} alt="Image 2"/>
            </SplideSlide>
            <SplideSlide>
                <img className='splide_slide' src={Slide3} alt="Image 3"/>
            </SplideSlide>
        </Splide>
    );
};