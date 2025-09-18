import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export class Navigation extends Component{
    render(){
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                <Nav>
                    <Nav.Link className="d-inline p-2 bg-dark text-white" href="/Home">Home</Nav.Link>
                    <Nav.Link className="d-inline p-2 bg-dark text-white" href="/User">User</Nav.Link>
                    <Nav.Link className="d-inline p-2 bg-dark text-white" href="/Role">Role</Nav.Link>

                </Nav>
            </Navbar>
        )
    }
}