import React, { useState } from 'react'
import { HamburgerBtn } from '../Body/PopularRestaurants/StylePopularRests';
import OpenedHamburger from './OpenedHamburger';
import { Ham, HamDiv } from './StyleHeader'
export default function Hamburger() {

  const[HamburgerOpen,setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
      setHamburgerOpen(!HamburgerOpen);
    }
    
  return (
    <div>
    <HamburgerBtn onClick={toggleHamburger}>
      <HamDiv> 
          <Ham/>
          <Ham/>
          <Ham/>
      </HamDiv>
      {HamburgerOpen &&(<OpenedHamburger/>)}
    </HamburgerBtn>
    </div>
  )
  
}

