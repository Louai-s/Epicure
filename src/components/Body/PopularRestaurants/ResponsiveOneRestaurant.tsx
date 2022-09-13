import React from 'react'
import SetWindowSize from '../../../Helpers/SetWindowSize';
import DesktopOneRestaurant from './DesktopOneRestaurant';
import OneRestaurant from './OneRestaurant';

export default function ResponsiveOneRestaurant() {
    const windowSize = SetWindowSize();
    return (
      <div>
           {windowSize < 600 ? <OneRestaurant/> : <DesktopOneRestaurant/>}
      </div>
  )
}
