import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

function home(props) {
    console.log('value of props',props)
    return (
        <div className='parent-styling'> 
            <ul className='ui-styling'>
                <li><Link className='link-styling' to='/bookanewtrip'><span className='li-styling'>Book a new trip</span></Link></li>
                <li><Link className='link-styling' to='/gallery'><span className='li-styling'>Gallery</span></Link></li>
                <li><Link className='link-styling' to='/pasttrips/56'><span className='li-styling'>Past trips</span></Link></li>
                <li><Link className='link-styling' to='/shareyourexp'><span className='li-styling'>Share your experience</span></Link></li>
            </ul>
        </div>
    )
}

export default home
