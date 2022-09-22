import React, { useContext, useState } from 'react'
import Card from './card-main-page'
import Filter from './filter-main-page'
import './main.css';
import { GlobalContext } from "../context/global-context";
import ApartmentCardList from '../components/apartmentCardList';
import AutoCompleteInput from "../components/AutoComplete";


export default function Main() {
  const { neighborhoods, setNeighborhoods } = useContext(GlobalContext);
  const [ aggResults, setAggResults ] = useState()
  
  return (
  
    <center className="Main-Page-Wrapper">
        {/* <Card /> */}
        {/* <ApartmentCardList aggResults={aggResults} setAggResults={setAggResults} /> */}
      <div className='neighborhoods-container'>
      <h1 className='neighborhoods-name display-6'>{neighborhoods} Neighborhood</h1>
      <div className='main-page-autoComplete'>
      <AutoCompleteInput />
      </div>
      </div>
        <Filter aggResults={aggResults} setAggResults={setAggResults}/>
    </center>
  )
}

