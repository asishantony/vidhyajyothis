import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {Switch,Route} from 'react-router-dom'
import Collection from './Collection'
import Home from './Home'



function Header() {
    
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home">VidhyaJyothis</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/collection">Collection</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
     
         <Switch>
          <Route path="/collection">
           <Collection />
          </Route>
          <Route path="/home">
           <Home />
          </Route>
          <Route path="/">
           <Home />
          </Route>
        </Switch>
           </div>
    )
}

export default Header;
