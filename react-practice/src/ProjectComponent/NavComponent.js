import React from 'react'
import {Button,Navbar,Nav,NavDropdown, FormControl,Form, NavLink} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import '../../src/ProjectComponent/ProjectStyle.css'
import GalleryComp from '../../src/ProjectComponent/GalleryComponent'
import FilterComp from '../../src/ProjectComponent/FilterComponent'
import QueryComp from '../../src/ProjectComponent/QueryComponent'
import '../../src/ProjectComponent/ProjectStyle.css'

const NavComponent=()=>{
    return(
        <React.Fragment>  
            <Router>          
                <Navbar className='nav-style'>
                <Navbar.Brand className='nav-brand'><h3>Maid In India</h3></Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link className='mr-link' href='/'></Nav.Link>
                    <NavDropdown className='mr-link' title='Filter By:'>
                        <NavDropdown.Item>Price</NavDropdown.Item>
                        <NavDropdown.Item>Timings</NavDropdown.Item>
                        <NavDropdown.Item>Language</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className='mr-link' href='/gallery'>Gallery</Nav.Link>
                    <Nav.Link className='mr-link' href='/query'>Create/View query(s)</Nav.Link>
                </Nav>
                <Form>
                <span><FormControl type='text' placeholder='search location...'/></span>
                </Form>
                <Nav>Welcome Archanendra</Nav>
            </Navbar>
            <Switch>
                <Route exact path='/filter' component={FilterComp}/>
                <Route exact path='/gallery' component={GalleryComp}/>
                <Route exact path='/query' component={QueryComp}/>
            </Switch>
            </Router>
        </React.Fragment>
    )
}

export default NavComponent