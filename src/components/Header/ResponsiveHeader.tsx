
import SetWindowSize from '../../Helpers/SetWindowSize';
import DesktopHeader from './DesktopHeader';
import Header from './Header';

export default function ResponsiveHeader() {

    const windowSize = SetWindowSize();
  return (
    <div>
        {windowSize < 600 ? <Header/> : <DesktopHeader/>}
    </div>
  )
}