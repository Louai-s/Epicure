import React from 'react'
import { TitleDesktop } from '../ChefOfTheWeek/StyleChefDetails'
import { DesktopIcons, DesktopIconsContainer, DishType, SpicyLogo, TypeDiv, VeganLogo, VegitarianLogo } from './StyleSignatures'

export default function DesktopSignatureDishOf() {
  return (
    <DesktopIconsContainer>
        <br/>
       <TitleDesktop>THE MEANING OF OUR ICONS: </TitleDesktop>
       <DesktopIcons>
        <TypeDiv Mobile={false}>
            <SpicyLogo Mobile={false}/>
            <DishType>Spicy</DishType>
        </TypeDiv>

        <TypeDiv Mobile={false}>
            <VegitarianLogo Mobile={false}/>
            <DishType>Vegitarian</DishType>
        </TypeDiv>

        <TypeDiv Mobile={false}>
            <VeganLogo Mobile={false}/>
            <DishType>Vegan</DishType>
        </TypeDiv> 
        </DesktopIcons>
    </DesktopIconsContainer>

  )
}
