import React,{useState,useRef} from 'react'
function LoginForm(props) {    
    const nameRef=useRef(null);
    const [nameVal,setNameVal]=useState("")
    const [passwordVal,setPasswordVal]=useState("")
    const [emailVal,setEmailVal]=useState("")
    const [nameValError,setNameValError]=useState("")
    const [emailValError,setEmailValError]=useState("")
    const [passwordValError,setPasswordValError]=useState("")
    const validateValues=(event)=>{
    event.preventDefault();
    props.addName(nameVal)
    props.addPassword(passwordVal)
    props.addEmail(emailVal)
    if(nameVal==="")
    {
        setNameValError("please enter the name value")
    }          
    else if(passwordVal==="")
    {
        setPasswordValError("please enter the password value")
    }
    else if(emailVal==="")
    {
        setEmailValError("please enter the email value")
    }   
    else
    {
        props.history.push('/home')
    }     
}
    return (
        <div>
           <form className='form-class'>
                <div>
                    <label className='login-label'>Name:</label><input type='text' ref={nameRef} name={nameVal} value={nameVal} onChange={(e)=>setNameVal(e.target.value)} />
                    <span style={{color:'red'}}>{nameValError}</span>
                </div>
                <div>
                    <label className='login-label'>Password:</label><input type='text' name={passwordVal}  value={passwordVal} onChange={(e)=>setPasswordVal(e.target.value)} />
                    <span style={{color:'red'}}>{passwordValError}</span>
                </div>
                <div>
                    <label className='login-label'>Email:</label><input type='text' name={emailVal} value={emailVal} onChange={(e)=>setEmailVal(e.target.value)} />
                    <span style={{color:'red'}}>{emailValError}</span>
                </div>
                <button type='submit' onClick={validateValues} >LOGIN</button>
            </form>           
 
        </div>
    )
}

export default LoginForm
