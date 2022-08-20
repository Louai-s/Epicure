import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FooterBtn } from './StyleFooter'

export default function ContactUs() {
  const navigate = useNavigate();

    const NavToContactUs = () =>{
        navigate('/ContactUsContent');
    };
  return (
    <FooterBtn onClick={NavToContactUs}> Contact Us </FooterBtn>
  )
}
