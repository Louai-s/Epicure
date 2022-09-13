import React from 'react'
import { chefOfTheWeek } from '../../../interfaces/Chef'
import ChefRestaurants from './ChefRestaurants'
import { ChefDescription, ChefName, PicName, TitleC } from './StyleChefDetails'

export default function ChefDetails() {
  return (
    <div>
      <TitleC Mobile={true}> CHEF OF THE WEEK : </TitleC>
        <PicName Background={chefOfTheWeek.PictureURL}>
          <b><ChefName> {chefOfTheWeek.name}</ChefName></b>
        </PicName> <br/> <br/>
          <ChefDescription Mobile={true}>{chefOfTheWeek.Description}</ChefDescription>
          <ChefRestaurants/>
    </div>

  )
}

