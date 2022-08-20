import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FooterBtn, FooterElement } from './StyleFooter'

export default function PrivacyPolicy() {
  const navigate = useNavigate();

    const NavToPrivacyPolicy = () =>{
        navigate('/PrivacyPolicyContent');}
  return (

       <FooterBtn onClick={NavToPrivacyPolicy}> Privacy Policy </FooterBtn>
  )
}
