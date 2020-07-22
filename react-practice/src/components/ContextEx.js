import React,{useState} from 'react'
import ContextChild1 from '../../src/components/ContextChild1'
import ContextChild2 from '../../src/components/ContextChild2'

function ContextEx() {   
    
    const [name, setName] = useState('')
    const captureValue=(event)=>{
        setName(event.target.value)
    }

    return (
        <div>
            <input type='text' value={name} onChange={captureValue} />
          <ContextChild1 name={name} />
          <ContextChild2 name={name} />  
        </div>
    )
}

export default ContextEx
