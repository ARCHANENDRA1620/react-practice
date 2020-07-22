import React,{Component} from 'react'
import ContextChild2 from '../../src/components/ContextChild2.js'
class ContextChild1 extends Component
{
    constructor(props) {
        super(props)        
    }
    
    render()
    {        
        return(     
            <div>                   
            Welcome {this.props.name}
            </div>         
        )
    }
   
}

export default ContextChild1