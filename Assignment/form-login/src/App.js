import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComp from '../src/components/LoginComponent'
import TitleComp from '../src/components/TitleComponent'

function App() {
  return (
    <div className="App">
      <br/>
     <TitleComp/>
     <br/>
     <LoginComp/>
    </div>
  );
}

export default App;
