import React from 'react'
import './BookingPage.css'
function BookingPage(props) {
    return (
        <div>
            <div className='location-styling'>Welcome to {props.match.params.location}</div>
            <div className='select-package-styling'>Select package of your choice</div>
            
        </div>
    )
}

export default BookingPage
