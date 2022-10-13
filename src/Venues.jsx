import { useState, useContext } from 'react'
import {CMSContext} from "./CMSContext"

function Venues() {
  const {venues} = useContext(CMSContext)
    console.log(venues)
  return (
    <div className="Venues">
      {venues.map(v => <li>{v.fields.name} - {v.fields.openingHours}</li>)} 
    </div>
  )
}

export default Venues
