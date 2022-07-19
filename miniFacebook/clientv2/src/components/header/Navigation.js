import React, { Component } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
const mapStateToProps = state => {
    return {
        isAuthenticated: state.user.isAuthenticated,
        // orderLoading: state.orderLoading,
        // orderErr: state.orderErr,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchOrders: () => dispatch(fetchOrders()),
    }
}
class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }

    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
    }
    render() {
        // console.log(this.props.isAuthenticated)
        let routes = null;
        if (this.props.isAuthenticated === true) {
            routes = (
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
                        <Link to="/dashboard" className='nav-link'>Dashboard</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/logout" className='nav-link'>Logout</Link>
                    </NavItem>
                </Nav>
            )
        } else {
            routes = (
                <Nav className='mr-auto' navbar>
                    <NavItem>
                        <Link to="/" className='nav-link active'>Home</Link>
                    </NavItem>

                    <NavItem>
                        <Link to="/login" className='nav-link'>Login</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/register" className='nav-link'>Register</Link>
                    </NavItem>
                    
                </Nav>
            )
        }
        return (
            <div>
                <Navbar dark color='dark' expand='sm'>
                    <div className='container'>
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href='/'>miniFacebook</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            {routes}
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation)