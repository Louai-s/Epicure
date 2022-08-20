
import SetWindowSize from '../../Helpers/SetWindowSize';
import DesktopFooter from './DesktopFooter';
import Footer from './Footer';

export default function ResponsiveFooter() {
    
    const windowSize = SetWindowSize();
  return (
    <div>
        {windowSize < 600 ? <Footer/> : <DesktopFooter/>}
    </div>
  )
}
