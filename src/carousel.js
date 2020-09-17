import React from "react";
import keyDiff from './Assets/Carousel/keyDiff.svg';
import experts from './Assets/Carousel/experts.svg';
import productReccomend from './Assets/Carousel/productReccomend.svg';
import productInfoAlert from './Assets/Carousel/productInfoAlert.svg';
import product from './Assets/Carousel/product.svg';
import greenwashing from './Assets/Carousel/greenwashing.svg';
import expertGlass from './Assets/Carousel/expertGlass.svg';
import productRanking from './Assets/Carousel/productRanking.svg';
import externalData from './Assets/Carousel/externalData.svg';
import calibrationWeight from './Assets/Carousel/calibrationWeight.svg';
import keyDiff2 from './Assets/Carousel/keyDiff2.svg';
import redBottle from './Assets/Carousel/redBottle.svg';
import userData from './Assets/Carousel/userData.svg';
import bananas from './Assets/Carousel/bananas.svg'
import './CSS/carousel.css';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 9
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 8
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 4
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 3
    }
};

export default () => (
    <Carousel responsive={responsive}
              infinite={true}
              autoPlay={true}
              arrows={false}
              autoPlaySpeed={5000}
              transitionDuration={0}
              customTransition=" 5000ms linear" className="carousel">
        <div><img src={keyDiff} className="keyDiff" alt="keyDiff"/></div>
        <div><img src={experts} className="experts" alt="experts"/></div>
        <div><img src={productReccomend} className="productRecommend" alt="productReccomend"/></div>
        <div><img src={productInfoAlert} className="productInfoAlert" alt="productInfoAlert"/></div>
        <div><img src={product} className="product" alt="product"/></div>
        <div><img src={greenwashing} className="greenwashing" alt="greenwashing"/></div>
        <div><img src={expertGlass} className="expertGlass" alt="expertGlass"/></div>
        <div><img src={productRanking} className="productRanking" alt="productRanking"/></div>
        <div><img src={externalData} className="externalData" alt="externalData"/></div>
        <div><img src={calibrationWeight} className="calibrationWeight" alt="calibrationWeight"/></div>
        <div><img src={keyDiff2} className="keyDiff2" alt="keyDiff2"/></div>
        <div><img src={redBottle} className="redBottle" alt="redBottle"/></div>
        <div><img src={userData} className="userData" alt="userData"/></div>
        <div><img src={bananas} className="bananas" alt="bananas"/></div>
    </Carousel>
);