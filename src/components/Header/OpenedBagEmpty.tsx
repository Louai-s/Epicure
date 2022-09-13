import React from 'react'
import { BagPic, EmptyBagText, PopupContent, PopupDiv } from './StyleHeader'


export default function OpenedBagEmpty() {
  return (
    <div>
        <PopupDiv>
            <PopupContent>
            <BagPic src='./assets/BagLogo.svg'/>
            <EmptyBagText> Your Bag is Empty </EmptyBagText>
            </PopupContent>
        </PopupDiv>
    </div>
  )
}
