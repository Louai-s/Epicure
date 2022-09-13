import React, { useState } from 'react'
import { AllRestsBtn } from '../Body/PopularRestaurants/StylePopularRests';
import OpenedSearch from './OpenedSearch';
import { SearchL } from './StyleHeader'
export default function SearchLogo(){
  const[SearchOpen,setSearchOpen] = useState(false);
  const OpenSearch = () => {
    setSearchOpen(!SearchOpen);
  }
  return (
    <div>
        <AllRestsBtn onClick={OpenSearch}><SearchL/>
        {SearchOpen&&(<OpenedSearch/>)}
        </AllRestsBtn>
    </div>
  )
}
