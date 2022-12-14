import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChefAllRestaurants from '../Body/ChefOfTheWeek/ChefAllRestaurants'
import AllChefs from '../Body/Chefs/AllChefs'
import OneRestaurant from '../Body/PopularRestaurants/OneRestaurant'
import ResponsiveAllRestaurants from '../Body/PopularRestaurants/ResponsiveAllRestaurants'
import ResponsiveOneRestaurant from '../Body/PopularRestaurants/ResponsiveOneRestaurant'
import AllDishes from '../Body/SignaturesCarousel/AllDishes'
import ContactUsContent from '../Footer/ContactUsContent'
import PrivacyPolicyContent from '../Footer/PrivacyPolicyContent'
import ResponsiveFooter from '../Footer/ResponsiveFooter'
import TermsOfUseContent from '../Footer/TermsOfUseContent'
import HeaderHamburger from '../Header/HeaderHamburger'
import ResponsiveHeader from '../Header/ResponsiveHeader'
import HomePage from '../HomePage/HomePage'


export default function Layout() {
  const [showResults, setShowResults] = React.useState(true)
  const onClick = () => setShowResults(false);
  return (
    <BrowserRouter>
    <div>
      {showResults?<ResponsiveHeader/>:<HeaderHamburger/>}
    </div>
        <Routes>
            <Route path='' element={<HomePage/>}/>
            <Route path='/ResponsiveAllRestaurants' element={<ResponsiveAllRestaurants/>}/>
            <Route path='/ChefAllRestaurants' element={<ChefAllRestaurants/>}/>
            <Route path='/AllDishes' element={<AllDishes/>}/>
            <Route path='/ContactUsContent' element={<ContactUsContent/>}/>
            <Route path='/TermsOfUseContent' element={<TermsOfUseContent/>}/>
            <Route path='/PrivacyPolicyContent' element={<PrivacyPolicyContent/>}/>
            <Route path='/AllChefs' element={<AllChefs/>}/>
            <Route path='/ResponsiveOneRestaurant' element={<ResponsiveOneRestaurant/>}/>
        </Routes>
        <ResponsiveFooter/>
    </BrowserRouter>
  )
}
