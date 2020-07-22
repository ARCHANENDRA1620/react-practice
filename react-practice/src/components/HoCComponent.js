import React,{Component} from 'react'

const HOCComponent=(WrappedComponent)=>{
    class HOCComponent extends Component{        
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
            this.setCount=this.setCount.bind(this)
        }
        setCount=()=>{
            this.setState(
                {count:this.state.count+1}
            )
        }
        
        render(){

        return(
            <div>                
                <WrappedComponent count={this.state.count}  setCount={this.setCount} />
            </div>
        )
        }
    }
   return HOCComponent
}


export default HOCComponent