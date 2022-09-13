
import { SearchBar } from '../Body/HeroHome/HeroStyle'
import { SearchDiv } from '../HomePage/StyleHomePage'
import { SearchHeader, SearchWordHeader, Ximg } from './StyleHeader'

export default function OpenedSearch() {
    
  return (
    <div>
           <SearchDiv>
           <SearchHeader>
                <Ximg src='./assets/x.svg' alt=''/>
                <SearchWordHeader> Search </SearchWordHeader>
            </SearchHeader>
                <SearchBar placeholder=" &#xF002; Search For restaurant cuisine, chef"/>
                
        </SearchDiv>
    
    </div>
  )
}
