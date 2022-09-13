import React, { useEffect, useState } from 'react'
import { RestaurantImg, RestaurantName } from '../ChefOfTheWeek/StyleChefDetails';
import { DesktopAllRestsContainer, DesktopRestauranDiv, DownArrow, FilterOptionButton, FilterOptions, RestaurantStatus, RestChefName, StarsImg, StatusSelector } from './StylePopularRests';
import PriceRange from './PriceRange';
import Distance from './Distance';
import Rating from './Rating';
import Map from './Map';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRestInfo } from '../../Slicers/restMoreInfoSlicer';

export default function DesktopAllRestaurants() {

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
    const [MapBtnisActive, setMapIsActive] = useState(false);

  function MakeAllActive(){
    setAllIsActive(true);
    setNewIsActive(false);
    setPopularIsActive(false);
    setOpenIsActive(false);
    setMapIsActive(false);
  }

  function MakeNewActive(){
    setAllIsActive(false);
    setNewIsActive(true);
    setPopularIsActive(false);
    setOpenIsActive(false);
    setMapIsActive(false);
  }

  function MakePopularActive(){
    setAllIsActive(false);
    setNewIsActive(false);
    setPopularIsActive(true);
    setOpenIsActive(false);
    setMapIsActive(false);
  }

  function MakeOpenActive(){
    setAllIsActive(false);
    setNewIsActive(false);
    setPopularIsActive(false);
    setOpenIsActive(true);
    setMapIsActive(false);
  }

  function MapViewActive(){
    setAllIsActive(false);
    setNewIsActive(false);
    setPopularIsActive(false);
    setOpenIsActive(false);
    setMapIsActive(true);
  }
  
  const[PriceRangeOpen,setPriceRangeOpen] = useState(false);
    const togglePriceRange = () => {
        setPriceRangeOpen(!PriceRangeOpen);
    }

    const[DistanceOpen,setDistanceOpen] = useState(false);
    const toggleDistance = () => {
        setDistanceOpen(!DistanceOpen);
    }

    const[RatingOpen,setRatingOpen] = useState(false);
    const toggleRating = () => {
        setRatingOpen(!RatingOpen);
    }
  
  return (
    <div>
      
        <StatusSelector Mobile={false}>
            <RestaurantStatus underline={allBtnisActive} onClick={() =>{filterRests("All");
             MakeAllActive() }}> All </RestaurantStatus>

            <RestaurantStatus underline={newBtnisActive}  onClick={() => {filterRests("New");
            MakeNewActive()} }> New </RestaurantStatus>

            <RestaurantStatus underline={popularBtnisActive} onClick={() => {filterRests("Most Popular");
            MakePopularActive()}}> Most Popular </RestaurantStatus>

            <RestaurantStatus underline={openBtnisActive}  onClick={() => {filterRests("Open now");
            MakeOpenActive()}}> Open Now </RestaurantStatus>

            <RestaurantStatus underline={MapBtnisActive}  onClick={() => {filterRests("Map View");
            MapViewActive()}}> Map View </RestaurantStatus>
        </StatusSelector>
        
        <FilterOptions>
            <FilterOptionButton onClick={togglePriceRange}> Price Range <DownArrow/> </FilterOptionButton>
            <FilterOptionButton onClick={toggleDistance}> Distance <DownArrow/> </FilterOptionButton>
            <FilterOptionButton onClick={toggleRating}> Rating <DownArrow/></FilterOptionButton>
        </FilterOptions>
        {PriceRangeOpen &&(<PriceRange/>)}
        {DistanceOpen &&(<Distance/>)}
        {RatingOpen &&(<Rating/>)}
        {MapBtnisActive &&(<Map/>)}
  

        <DesktopAllRestsContainer>
        {filteredRestaurants.map((restaurant:any , index)=>(
                  <DesktopRestauranDiv key={index} onClick={()=> {OnClickRestaurant(restaurant._id)}} > 
                      <RestaurantImg src={restaurant.pictureURL} alt=''/>
                      <RestaurantName Mobile={false}> {restaurant.name}</RestaurantName>
                      <RestChefName Mobile={false}>{restaurant.chef}</RestChefName>
                      <StarsImg src={restaurant.stars} alt=''/>
                  </DesktopRestauranDiv>))}
        </DesktopAllRestsContainer>
        </div>
    
  )
}


