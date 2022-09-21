import React, { useContext, useState } from 'react'
import Card from './card-main-page'
import Filter from './filter-main-page'
import Listings from './listings-main-page'
import './main.css';
import { GlobalContext } from "../context/global-context";
import ApartmentCardList from '../components/apartmentCardList';


export default function Main() {
  const { neighborhoods, setNeighborhoods } = useContext(GlobalContext);
  const [ aggResults, setAggResults ] = useState()
  
  return (
    <center className="Main-Page-Wrapper">
        <Filter/>
        <Card />
        <ApartmentCardList />
    </center>
  )
}

