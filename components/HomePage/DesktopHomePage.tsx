import React from 'react'
import DesktopAboutUs from '../Body/AboutUs/DesktopAboutUs'
import DesktopChefOfTheWeek from '../Body/ChefOfTheWeek/DesktopChefOfTheWeek'
import HeroH from '../Body/HeroHome/HeroH'
import DesktopPopularRests from '../Body/PopularRestaurants/DesktopPopularRests'
import DesktopSignatureDishOf from '../Body/SignatureOfDishes/DesktopSignatureDishOf'
import DesktopSignatureDish from '../Body/SignaturesCarousel/DesktopSignatureDish'


export default function DesktopHomePage() {
  return (
    <div>
      <HeroH/>
      <DesktopPopularRests/>
      <DesktopSignatureDish/>
      <DesktopSignatureDishOf/>
      <DesktopChefOfTheWeek/>
        <DesktopAboutUs/>
    </div>
  )
}
