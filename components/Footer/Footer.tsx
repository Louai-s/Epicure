
import ContactUs from "./ContactUs";
import PrivacyPolicy from "./PrivacyPolicy";
import { Footerd} from "./StyleFooter";
import TermsOfUse from "./TermsOfUse";


export default function Footer() {
  return (
    <Footerd>
        <ContactUs/>
        <br/><br/>
        <TermsOfUse/>
        <br/><br/>
        <PrivacyPolicy/>
        <br/><br/>
    </Footerd>
  )
}



  
