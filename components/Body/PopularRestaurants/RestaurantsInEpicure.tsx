//import React, { Component } from 'react'
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { CarouselDiv, RestaurantDiv, RestaurantImg, RestaurantName, TitlePP } from '../ChefOfTheWeek/StyleChefDetails';
import BtnAllRests from './BtnAllRests';
import { RestChefName } from './StylePopularRests';


        
    export default function RestaurantsInEpicure ()  {
        
      const restaurants = useSelector((state:any) => state.restaurants.value);
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
                {restaurants.slice(0,4).map((restaurant:any,index:any)=>(
                   <RestaurantDiv key={index} Mobile={true}> 
                      <RestaurantImg src={restaurant.pictureURL} alt=''/>
                      <RestaurantName Mobile={true}> {restaurant.name}</RestaurantName>
                      <RestChefName Mobile={true}>{restaurant.chef}</RestChefName>
                    </RestaurantDiv>))}
                </Slider>
                <br/>
                <BtnAllRests/>
              </CarouselDiv>
            );
          }
        
