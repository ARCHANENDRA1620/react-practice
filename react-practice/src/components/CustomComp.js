import React,{useState,useEffect} from 'react'
 
const useCustomComp=(lb)=>{
    
    let kgs=0    
    kgs=lb*2.5
    console.log(`value ${kgs}`)
    return kgs
}

export default useCustomComp