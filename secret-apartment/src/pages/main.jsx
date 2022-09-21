import React from 'react'
import Card from './card-main-page'
import Filter from './filter-main-page'
import Listings from './listings-main-page'
import './main.css'

export default function Main() {
  return (
    <center className="Main-Page-Wrapper">
        <Filter/>
        <Card />
        <Listings/>
    </center>
  )
}
