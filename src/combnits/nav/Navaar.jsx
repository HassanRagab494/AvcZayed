import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "../../Assetes/970d4c_3217d05ab1c542b593c7c49bcaa19d9f~mv2.png";
import { NavLink } from "react-router-dom";

const Naavaar = () => {
  return (
    <Navbar expand="lg" className="navs">
      <Container data-aos="fade-down" fluid>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="links me-auto my-2 my-lg-0">
            <Nav.Link as={NavLink} to="/" className='NavLink'>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Task" className='NavLink'>Enter data</Nav.Link>
            <Nav.Link as={NavLink} to="/Today" className='NavLink'>Today's data</Nav.Link>
            <Nav.Link as={NavLink} to="/Tomorrow" className='NavLink'>Tomorrow data</Nav.Link>
            <Nav.Link as={NavLink} to="/Monthly" className='NavLink'>Month data</Nav.Link>
            <Nav.Link as={NavLink} to="/months" className='NavLink'>Trimonthly</Nav.Link>
            <Nav.Link as={NavLink} to="/AllDataPage" className='NavLink'>All</Nav.Link>
            <Nav.Link as={NavLink} to="/last" className='NavLink'>Last year</Nav.Link>
      
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="text-logo" href="#">A V C Zayed</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Naavaar;
