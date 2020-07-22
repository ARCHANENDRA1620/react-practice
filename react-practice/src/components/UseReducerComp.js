import React,{useReducer} from 'react'

function UseReducerComp() {

    const initialState=0
    const reducer=(state,action)=>{
        switch(action){
            case 'increment':
                return state+1
            case 'decrement':
                return state-1
            case 'reset':
                return 0
            default:
                return initialState
        }
    }
    const [count,dispatch]=useReducer(reducer,initialState)

    return (
        <div>
            <h5>Count - {count}</h5>
            <button onClick={()=>dispatch('increment')}>Increment counter</button>
            <button onClick={()=>dispatch('decrement')}>Decrement counter</button>
            <button onClick={()=>dispatch('reset')}>Reset counter</button>
        </div>
    )
}

export default UseReducerComp
