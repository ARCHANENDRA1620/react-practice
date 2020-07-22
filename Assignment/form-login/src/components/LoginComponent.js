import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Button,Form,Row,Col,Container} from 'react-bootstrap'

function LoginComponent() {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [number,setNumber]=useState('')
    const [password,setPassword]=useState('')

    let errorValue=''
    let loginValue=''
    let validValue=''
    let credValue=''

    const validateExistingPassword=(event)=>{
        if(event==password)
        {
            errorValue='correct password'
        }
        else
        {
            errorValue='please type the password again'
        }
    }

    const submitForm=(event)=>{
        let user={
            username:name,
            usermail:email,
            usernumber:number,
            userpassword:password
        }
        event.preventDefault()
        const formData=new FormData();
        formData.set('user',user)
        axios({
            method: 'post',
            url: 'https://localhost:9000/crud',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
            })
            .then(function (response) {
                errorValue=''
                validValue=''
                credValue=''
                loginValue='Login successfull..!!!'                
                console.log(response);
            })
            .catch(function (response) {
                validValue=''
                errorValue=''
                credValue='Invalid credentials...!!! Please try again'
                console.log(response);
            });
    }
    const validatePassword=(password)=>{
        setPassword(password)
        let a="123"
        let regex= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]$/
        if(regex.test(a))
        {
            validValue='password follows minimum requirement'
        }
        else
        {
            validValue='password should atleast contain an uppercase letter, a number and a special character'
        }
    }
    return (
        <div>
            <Container>
             <Form >
                <Form.Group>
                    <Row>
                        <Col md={6} style={{textAlign:'right'}}>
                            <Form.Label>Name:</Form.Label>&nbsp;
                        </Col>
                        <Col md={3} style={{textAlign:'left'}}>
                            <Form.Control type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter your name'/>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col md={6} style={{textAlign:'right'}}>
                            <Form.Label>Email:</Form.Label>&nbsp;
                        </Col>
                        <Col md={3} style={{textAlign:'left'}}>
                            <Form.Control type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col md={6} style={{textAlign:'right'}}>
                            <Form.Label>Number:</Form.Label>&nbsp;
                        </Col>
                        <Col md={3} style={{textAlign:'left'}}>
                            <Form.Control type='text' value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='enter your number'/>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                <Row>
                    <Col md={6} style={{textAlign:'right'}}>
                    <Form.Label>Password:</Form.Label>&nbsp;
                    </Col>
                    <Col md={3} style={{textAlign:'left'}}>
                    <Form.Control type='password' value={password} onChange={(e)=>validatePassword(e.target.value)}  placeholder='enter your password'/>
                    </Col>
                    <label>{validValue}</label>
                </Row>
                </Form.Group>
                <Form.Group>
                <Row>
                    <Col md={6} style={{textAlign:'right'}}>
                    <Form.Label>Confirm your password:</Form.Label>&nbsp;
                    </Col>
                    <Col md={3} style={{textAlign:'left'}}>
                    <Form.Control type='password' placeholder='confirm your password' onChange={(e)=>validateExistingPassword(e.target.value)}/>
                    </Col>
                    <label>{errorValue}</label>
                </Row>
                </Form.Group>   
                <Button variant='success' onClick={submitForm}>SUBMIT</Button>
            </Form>
            </Container>
        </div>
    )
}

export default LoginComponent
