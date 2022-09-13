import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import FetchAllData from "./Helpers/FetchAllData";
import { useDispatch } from "react-redux";
import { setRestaurants } from "./components/Slicers/restaurantsSlicer";
import { LoadAllData } from "./Helpers/LoadAllData";

function App() {
  LoadAllData();
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
