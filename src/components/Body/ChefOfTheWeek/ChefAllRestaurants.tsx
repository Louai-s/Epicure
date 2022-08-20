import React from 'react'
import { chefOfTheWeek } from '../../../interfaces/Chef'
import { TitleR } from '../PopularRestaurants/StylePopularRests'
import { RestaurantDiv, RestaurantImg, RestaurantName } from './StyleChefDetails'

export default function ChefAllRestaurants() {
  return (
    <div>
        <TitleR> RESTAURANTS </TitleR>
        {chefOfTheWeek.restaurants.map((restaurant)=>(
                          <RestaurantDiv Mobile={true}>
                              <RestaurantImg src={restaurant.resImgUrl} alt=''/>
                              <RestaurantName Mobile={false}> {restaurant.name}</RestaurantName>
                          </RestaurantDiv>))}
    </div>
  )
}
