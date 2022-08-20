import React from 'react'
import AppleStorebtn from './AppleStorebtn'
import Content from './Content'
import Epicureimg from './Epicureimg'
import GooglePlaybtn from './GooglePlaybtn'
import { AboutUsContainer } from './StyleAbout'

export default function AboutUs() {
  return (
   <AboutUsContainer>
      <Epicureimg/>
      <GooglePlaybtn/>
      <AppleStorebtn/>
      <Content/>
    </AboutUsContainer>

  )
}
