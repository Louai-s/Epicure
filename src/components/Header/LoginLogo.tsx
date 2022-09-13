import React, { useState } from 'react'
import OpenedSignIn from './OpenedSignIn';
import { LoginL } from './StyleHeader'

export default function LoginLogo() {
  const[SignInOpen,setSignInOpen] = useState(false);
  const toggleSignIn = () => {
      setSignInOpen(!SignInOpen);
    }
  return (
    <div>
        <LoginL onClick={toggleSignIn}/>
        {SignInOpen &&(<OpenedSignIn/>)}
    </div>
  ) 
}
