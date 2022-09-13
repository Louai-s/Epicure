import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RestaurantDiv, RestaurantImg, RestaurantName } from '../ChefOfTheWeek/StyleChefDetails';
import { DishDescription, PriceP } from '../SignaturesCarousel/StyleDish';
import { AllRestaurantsContainerMobile, ClockIcon, RestaurantStatus, RestChefName, StatusSelector } from './StylePopularRests';

export default function OneRestaurant() {
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
    <div>
        <div>
            <RestaurantImg src={OneRestaurant.pictureURL} alt=''/>
            <RestaurantName Mobile={true}> {OneRestaurant.name}</RestaurantName>
            <RestChefName Mobile={true}>{OneRestaurant.chef}</RestChefName>
            <RestaurantName Mobile={true}> <ClockIcon src='./assets/clock-icon 1.svg'></ClockIcon> {RestaurantOpeningStatus}</RestaurantName>
        </div>
        <AllRestaurantsContainerMobile>
          <StatusSelector Mobile={true}>
            <RestaurantStatus underline= {breakfastBtnisActive} onClick={() =>{filterDishes("Breakfast");
             MakeBreakfastActive() }}> Breakfast </RestaurantStatus>

            <RestaurantStatus underline= {launchBtnisActive} onClick={() =>{filterDishes("Launch");
             MakeLaunchActive() }}> Launch </RestaurantStatus>

            <RestaurantStatus underline= {dinnerBtnisActive} onClick={() =>{filterDishes("Dinner");
             MakeDinnerActive() }}> Dinner </RestaurantStatus>
          </StatusSelector>

          {filteredDishes.map((dish:any,index:any)=>(
          <RestaurantDiv key={index} Mobile={true}> 
            <RestaurantImg src={dish.pictureURL} alt=''/>
            <RestaurantName Mobile={true}> {dish.name}</RestaurantName>
            <DishDescription>{dish.description}</DishDescription>
            <PriceP Mobile={true}>{dish.price}₪</PriceP>
          </RestaurantDiv>))}
      </AllRestaurantsContainerMobile>
    </div>
  )
}
