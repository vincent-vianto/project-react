import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Nav,Navbar} from 'react-bootstrap'

class Menu extends Component{
    render(){
        return(
            <div style={{margin:"0px"}}>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>
                        <img src="https://www.thestable.com.au/wp-content/uploads/2019/01/BETC-Disneyland-Paris-5.png"
                        alt=""
                        style={{
                            height:"50px",
                            width:"50px",
                            borderRadius:"50%"
                        }}/>
                        <span> Vincent O.V <i>(Job)</i></span>
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/CV" className="nav-link">CV</Link>
                    </Nav>
                </Navbar>
                <br/>   
          </div>
        )
    }
} 

export default Menu