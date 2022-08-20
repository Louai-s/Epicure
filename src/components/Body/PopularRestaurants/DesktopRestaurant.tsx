import React from 'react'
import { Allrestaurants } from '../../../interfaces/Restaurant'

// *********************************** לא לבדוק ***********************************

export default function DesktopRestaurant({parentToChild}:any) {
    console.log(parentToChild)
    const f = Allrestaurants.filter(res => parentToChild === res.name);
  return (
    <div>
        {f.map(res=> 
        <div>
            <img src={res.PictureURL} alt=''/>
            <p> {res.name} </p>
            <p> {res.Status} </p>
            </div>
            )}
    </div>
  )
}

// *********************************** לא לבדוק ***********************************