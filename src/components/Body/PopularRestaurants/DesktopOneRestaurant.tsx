import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RestaurantDiv, RestaurantImg, RestaurantName } from '../ChefOfTheWeek/StyleChefDetails';
import { DishDescription, PriceP } from '../SignaturesCarousel/StyleDish';
import { ClockIcon, DesktopAllRestsContainer, DesktopChefName, DesktopOneDish, DesktopOneResImg, DesktopOneRestContainer, RestaurantMoreInfoDiv, RestaurantStatus, RestChefName, StatusSelector } from './StylePopularRests';

export default function DesktopOneRestaurant() {
    const AllRestaurants = useSelector((state:any) => state.restaurants.value);
    const restaurantID = useSelector((state:any) => state.restmoreinfo.value);
    const Dishes = useSelector((state:any) => state.dishes.value);
    const OneRestaurant = AllRestaurants.filter((restaurant:any) => restaurant._id===(restaurantID))[0]

    var today = new Date(),
    time = today.getHours();
    var openingTime = OneRestaurant.openingHours[0];
    const openingHour = openingTime.split(":")[0];
    var closingTime = OneRestaurant.openingHours[1];
    const closingHour = closingTime.split(":")[0];
    console.log(time,openingHour,closingHour);
    const [RestaurantOpeningStatus,setRestaurantStatus] = useState("");

    useEffect(()=>{
      if(time > Number(openingHour) && time < Number(closingHour)){
        setRestaurantStatus("Open Now");}
      else{
        setRestaurantStatus("Closed");
      }
      filterDishes("Breakfast");
      setbreakfastBtnisActive(true);
  }, []);


    function dishesArray(resID:string){
      return Dishes.filter((dish:any) => dish.restaurant===(resID));
    }
    const RestaurantDishes = dishesArray(OneRestaurant._id);
    const [filteredDishes, setFilteredDishes] = useState<[]>([]);

    const filterDishes = (type: string) => {
      const filtered = RestaurantDishes.filter((dish:any) => dish.dishType === type);
      setFilteredDishes(filtered);
    }

  const [breakfastBtnisActive, setbreakfastBtnisActive] = useState(true);
  const [launchBtnisActive, setlaunchBtnisActive] = useState(false);
  const [dinnerBtnisActive, setdinnerBtnisActive] = useState(false);
  
  function MakeBreakfastActive(){
    setbreakfastBtnisActive(true);
    setlaunchBtnisActive(false);
    setdinnerBtnisActive(false);
  }

  function MakeLaunchActive(){
    setbreakfastBtnisActive(false);
    setlaunchBtnisActive(true);
    setdinnerBtnisActive(false);
  }

  function MakeDinnerActive(){
    setbreakfastBtnisActive(false);
    setlaunchBtnisActive(false);
    setdinnerBtnisActive(true);
  }

  return (
    <DesktopOneRestContainer>
         <RestaurantMoreInfoDiv>
            <DesktopOneResImg src={OneRestaurant.pictureURL} alt=''/>
            <RestaurantName Mobile={false}> {OneRestaurant.name}</RestaurantName>
            <DesktopChefName>{OneRestaurant.chef}</DesktopChefName>
            <RestaurantName Mobile={false}> <ClockIcon src='./assets/clock-icon 1.svg'></ClockIcon> {RestaurantOpeningStatus}</RestaurantName>
        </RestaurantMoreInfoDiv>
        <StatusSelector Mobile={false}>
            <RestaurantStatus underline= {breakfastBtnisActive} onClick={() =>{filterDishes("Breakfast");
             MakeBreakfastActive() }}> Breakfast </RestaurantStatus>

            <RestaurantStatus underline= {launchBtnisActive} onClick={() =>{filterDishes("Launch");
             MakeLaunchActive() }}> Launch </RestaurantStatus>

            <RestaurantStatus underline= {dinnerBtnisActive} onClick={() =>{filterDishes("Dinner");
             MakeDinnerActive() }}> Dinner </RestaurantStatus>
          </StatusSelector>
          
          <DesktopOneDish>
            {filteredDishes.map((dish:any,index:any)=>(
            <RestaurantDiv key={index} Mobile={false}> 
              <RestaurantImg src={dish.pictureURL} alt=''/>
              <RestaurantName Mobile={false}> {dish.name}</RestaurantName>
              <DishDescription>{dish.description}</DishDescription>
              <PriceP Mobile={false}>{dish.price}₪</PriceP>
            </RestaurantDiv>))}
          </DesktopOneDish>
    </DesktopOneRestContainer>
    
  )
}
