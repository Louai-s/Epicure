import React from 'react'
import { useSelector } from 'react-redux';
import { chefOfTheWeek } from '../../../interfaces/Chef'
import { TitleR } from '../PopularRestaurants/StylePopularRests'
import { RestaurantDiv, RestaurantImg, RestaurantName } from './StyleChefDetails'

export default function ChefAllRestaurants() {
  const restaurants = useSelector((state:any) => state.restaurants.value);
  const chefs = useSelector((state:any) => state.chefs.value);
  const chefOfTheWeek = chefs.filter((chef:any)=>chef.name === "Yossi Shitrit");
  const chefOfTheWeekID = chefOfTheWeek[0]._id;
  const ChefRestaurants = restaurants.filter((re:any)=> re.chef === chefOfTheWeekID )
  
  return (
    <div>
        <TitleR> RESTAURANTS </TitleR>
        {ChefRestaurants.map((restaurant:any)=>(
                          <RestaurantDiv Mobile={true}>
                              <RestaurantImg src={restaurant.pictureURL} alt=''/>
                              <RestaurantName Mobile={false}> {restaurant.name}</RestaurantName>
                          </RestaurantDiv>))}
    </div>
  )
}
