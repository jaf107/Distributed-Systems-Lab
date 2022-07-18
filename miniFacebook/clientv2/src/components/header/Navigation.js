import React, { Component } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
class Navigation extends Component {
    isAuthenticatedUser = () => {
        const { isAuthenticated } = useSelector((state) => state.user.isAuthenticated)
        return isAuthenticated;
    }
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        // this.selector = 
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
    }
    render() {
        // const { isAuthenticated } = useSelector((state) => state.user.isAuthenticated)
        var i = this.isAuthenticatedUser();
        console.log(i);
        return (
            <div>
                <Navbar dark color='dark' expand='sm'>
                    <div className='container'>
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href='/'>miniFacebook</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className='mr-auto' navbar>
                                <NavItem>
                                    <Link to="/" className='nav-link active'>Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/story" className='nav-link '>Story</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/status" className='nav-link'>Status</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/login" className='nav-link'>Login</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/register" className='nav-link'>Register</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}
export default Navigation