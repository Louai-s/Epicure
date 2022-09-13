
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { CarouselDiv, RestaurantDiv, RestaurantImg, RestaurantName, TitlePP } from '../ChefOfTheWeek/StyleChefDetails';
import BtnAllDishes from './BtnAllDishes';
import { DishDescription, PriceP, SignatureLogo } from './StyleDish';

    export default function SignaturesDish()  {
      const dishes = useSelector((state:any) => state.dishes.value);
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
                {dishes.slice(0,4).map((Dish:any,index:any)=>(
                   <RestaurantDiv key={index} Mobile={true}> 
                      <RestaurantImg src={Dish.pictureURL} alt=''/>
                      <RestaurantName Mobile={true}> {Dish.name}</RestaurantName>
                      <DishDescription>{Dish.description}</DishDescription>
                      <SignatureLogo Mobile={true} src={Dish.signatureIcon} alt=''/>
                      <PriceP Mobile={true}>{Dish.price}₪</PriceP>
                    </RestaurantDiv>))}
                </Slider>
                <br/>
                <BtnAllDishes/>
              </CarouselDiv>
              
            );
        }
