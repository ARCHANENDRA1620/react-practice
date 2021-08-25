import React from 'react'
import {connect} from 'react-redux';
function welcome(props) {
    return (
        <div>
            Welcome <strong>{props.name}</strong>
        </div>
    )
}

const mapStateToProps=state=>({
    name:state.name,
    email:state.email,
    password:state.password
})

export default connect(mapStateToProps)(welcome)
