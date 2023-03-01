import React from 'react';
import Slider from 'react-slick';
import '../styles/hero-slider.css';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../styles/find-cars-from.css';

const HeroSlider = () => {
    const settings = {
        fade: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
    };

    return ( <
        Slider {...settings }
        className = "hero__slider" >
        <
        div className = "slider__item slider__item-01 mt-0" >
        <
        Container >
        <
        div className = " slider__content w-50  " >
        <
        h6 className = "text-light mb-3" > Starting From 2 LPA < /h6> <
        h1 className = "text-light mb-4  " > Reserved Now and Get 30 % Off < /h1>

        <
        Button className = "btn reserve__btn mt-4" >
        <
        Link to = "/car-listing/:id" > Reserve Now < /Link> <
        /Button> <
        /div> <
        /Container> <
        /div>

        <
        div className = "slider__item slider__item-02 mt-0" >
        <
        Container >
        <
        div className = " slider__content w-50  " >
        <
        h6 className = "text-light mb-3" > Starting From 2 LPA < /h6> <
        h1 className = "text-light mb-4  " > Reserved Now and Get 30 % Off < /h1>

        <
        Button className = "btn reserve__btn mt-4" >
        <
        Link to = "/car-listing/:id" > Reserve Now < /Link> <
        /Button> <
        /div> <
        /Container> <
        /div>

        <
        div className = "slider__item slider__item-03 mt-0" >
        <
        Container >
        <
        div className = " slider__content w-50  " >
        <
        h6 className = "text-light mb-3" > Starting From 2 LPA < /h6> <
        h1 className = "text-light mb-4  " > Reserved Now and Get 30 % Off < /h1>

        <
        Button className = "btn reserve__btn mt-4" >
        <
        Link to = "/car-listing/:id" > Reserve Now < /Link> <
        /Button> <
        /div> <
        /Container> <
        /div> <
        /Slider>
    );
};

export default HeroSlider;