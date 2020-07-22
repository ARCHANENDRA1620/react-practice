import React from 'react'
import {Button} from 'react-bootstrap'

class RenderPropChild2 extends React.Component{
    
    render(){
        const {count,incrementCount}=this.props
        return(
            <div>
             <input type='text' value={count}/>&nbsp;
             <Button variant='danger' onClick={incrementCount}>Click another button</Button>
            </div>
        )
    }
}

export default RenderPropChild2;