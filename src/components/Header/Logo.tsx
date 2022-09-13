import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AllRestsBtn } from '../Body/PopularRestaurants/StylePopularRests'
import { LogoH } from './StyleHeader'
export default function Logo() {
  const navigate = useNavigate();
    const NavToHomePage = () =>{
          navigate('');}
  return (
    <div>
      <AllRestsBtn onClick={NavToHomePage}> <LogoH/> </AllRestsBtn>
    </div>
  )
}
