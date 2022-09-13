
import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurants } from '../components/Slicers/restaurantsSlicer';
import store from '../store';

export default async function FetchAllData( apiRoute:string) {
        let DATA;
        await axios.get(apiRoute).then(response => {DATA = response.data});
        return DATA;
}


