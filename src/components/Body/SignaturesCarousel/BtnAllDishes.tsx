import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TitlePP } from '../ChefOfTheWeek/StyleChefDetails';
import { AllRestsBtn } from '../PopularRestaurants/StylePopularRests';

export default function BtnAllDishes() {
    const navigate = useNavigate();

    const NavToAllDishes = () =>{
        navigate('/AllDishes');
    };
  return (
    <div>
       <AllRestsBtn onClick={NavToAllDishes}> <TitlePP>All Dishes &gt;&gt;</TitlePP> </AllRestsBtn>
    </div>
  )
}
