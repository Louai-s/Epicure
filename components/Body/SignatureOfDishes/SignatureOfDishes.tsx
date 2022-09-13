import React from 'react'
import { Container, DishType, SpicyLogo, TypeDiv, VeganLogo, VegitarianLogo } from './StyleSignatures'

export default function SignatureOfDishes() {
  return (
    <Container>
       <DishType>SIGNATURE DISH OF: </DishType>
      <br/>
        <TypeDiv Mobile={true}>
            <SpicyLogo Mobile={true}/>
            <DishType>Spicy</DishType>
        </TypeDiv>

        <TypeDiv Mobile={true}>
            <VegitarianLogo Mobile={true}/>
            <DishType>Vegitarian</DishType>
        </TypeDiv>

        <TypeDiv Mobile={true}>
            <VeganLogo Mobile={true}/>
            <DishType>Vegan</DishType>
        </TypeDiv> 

    </Container>


  )
}
