import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FooterBtn, FooterElement } from './StyleFooter'


export default function TermsOfUse() {
  const navigate = useNavigate();

    const NavToTermsOfUse = () =>{
        navigate('/TermsOfUseContent');
    };
  return (
        <FooterBtn onClick={NavToTermsOfUse}> Terms of Use </FooterBtn>
  )
}
