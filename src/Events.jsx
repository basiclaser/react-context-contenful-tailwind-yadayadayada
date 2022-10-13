import { useState, useContext } from 'react'
import {CMSContext} from "./CMSContext"

function Events() {
  const {events} = useContext(CMSContext)
    console.log(events)
  return (
    <div className="Events">
      {events.map(e => <div className="flex justify-evenly items-center">
        <div>
        <h3 className="text-3xl">{e.fields.name}</h3>
        <img className="w-40" src={e.fields.image.fields.file.url}/>
        </div>
        <div><p>description: {e.fields.description}</p>
        <p>venue: {e.fields.venue.fields.name}</p>

        <iframe 
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${e.fields.trailerUrl.split("/watch?v=")[1]}`}
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
{/* 
        <video width="320" height="240" controls>
            <source src="https://youtu.be/51rqTeFcaTg" type="video/mp4" />
            Your browser does not support the video tag.
        </video> */}
        
        </div>
      </div>)} 
    </div>
  )
}

export default Events