import React from 'react'
import { chefOfTheWeek } from '../../../interfaces/Chef'
import { ChefDescription, ChefName, DesktopChefDetails, DesktopPicNameDiv, PicName, RestaurantDiv, RestaurantImg, RestaurantName, RestsDiv, TitleDesktop, TitlePP } from './StyleChefDetails'

export default function DesktopChefOfTheWeek() {
  return (
        <div>
        
            <TitleDesktop> CHEF OF THE WEEK : </TitleDesktop>
        <DesktopChefDetails>
            <DesktopPicNameDiv>
                <PicName>
                <b><ChefName> {chefOfTheWeek.name}</ChefName></b>
                </PicName> <br/> <br/>
            </DesktopPicNameDiv>
            <ChefDescription Mobile={false}>{chefOfTheWeek.Description}</ChefDescription>
        </DesktopChefDetails>
        <TitlePP> Yossi's Restaurants </TitlePP>

        <RestsDiv>
        {chefOfTheWeek.restaurants.slice(0,3).map((restaurant,index)=>(
           <RestaurantDiv key={index} Mobile = {false}> 
              <RestaurantImg src={restaurant.resImgUrl} alt=''/>
              <RestaurantName Mobile={false}> {restaurant.name}</RestaurantName>
            </RestaurantDiv>))}
        </RestsDiv>
        </div>
    );
}