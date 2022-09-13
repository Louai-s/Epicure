import React from 'react'
import Hamburger from './Hamburger'
import Logo from './Logo'
import SearchLogo from './SearchLogo'
import LoginLogo from './LoginLogo'
import BagLogo from './BagLogo'
import { HeaderD, RightGroup } from './StyleHeader'

export default function Header() {
  return (
  
  <HeaderD>
      <Hamburger/>
      <Logo/>
      <RightGroup>
        <SearchLogo/>
        <LoginLogo/>
        <BagLogo/>
      </RightGroup>
  </HeaderD>
  
  )
}
