
import { chefOfTheWeek } from '../../../interfaces/Chef'
import Slider from "react-slick";
import { CarouselDiv, RestaurantDiv, RestaurantImg, RestaurantName, TitlePP } from './StyleChefDetails';
import BtnChefAllRests from './BtnChefAllRests';
//import './Slide.css'
export default function ChefRestaurants()  {

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
        {chefOfTheWeek.restaurants.slice(0,3).map((restaurant,index)=>(
           <RestaurantDiv key={index} Mobile={true}> 
              <RestaurantImg src={restaurant.resImgUrl} alt=''/>
              <RestaurantName Mobile={true}> {restaurant.name}</RestaurantName>
            </RestaurantDiv>))}
        </Slider>
        <br/>
        <BtnChefAllRests/>
      </CarouselDiv>
    );
}