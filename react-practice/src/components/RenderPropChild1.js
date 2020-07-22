import React from 'react'
import {Button} from 'react-bootstrap'

class RenderPropChild1 extends React.Component
{
  
  render()
  {
    const {count,incrementCount}= this.props       
      return(
          <div>
            <input type='text' value={count} />&nbsp;
            <Button variant='info' onClick={incrementCount} >Click Button</Button>
          </div>
      )
  }

}

export default RenderPropChild1;