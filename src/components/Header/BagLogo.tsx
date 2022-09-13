import React, { useState } from 'react'
import { AllRestsBtn } from '../Body/PopularRestaurants/StylePopularRests';
import OpenedBagEmpty from './OpenedBagEmpty';
import { BagL } from './StyleHeader'

export default function BagLogo() {

  const[EmptyBagOpen,setEmptyBagOpen] = useState(false);
  const OpenEmptyBagPopup = () => {
    setEmptyBagOpen(!EmptyBagOpen);
  }

  return (
    <div>
       <AllRestsBtn onClick={OpenEmptyBagPopup}> <BagL/> 
       {EmptyBagOpen &&(<OpenedBagEmpty/>)}
       </AllRestsBtn>
    </div>
  )
}
