
import SetWindowSize from '../../../Helpers/SetWindowSize';
import AllRestaurants from './AllRestaurants';
import DesktopAllRestaurants from './DesktopAllRestaurants';

export default function ResponsiveAllRestaurants() {
    
    const windowSize = SetWindowSize();
  return (
    <div>
         {windowSize < 600 ? <AllRestaurants/> : <DesktopAllRestaurants/>}
    </div>
  )
}
