import React from 'react'
import { Dishes } from '../../../interfaces/Dish'
import { RestaurantImg, RestaurantName, TitleDesktop } from '../ChefOfTheWeek/StyleChefDetails'
import { DesktopDishesContainer, DesktopRestaurantDiv, DishDescription, PopularResDiv, PriceP, SignatureLogo } from './StyleDish'

export default function DesktopSignatureDish() {
  return (
    <PopularResDiv>


    <div>
    <TitleDesktop> Signature Dish Of: </TitleDesktop>
    </div>
    <DesktopDishesContainer>
        {Dishes.slice(0,3).map((Dish,index)=>{ 
            if(index === 1){
            return (<DesktopRestaurantDiv key={index}>
                        <RestaurantImg src={Dish.PictureURL} alt=''/>
                        <RestaurantName Mobile={false}> {Dish.name}</RestaurantName>
                        <DishDescription>{Dish.Description}</DishDescription>
                        <PriceP Mobile={false}>---------{Dish.Price}₪---------</PriceP>
                    </DesktopRestaurantDiv>)
        }
        return(
                   <DesktopRestaurantDiv key={index}> 
                        <RestaurantImg src={Dish.PictureURL} alt=''/>
                        <RestaurantName Mobile={false}> {Dish.name}</RestaurantName>
                        <DishDescription>{Dish.Description}</DishDescription>
                        <SignatureLogo Mobile={false} src={Dish.SignatureIcon} alt=''/>
                    </DesktopRestaurantDiv>)})}
    </DesktopDishesContainer>
    </PopularResDiv>
  );
}
