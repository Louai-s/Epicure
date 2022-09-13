import React from 'react'
import AppleStorebtn from './AppleStorebtn'
import Content from './Content'
import Epicureimg from './Epicureimg'
import GooglePlaybtn from './GooglePlaybtn'
import { AllComponentsDesktop, EpicureImgDivDesktop, GoogleAndAppleDesktop, LeftSideDesktop } from './StyleAbout'

export default function DesktopAboutUs() {
  return (
    <AllComponentsDesktop>
        <LeftSideDesktop>
            <Content/>
            <GoogleAndAppleDesktop>
                <AppleStorebtn/> {"\u00a0\u00a0"}{"\u00a0\u00a0"}{"\u00a0\u00a0"}
                {"\u00a0\u00a0"}{"\u00a0\u00a0"}
                <GooglePlaybtn/>
            </GoogleAndAppleDesktop>
        </LeftSideDesktop>
        <EpicureImgDivDesktop>
            <Epicureimg/>
        </EpicureImgDivDesktop>
    </AllComponentsDesktop>
  )
}
