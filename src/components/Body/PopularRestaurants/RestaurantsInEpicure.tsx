//import React, { Component } from 'react'
import Slider from 'react-slick';
import { Allrestaurants } from '../../../interfaces/Restaurant';
import { CarouselDiv, RestaurantDiv, RestaurantImg, RestaurantName, TitlePP } from '../ChefOfTheWeek/StyleChefDetails';
import BtnAllRests from './BtnAllRests';
import { RestChefName } from './StylePopularRests';


        
    export default function RestaurantsInEpicure ()  {
        
        
            const settings = {
              dots: true,
              infinite: false,
              speed: 500,
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
            return (
              <CarouselDiv>
                <TitlePP> POPULAR RESTAURANTS IN EPICURE: </TitlePP>
                <Slider {...settings}>
                {Allrestaurants.slice(0,4).map((restaurant,index)=>(
                   <RestaurantDiv key={index} Mobile={true}> 
                      <RestaurantImg src={restaurant.PictureURL} alt=''/>
                      <RestaurantName Mobile={true}> {restaurant.name}</RestaurantName>
                      <RestChefName Mobile={true}>{restaurant.ChefName}</RestChefName>
                    </RestaurantDiv>))}
                </Slider>
                <br/>
                <BtnAllRests/>
              </CarouselDiv>
            );
          }
        
