import React from 'react'
import useCustomComp from '../../src/components/CustomComp'
const CustomComp1=()=>{

    let result=useCustomComp(19)

    const setValue=(event)=>{
    }
    return(
        <React.Fragment>

            <h4>{result} </h4>
            <input type='text' onChange={setValue} />
        </React.Fragment>
    )
}

export default CustomComp1