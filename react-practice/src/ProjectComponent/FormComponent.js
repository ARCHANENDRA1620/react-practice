import React, { Component } from 'react'
import {Form,FormControl,FormLabel, FormGroup } from 'react-bootstrap' 


export class FormComponent extends Component {
    render() {
        return (
            <div>
                <Form style={{'backgroundColor':'purple','color':'#5cdb95','height':'400px','width':'400px'}}>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>&nbsp;
                    <Form.Control type='text' placeholder='enter your name'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>&nbsp;
                    <Form.Control type='text'  placeholder='enter your password'/>
                </Form.Group>
                </Form>
            </div>
        )
    }
}

export default FormComponent
