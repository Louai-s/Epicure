import React, { useEffect, useState } from 'react'
import { Allrestaurants, Restaurant } from '../../../interfaces/Restaurant'
import { RestaurantDiv, RestaurantImg, RestaurantName } from '../ChefOfTheWeek/StyleChefDetails'
import { AllRestaurantsContainerMobile, RestaurantStatus, RestChefName, StatusSelector, TitleR } from './StylePopularRests'

export default function AllRestaurants() {
 
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);
  const [allBtnisActive, setAllIsActive] = useState(true);
  const [newBtnisActive, setNewIsActive] = useState(false);
  const [popularBtnisActive, setPopularIsActive] = useState(false);
  const [openBtnisActive, setOpenIsActive] = useState(false);
  
  const filterRests = (status: string) => {
    const filtered = Allrestaurants.filter(restaurant => restaurant.Status.includes(status));
    setFilteredRestaurants(filtered);
  }

  function MakeAllActive(){
    setAllIsActive(true);
    setNewIsActive(false);
    setPopularIsActive(false);
    setOpenIsActive(false);
  }

  function MakeNewActive(){
    setAllIsActive(false);
    setNewIsActive(true);
    setPopularIsActive(false);
    setOpenIsActive(false);
  }

  function MakePopularActive(){
    setAllIsActive(false);
    setNewIsActive(false);
    setPopularIsActive(true);
    setOpenIsActive(false);
  }

  function MakeOpenActive(){
    setAllIsActive(false);
    setNewIsActive(false);
    setPopularIsActive(false);
    setOpenIsActive(true);
  }
  
  
  useEffect(() => {
    filterRests("All");
    setAllIsActive(true);
  }, []);
      
  return (
    <div>
    <AllRestaurantsContainerMobile>
      
        <TitleR> RESTAURANTS </TitleR>
        
        <StatusSelector Mobile={true}>
            <RestaurantStatus underline={allBtnisActive} onClick={() =>{filterRests("All");
             MakeAllActive() }}> All </RestaurantStatus>

            <RestaurantStatus underline={newBtnisActive}  onClick={() => {filterRests("New");
            MakeNewActive()} }> New </RestaurantStatus>

            <RestaurantStatus underline={popularBtnisActive} onClick={() => {filterRests("Most Popular");
            MakePopularActive()}}> Most Popular </RestaurantStatus>

            <RestaurantStatus underline={openBtnisActive}  onClick={() => {filterRests("Open now");
             MakeOpenActive()}}> Open Now </RestaurantStatus>
        </StatusSelector>
      </AllRestaurantsContainerMobile>
        
        {filteredRestaurants.map((restaurant:Restaurant,index)=>(
                  <RestaurantDiv key={index} Mobile={true} > 
                      <RestaurantImg src={restaurant.PictureURL} alt=''/>
                      <RestaurantName Mobile={true}> {restaurant.name}</RestaurantName>
                      <RestChefName Mobile={true}>{restaurant.ChefName}</RestChefName>
                  </RestaurantDiv>))}
    </div>
  )
}
<AllRestaurants/>


