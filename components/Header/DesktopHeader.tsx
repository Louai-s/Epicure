import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TitleDesktop } from '../Body/ChefOfTheWeek/StyleChefDetails';
import { FooterBtn } from '../Footer/StyleFooter'
import BagLogo from './BagLogo';
import LoginLogo from './LoginLogo';
import Logo from './Logo'
import SearchLogo from './SearchLogo';
import { EpicureWordHeader, HeaderD, LeftDesktopDiv, RestaurantWordHeader, RightDesktopDiv, RightGroup } from './StyleHeader'

export default function DesktopHeader() {
    const navigate = useNavigate();
    const NavToAllRestaurants = () => {navigate('/ResponsiveAllRestaurants')}
    const NavToHomePage = () =>{
    navigate('');}
    const [RestaurantsBtnisActive, setRestaurantsBtnActive] = useState(false);

    function MakeRestauranrBtnActive(){
      if(window.location.href == "http://localhost:3000/ResponsiveAllRestaurants"){
        setRestaurantsBtnActive(true);}
        else{
          setRestaurantsBtnActive(false);
        }
      }
      
  return (
    <HeaderD>
        <LeftDesktopDiv>
        <Logo/>
         <EpicureWordHeader onClick={NavToHomePage}>EPICURE</EpicureWordHeader>
         <RestaurantWordHeader underline={RestaurantsBtnisActive} onClick={()=> {NavToAllRestaurants(); MakeRestauranrBtnActive();}}> Restaurants </RestaurantWordHeader>
        <FooterBtn> Chefs </FooterBtn>
        </LeftDesktopDiv>
        <RightDesktopDiv>
            <SearchLogo/>
            <LoginLogo/>
            <BagLogo/>
      </RightDesktopDiv>
    </HeaderD>
        
  )
}
