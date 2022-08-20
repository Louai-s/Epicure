
import SetWindowSize from '../../Helpers/SetWindowSize';
import DesktopHomePage from './DesktopHomePage'
import MobileHomePage from './MobileHomePage'

export default function HomePage() {
 
    const windowSize = SetWindowSize();
  return (
    <div>
        {windowSize < 600 ? 
          <MobileHomePage/>
          :
          <DesktopHomePage/>
      }
    </div>
  )
}
