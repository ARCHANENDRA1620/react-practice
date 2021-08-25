import React from 'react'
import { withRouter } from 'react-router-dom'
import './MenuItem.css'
function MenuItem({id,imageUrl,name,history}) {    
    return (
        <div key={id} className='parent-menu-styling' >
            <img className='image-menu-styling' src={imageUrl} alt="value" onClick={()=>history.push(`/bookanewtrip/${name}`)} />
            <div className='text-menu-styling'>{name}</div>
        </div>
    )   
}

export default withRouter(MenuItem);
