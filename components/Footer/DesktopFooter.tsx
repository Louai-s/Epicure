import React from 'react'
import ContactUs from './ContactUs'
import PrivacyPolicy from './PrivacyPolicy'
import { DesktopFo } from './StyleFooter'
import TermsOfUse from './TermsOfUse'

export default function DesktopFooter() {
  return (
    <DesktopFo>
        <ContactUs/> <TermsOfUse/> <PrivacyPolicy/>
    </DesktopFo>
  )
}
