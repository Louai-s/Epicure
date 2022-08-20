import React from 'react'
import AboutUs from '../Body/AboutUs/AboutUs'
import ChefDetails from '../Body/ChefOfTheWeek/ChefDetails'
import HeroH from '../Body/HeroHome/HeroH'
import RestaurantsInEpicure from '../Body/PopularRestaurants/RestaurantsInEpicure'
import SignatureOfDishes from '../Body/SignatureOfDishes/SignatureOfDishes'
import SignaturesDish from '../Body/SignaturesCarousel/SignaturesDish'



export default function MobileHomePage() {
  return (
    <div>
      <HeroH/>
      <RestaurantsInEpicure/> 
      <SignaturesDish/> 
      <SignatureOfDishes/>
      <ChefDetails/> 
      <AboutUs/>
    </div>
  )
}
