import React,{useState,useReducer} from 'react'

function MultipleReducerComp() {

    const [name,setName]=useState('')
    const [age,setAge]=useState('')

    const reducer=(state,action)=>{
        switch (action) {
            case 'name 5':
            case 'age 10':
            case 'name five':
            case 'age ten':                                        
            default:
                break;
        }
        
    }

    const [nameVal,dispatch]=useReducer(reducer,initialState)
    const [ageVal,dispatchTwo]=useReducer(reducer,initialState)

    

    return (
        <div>
            <button onClick={()=>dispatch('name 5')}>Click Name one time</button>        
            <button onClick={()=>{dispatch('age 10')}}>Click Age one time</button>        
            <button onClick={()=>dispatchTwo('name five')}>Click Name five time</button>        
            <button onClick={(dispatchTwo('age ten'))}>Click Age five time</button>
        </div>
    )
}

export default MultipleReducerComp
