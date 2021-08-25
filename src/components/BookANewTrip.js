import React from 'react'
import location from '../data/locations.json'
import MenuItem  from './MenuItem'
import './BookANewTrip.css'
function BookANewTrip() {    
    return (
        <div className='book-new-style'>
            {location.map(val=>(        
                <div className='parent-location-styling'>        
                    <MenuItem id={val.id} imageUrl={val.imageUrl} name={val.name}  />                
                </div>
            ))}
        </div>
    )
}

export default BookANewTrip
