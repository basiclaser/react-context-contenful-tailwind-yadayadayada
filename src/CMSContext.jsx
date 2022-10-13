import { createContext, useEffect, useState } from "react";
import { createClient } from "contentful";


export const CMSContext = createContext()

const CMSContextProvider = (props) => {
    const [events, setEvents] = useState([])
    const [venues, setVenues] = useState([])
    const [artists, setArtists] = useState([])
    const [userPreferences, setUserPreferences] = useState({
        search:null
    })

    useEffect(()=> {
        const client = createClient({
            space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
            accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
        });
        // venues
        client.getEntries({
            content_type: "venue",
            order: "sys.createdAt"
            // Order entries by date desc
        }).then(response => setVenues(response.items))
        // events
        client.getEntries({
            content_type: "event",
            order: "sys.createdAt"
            // Order entries by date desc
        }).then(response => setEvents(response.items))
    },[])

    return <CMSContext.Provider
        value={{
            events,
            setEvents,
            venues,
            setVenues,
            artists,
            setArtists,
            userPreferences,
            setUserPreferences
        }}
    >
        {props.children}
    </CMSContext.Provider>
}
export default CMSContextProvider;