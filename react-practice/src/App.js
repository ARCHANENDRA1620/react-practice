import React,{useContext,useReducer} from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from '../src/ProjectComponent/NavComponent'
import ContextEx from '../src/components/ContextEx'
import UseReducerComp from '../src/components/UseReducerComp'
import ContextChild3 from '../src/components/ContextChild3'
import CustomComp1 from '../src/components/CustomComp1'
import CustomComp2 from '../src/components/CustomComp2'
import UseStateComp from '../src/components/UseStateComp'
import UseEffectComp from '../src/components/UseEffectComp'
import CSSPractice from '../src/css_practice'
import FormComp from '../src/ProjectComponent/FormComponent'
export const UserContext= React.createContext()

function App() {
  // const initialState=0
  // const reducer=(state,action)=>{
  //   switch (action) {
  //     case 'increment':              
  //       return state+1
  //     case 'decrement':
  //       return state-1    
  //     case 'reset':
  //       return initialState
  //   }
  // }

  // const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      
      <FormComp/>
      {/* <CSSPractice/> */}
      {/* <UseStateComp/>
      <UseEffectComp/>
      <CustomComp1/> */}
    </div>
    // <UserContext.Provider value={{countState:count,dispatchState:dispatch}}>
    // <div className="App">
    //   <h4>Count-{count}</h4>
    //   <ContextChild3/>
    // </div>
    // </UserContext.Provider>
    )
}

export default App;
