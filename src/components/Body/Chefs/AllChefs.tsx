import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import SetWindowSize from '../../../Helpers/SetWindowSize';
import { Chef } from '../../../interfaces/Chef'
import { ChefName, PicName } from '../ChefOfTheWeek/StyleChefDetails'
import { AllRestaurantsContainerMobile, RestaurantStatus, StatusSelector, TitleR } from '../PopularRestaurants/StylePopularRests';
import { ChefDiv } from './StyleChef';
import 'react-toastify/dist/ReactToastify.css';

export default function AllChefs() {

  const chefs = useSelector((state:any) => state.chefs.value);//load restaurants from redux
  const [filteredChefs, setFilteredChefs] = useState<[]>([]);

  const filterChefs = (status: string) => {
    const filtered = chefs.filter((chef:Chef) => chef.chefStatus.includes(status));
    setFilteredChefs(filtered);
  }

  useEffect(() => {
      filterChefs("All");
      setAllIsActive(true);     
  }, []);


  const [allBtnisActive, setAllIsActive] = useState(true);
  const [newBtnisActive, setNewIsActive] = useState(false);
  const [ViewedBtnisActive, setMostViewedIsActive] = useState(false);

  function MakeAllActive(){
    setAllIsActive(true);
    setNewIsActive(false);
    setMostViewedIsActive(false);
  }

  function MakeNewActive(){
    setAllIsActive(false);
    setNewIsActive(true);
    setMostViewedIsActive(false);
  }

  function MakeMostViewedActive(){
    setAllIsActive(false);
    setNewIsActive(false);
    setMostViewedIsActive(true);
  }
  
    const windowSize = SetWindowSize();
    const [MobileFlag, setMobileFlag] = useState(true);

   useEffect(() => {
        {windowSize < 600 ? setMobileFlag(true) : setMobileFlag(false)};
      }, []);
      
    
  return (
    <div>
        <AllRestaurantsContainerMobile>
            <TitleR> Chefs </TitleR>
            <StatusSelector Mobile={true}>
                <RestaurantStatus underline={allBtnisActive} onClick={() =>{filterChefs("All");
                MakeAllActive()}}> All </RestaurantStatus>

                <RestaurantStatus underline={newBtnisActive}  onClick={() => {filterChefs("New");
                MakeNewActive();}}>New </RestaurantStatus>

                <RestaurantStatus underline={ViewedBtnisActive} onClick={() => {filterChefs("Most Viewed");
                MakeMostViewedActive()}}> Most Viewed </RestaurantStatus>
            </StatusSelector>
        </AllRestaurantsContainerMobile>

        {filteredChefs.map((chef:any,index)=>(
                  <ChefDiv Mobile={MobileFlag} key={index} > 
                      <PicName Background={chef.pictureURL}>
                        <b><ChefName> {chef.name}</ChefName></b>
                        </PicName> <br/> <br/><br/>
                  </ChefDiv>
                  ))}
    </div>
  )
}
