import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ClientsContainer, Heading, Carousel, DisplayCarousel, Img} from './styledComponents';
import {OurClientsDataArray} from '../Data';

const Clients = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500, 
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000, 
        arrows:false, 
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
        
      };
    return(
        <ClientsContainer>
            <Heading>Remarkable People & Companies</Heading>
            <Carousel>
                <Slider {...settings}>
                {
                   OurClientsDataArray.map(({id, img})=>(
                    <DisplayCarousel key={id}>
                        <Img src={img || 'clients-image-logo.jpg'} alt={`${id}-carousel-image`} />
                    </DisplayCarousel>
                   )) 
                }
                </Slider>
            </Carousel>


        </ClientsContainer>

    )
}

export default Clients