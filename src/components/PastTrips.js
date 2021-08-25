import React from 'react'

function PastTrips(props) {
    console.log('value of props',props)
    return (
        <div>
            Welcome to past trips and the id is {props.match.params.id}
            Go to <li></li>
        </div>
    )
}

export default PastTrips
