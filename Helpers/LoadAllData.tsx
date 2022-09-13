import { useDispatch } from "react-redux";
import { setChefs } from "../components/Slicers/chefsSlicer";
import { setDishes } from "../components/Slicers/dishesSlicer";
import { setRestaurants } from "../components/Slicers/restaurantsSlicer";
import { ChefsURL, DishesURL, RestaurantsURL } from "../Constants/constants";
import FetchAllData from "./FetchAllData";

export async function LoadAllData(){
    const dispatch = useDispatch();
    const AllRestaurants = await FetchAllData(RestaurantsURL);
    dispatch(setRestaurants(AllRestaurants));
    const AllChefs = await FetchAllData(ChefsURL);
    dispatch(setChefs(AllChefs));
    const AllDishes = await FetchAllData(DishesURL);
    dispatch(setDishes(AllDishes));
}