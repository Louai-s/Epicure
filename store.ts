import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './components/Slicers/restaurantsSlicer';
import chefsReducer from './components/Slicers/chefsSlicer';
import dishesReducer from './components/Slicers/dishesSlicer';
import restMoreInfoReducer from './components/Slicers/restMoreInfoSlicer';
// const serviceApi = createServiceApi('/some/url');

export default configureStore({
  reducer: {
      restaurants: restaurantsReducer,
      chefs: chefsReducer,
      dishes: dishesReducer,
      restmoreinfo: restMoreInfoReducer,
  },
  // middleware: getDefaultMiddleware =>
  // getDefaultMiddleware()
})

