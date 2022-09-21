import React, { useContext } from 'react'
import Card from './card-main-page'
import Filter from './filter-main-page'
import Listings from './listings-main-page'
import './main.css';
import { GlobalContext } from "../context/global-context";


export default function Main() {
  const { neighborhoods, setNeighborhoods } = useContext(GlobalContext);

  return (
    <center className="Main-Page-Wrapper">
        <Filter/>
        {/* <Card /> */}
        <Listings/>
    </center>
  )
}

