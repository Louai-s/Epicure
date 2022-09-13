import React from 'react'
import { TitleC } from '../ChefOfTheWeek/StyleChefDetails'
import { BcPriceRange, DistanceDiv, InputPriceRange, PriceRangeDiv } from './StylePopularRests'

export default function Distance() {
  return (
    <div>
        <div>
        <DistanceDiv>
            <TitleC Mobile={false}>Distance</TitleC>
            <BcPriceRange>
                <InputPriceRange type="range" />
            </BcPriceRange>
        </DistanceDiv>
        
    </div>
    </div>
  )
}
