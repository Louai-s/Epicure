import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRestInfo } from '../../Slicers/restMoreInfoSlicer';
import { RestaurantDiv, RestaurantImg, RestaurantName } from '../ChefOfTheWeek/StyleChefDetails'
import { AllRestaurantsContainerMobile, RestaurantStatus, RestChefName, StatusSelector, TitleR } from './StylePopularRests'

export default function AllRestaurants() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const restaurants = useSelector((state:any) => state.restaurants.value);//load restaurants from redux
  const [filteredRestaurants, setFilteredRestaurants] = useState<[]>([]);

  useEffect(()=>{
    filterRests("All");
    setAllIsActive(true);
  }, []);

  const filterRests = (statu: string) => {
    const filtered = restaurants.filter((restaurant:any) => restaurant.status.includes(statu));
    setFilteredRestaurants(filtered);
  }
  
  const OnClickRestaurant = (resID:any) =>{
    dispatch(setRestInfo(resID));
    navigate('/ResponsiveOneRestaurant');
  };

  
  const [allBtnisActive, setAllIsActive] = useState(true);
  const [newBtnisActive, setNewIsActive] = useState(false);
  const [popularBtnisActive, setPopularIsActive] = useState(false);
  const [openBtnisActive, setOpenIsActive] = useState(false);
  
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
        
        {filteredRestaurants.map((restaurant:any,index:any)=>(
            <RestaurantDiv key={index} Mobile={true} onClick={()=> {OnClickRestaurant(restaurant._id)}} >
                <RestaurantImg src={restaurant.pictureURL} alt=''/>
                <RestaurantName Mobile={true}> {restaurant.name}</RestaurantName>
                <RestChefName Mobile={true}>{restaurant.chef}</RestChefName>
            </RestaurantDiv> 
        ))}
                 
    </div>
  )
}
<AllRestaurants/>


