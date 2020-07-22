import React,{useEffect,useState} from 'react'

const UseEffectComp=()=>{

    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const setValues=(e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        window.addEventListener('mousemove',setValues)
    },[x,y])

    return(
        <React.Fragment>
            <h5>{x} {y}</h5>
        </React.Fragment>
    )
}


export default  UseEffectComp