import React from 'react'
import { TitleC, TitlePP } from '../ChefOfTheWeek/StyleChefDetails'
import { BcPriceRange, InputPriceRange, PriceRangeDiv } from './StylePopularRests'

export default function PriceRange() {
  return (
    <div>
        <PriceRangeDiv>
            <TitleC Mobile={false}>Price Range Selected</TitleC>
            <BcPriceRange>
                <InputPriceRange type="range" />
            </BcPriceRange>
        </PriceRangeDiv>
        
    </div>
  )
}
