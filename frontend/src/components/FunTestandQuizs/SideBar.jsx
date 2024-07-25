import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { Nav, Container} from "react-bootstrap";

const SideBar = () => {
  return (
    <div >
      <Nav expand="lg" >
        <Container>
        {/* <Navbar.Toggle />
        <Navbar.Collapse
          className="justify-content-end"
          aria-controls="responsive-navbar-nav"
        > */}
        <h6>FOR FAMILIES AND CARE PROVIDERS</h6>
        <Nav.Link as={Link} to="EdutismRegistration">Edutism Registration</Nav.Link>
        <Nav.Link as={Link} to="HowItWork">How it Work</Nav.Link>
        <Nav.Link as={Link} to="GetInvolved">Get Involved</Nav.Link>
        <Nav.Link as={Link} to="GetInvolved">Get Involved</Nav.Link>
        {/* </Navbar.Collapse> */}
        </Container>
        </Nav>
    </div>
  );
};

export default SideBar;
