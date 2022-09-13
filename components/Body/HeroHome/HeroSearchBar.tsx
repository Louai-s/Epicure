import React from 'react'
import { SearchBar, SearchDiv } from './HeroStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HeroSearchBar() {
  return (
    <div>
        <SearchDiv>
            <SearchBar placeholder=" &#xF002; Search For restaurant cuisine, chef"/>
        </SearchDiv>
        
    </div>
  )
}
