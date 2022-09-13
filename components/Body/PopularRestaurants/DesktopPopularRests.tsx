import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Allrestaurants } from '../../../interfaces/Restaurant'
import { RestaurantDiv, RestaurantImg, RestaurantName, TitleDesktop, TitlePP } from '../ChefOfTheWeek/StyleChefDetails'
import { DesktopDishesContainer, DesktopRestaurantDiv, PopularResDiv } from '../SignaturesCarousel/StyleDish'
import BtnAllRests from './BtnAllRests'
import { AllRestsBtn, DesktopAllRestsBtn, RestChefName, StarsImg } from './StylePopularRests'

export default function DesktopPopularRests() {
  const navigate = useNavigate();

    const NavToAllRests = () =>{
        navigate('/ResponsiveAllRestaurants');
    };
  return (
    <PopularResDiv>
        <TitleDesktop> POPULAR RESTAURANTS IN EPICURE: </TitleDesktop>
        <DesktopDishesContainer>
            {Allrestaurants.slice(0,3).map((restaurant,index)=>(
                <DesktopRestaurantDiv key={index}> 
                    <RestaurantImg src={restaurant.PictureURL} alt=''/>
                    <RestaurantName Mobile={false}> {restaurant.name}</RestaurantName>
                    <RestChefName Mobile={false}>{restaurant.ChefName}</RestChefName>
                    <StarsImg src={restaurant.stars} alt=''/>
                </DesktopRestaurantDiv>))}
        </DesktopDishesContainer>
        <DesktopAllRestsBtn onClick={NavToAllRests}> <TitlePP>All Restaurants &gt;&gt;</TitlePP> </DesktopAllRestsBtn>
    </PopularResDiv>
  )
}
