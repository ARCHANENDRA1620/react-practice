import React,{Component} from 'react'
import ContextChild3 from '../../src/components/ContextChild3.js'
class ContextChild2 extends Component{

    constructor(props) {
        super(props)            
    }
    
    render(){
        return(
            <div>
                Welcome {this.props.name}
            </div>
        )
    }
} 

export default ContextChild2