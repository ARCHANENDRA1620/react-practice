import React from 'react'
import HoCComp from '../../src/components/HoCComponent'

function RenderPropComp(props) {
    return (
        <div>
            <input type='text' value={props.count}/>
            <button onClick={props.setCount} >Click Me!!!</button>
        </div>
    )
}

export default HoCComp(RenderPropComp)
