import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AllRestsBtn } from '../PopularRestaurants/StylePopularRests'
import { TitlePP } from './StyleChefDetails';

export default function BtnChefAllRests() {
    const navigate = useNavigate();
    const NavToAllRests = () =>{
        navigate('/ChefAllRestaurants');
    };
  return (
    <div>
        <AllRestsBtn onClick={NavToAllRests}> <TitlePP>All Restaurants&gt;&gt;</TitlePP> </AllRestsBtn>
    </div>
  )
}
