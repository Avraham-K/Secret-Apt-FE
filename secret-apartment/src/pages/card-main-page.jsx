import React from 'react'
import './card-main-page.css'

export default function Card({aggResults}) {
  console.log(aggResults)
    
  return (
    <div className="search-params-card">
        <h6>Filtered By: </h6>
        <span> {aggResults?.constructionDate && `construction date: ${aggResults.constructionDate}`} </span>         
        <span> {aggResults?.minPrice && `price-from: ${aggResults.minPrice}`} </span>         
        <span> {aggResults?.minPrice && `price-to: ${aggResults.maxPrice}`} </span>         
        <span> {aggResults?.maxPrice && `parking: ${aggResults.parking}`} </span>         
        <span> {aggResults?.parking && `construction quality: ${aggResults.quality}`} </span>         
        <span> {aggResults?.quality && `rooms: ${aggResults.rooms}`} </span>         
        <span> {aggResults?.rooms && `size: ${aggResults.size}`} </span>         
        <span> {aggResults?.size && `type: ${aggResults.type}`} </span>         
    </div>
  )
}
