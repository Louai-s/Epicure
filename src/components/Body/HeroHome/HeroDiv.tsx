import React from 'react'
import HeroSearchBar from './HeroSearchBar'
import { ContentAndSearchDiv, HeroContent, Herotext } from './HeroStyle'



export default function HeroDiv() {
  return (
    <HeroContent >
      <ContentAndSearchDiv>
        <Herotext>
            Epicure Works with the top <br/>
            chef restaurants in Tel-Aviv
          <br/>
        </Herotext>
        <HeroSearchBar/>
        </ContentAndSearchDiv>
    </HeroContent>
  )
}
