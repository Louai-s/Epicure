
import Slider from "react-slick";
import { CarouselDiv, RestaurantDiv, RestaurantImg, RestaurantName, TitlePP } from './StyleChefDetails';
import BtnChefAllRests from './BtnChefAllRests';
import { useSelector } from 'react-redux';


export default function ChefRestaurants()  {
    const restaurants = useSelector((state:any) => state.restaurants.value);
    const chefs = useSelector((state:any) => state.chefs.value);
    const chefOfTheWeek = chefs.filter((chef:any)=>chef.name === "Yossi Shitrit");
    const chefOfTheWeekID = chefOfTheWeek[0]._id;
    const ChefRestaurants = restaurants.filter((re:any)=> re.chef === chefOfTheWeekID )
    
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1.5,
      slidesToScroll: 1
    };
    return (
      <CarouselDiv>
        <TitlePP> Restaurants Of the Chef: </TitlePP>
        <Slider {...settings}>
        {ChefRestaurants.slice(0,3).map((restaurant:any,index:any)=>(
           <RestaurantDiv key={index} Mobile={true}> 
              <RestaurantImg src={restaurant.pictureURL} alt=''/>
              <RestaurantName Mobile={true}> {restaurant.name}</RestaurantName>
            </RestaurantDiv>))}
        </Slider>
        <br/>
        <BtnChefAllRests/>
      </CarouselDiv>
    );
}