import React, { Component } from 'react';
import carouselStyles from '../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
var Carousel = require('react-responsive-carousel').Carousel;


class carousel extends Component {
    render(){
        return(
            <div class={carouselStyles.carousel}>
                <Carousel autoPlay={true} infiniteLoop={true} transitionTime={1000}>
                    <div>
                        <img src={require('../images/carousel/Extinguishers.jpg')} alt={""} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={require('../images/carousel/PpeItems.jpg')} alt={""} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={require('../images/carousel/PpeItems.jpg')} alt={""} />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default carousel;