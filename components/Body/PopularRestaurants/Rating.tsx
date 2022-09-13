import React from 'react'
import { TitleC } from '../ChefOfTheWeek/StyleChefDetails'
import { CheckboxRating, RatingDiv, RatingImg, RowDiv } from './StylePopularRests'

export default function Rating() {
  return (
    <div>
        <RatingDiv>
            <TitleC Mobile={false}>Rating</TitleC>
            <RowDiv> <CheckboxRating type="checkbox"/> <RatingImg src='./assets/1Star.svg'/> </RowDiv>
            <RowDiv> <CheckboxRating type="checkbox"/> <RatingImg src='./assets/2Stars.svg'/></RowDiv>
            <RowDiv> <CheckboxRating type="checkbox"/> <RatingImg src='./assets/3Stars.svg'/></RowDiv>
            <RowDiv> <CheckboxRating type="checkbox"/> <RatingImg src='./assets/4Stars.svg'/></RowDiv>
            <RowDiv> <CheckboxRating type="checkbox"/> <RatingImg src='./assets/5Stars.svg'/></RowDiv>
        </RatingDiv>
    </div>
  )
}
