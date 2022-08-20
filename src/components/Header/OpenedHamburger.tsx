
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { FooterBtn, Footerd } from '../Footer/StyleFooter'
import HeaderHamburger from './HeaderHamburger'
import { BigDivHam, Line } from './StyleHeader'

export default function OpenedHamburger() {
  const navigate = useNavigate();
  const NavToAllRestaurants = () => {navigate('/AllRestaurants')}
  return (
    <div>
    <BigDivHam>
        <HeaderHamburger/>
            <Footerd>
                <FooterBtn onClick={NavToAllRestaurants}> Restaurants </FooterBtn>
                <br/><br/>
                <FooterBtn> Chefs </FooterBtn>
                <br/><br/>
                <Line/>
                <br/>
            </Footerd> 
        <br/>
        <Footer/>
    </BigDivHam>
    </div>
  )
}
