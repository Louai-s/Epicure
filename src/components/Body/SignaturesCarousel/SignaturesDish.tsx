
import Slider from 'react-slick';
import { Dishes } from '../../../interfaces/Dish';
import { CarouselDiv, RestaurantDiv, RestaurantImg, RestaurantName, TitlePP } from '../ChefOfTheWeek/StyleChefDetails';
//import { RestChefName } from '../PopularRestaurants/StylePopularRests';
import BtnAllDishes from './BtnAllDishes';
import { DishDescription, PriceP, SignatureLogo } from './StyleDish';
//import './/Slide.css'
    export default function SignaturesDish()  {
        
            const settings = {
              dots: true,
              infinite: false,
              speed: 500,
              slidesToShow: 1.5,
              slidesToScroll: 1
            };
            return (
              <CarouselDiv>
                <TitlePP > Signature Dish Of: </TitlePP>
                <Slider {...settings}>
                {Dishes.slice(0,4).map((Dish,index)=>(
                   <RestaurantDiv key={index} Mobile={true}> 
                      <RestaurantImg src={Dish.PictureURL} alt=''/>
                      <RestaurantName Mobile={true}> {Dish.name}</RestaurantName>
                      <DishDescription>{Dish.Description}</DishDescription>
                      <SignatureLogo Mobile={true} src={Dish.SignatureIcon} alt=''/>
                      <PriceP Mobile={true}>{Dish.Price}₪</PriceP>
                    </RestaurantDiv>))}
                </Slider>
                <br/>
                <BtnAllDishes/>
              </CarouselDiv>
              
            );
        }
