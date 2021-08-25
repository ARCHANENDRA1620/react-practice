import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import LoginForm from '../components/LoginForm';
import {addName,addEmail,addPassword} from '../redux/actions';
import BookANewTrip from '../components/BookANewTrip';
import './Login.css'
function Login(props) {   
    const [activationVar,setActivationVar]=useState(false);
    const [bookNewVar,setBookNewVar]=useState(false);
    const activateLogin=()=>{
        props.history.push('/loginform')
    }
    return (
        <>
            <div className='div-class'>
                {/* <span className='login-button-style' onClick={activateLogin}>Login</span> */}
                <div className='login-header'>
                    <span className='login-header-main'>Adventure</span>
                    <span className='login-header-sub'>is what life wants...</span>                    
                </div>
                <span className='explore' onClick={()=>setBookNewVar(true)}>Explore our packages</span>
            </div>
            {activationVar && <LoginForm/>}
            {bookNewVar && <BookANewTrip/>}
        </>

    )
}

const mapDispatchToProps={
  addEmail,addName,addPassword
}

export default connect(null,mapDispatchToProps)(Login)
