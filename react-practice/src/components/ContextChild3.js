import React,{useContext} from 'react'
import { UserContext } from '../../src/App'

function ContextChild3() {

    const userContext=useContext(UserContext)
    return ( 
        <div>
            {/* <h5>Count -{userContext.count}</h5> */}
            <button onClick={userContext.dispatchState('increment')}>Increment counter</button>
            <button onClick={userContext.dispatchState('decrement')}>Decrement counter</button>
            <button onClick={userContext.dispatchState('reset')}>Reset counter</button>
        </div>
    )
}

export default ContextChild3
