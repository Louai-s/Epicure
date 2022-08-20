import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TitlePP } from '../ChefOfTheWeek/StyleChefDetails';
import { AllRestsBtn } from './StylePopularRests';

export default function BtnAllRests() {
    const navigate = useNavigate();

    const NavToAllRests = () =>{
        navigate('/ResponsiveAllRestaurants');
    };
  return (
    <div>
       <AllRestsBtn onClick={NavToAllRests}> <TitlePP>All Restaurants &gt;&gt;</TitlePP> </AllRestsBtn>
    </div>
  )
}
