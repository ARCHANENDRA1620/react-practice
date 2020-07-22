import React,{useState,useEffect} from 'react'



const UseStateComp=()=>{
    const [name,setName]=useState('')
    return(
        <React.Fragment>
            Welcome {name}
            <input type='text' placeholder='enter your name' onChange={e=>setName(e.target.value)}/>
        </React.Fragment>
    )
}

export default UseStateComp