import React, { useContext } from "react";
import "./NavBar.css";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserDetails } from "../../components/UserDetails/UserDetails";

const NavBar = () => {
  const { firstName } = useContext(UserDetails);

  const Name =  firstName.toUpperCase();

  return (
    <div className="bg-body-navbar" id="nav-1">
      <Navbar expand="lg">
        <Container>
          <Nav.Link as={Link} to="/" className="nav-head">
            <i class="fa-solid fa-school m-2"></i>
            <span className="head-e">E</span>
            du
            <span className="head-t">t</span>
            is
            <span className="head-m">m</span>
          </Nav.Link>
          <Navbar.Toggle className="toggle-icons" />
          <Navbar.Collapse
            className="justify-content-end"
            aria-controls="responsive-navbar-nav"
          >
            <Nav.Link as={Link} to="Home" className="nav-regform">
              <i class="fa-solid fa-house m-2"></i>
              HOME
            </Nav.Link>
            <NavDropdown
              title={<><i className="fa-solid fa-book-open-reader m-2"></i> FUN TESTS & QUIZZES</>}
              id="basic-nav-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="freeiqtest">
                <i class="fa-solid fa-circle-arrow-right m-2"></i>FREE IQ TEST
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="kidsiqtest">
                <i class="fa-solid fa-circle-arrow-right m-2"></i>
                KIDS IQ TEST
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="personalitytest">
                <i class="fa-solid fa-circle-arrow-right m-2"></i>PERSONALITY
                TEST
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="spatialtest">
                <i class="fa-solid fa-circle-arrow-right m-2"></i>SPATIAL IQ
                TEST
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                OTHER IQ TESTS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                SELF-DISCOVER TESTS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                OTHER CARRER TESTS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="myresult" className="nav-regform">
              <i class="fa-solid fa-square-poll-vertical m-2"></i>
              MY RESULT
            </Nav.Link>
            <Nav.Link as={Link} to="support" className="nav-regform">
              <i class="fa-solid fa-life-ring m-2"></i>
              SUPPORT
            </Nav.Link>

            {firstName ? (
              <>
                <NavDropdown
                  title={<>{<i class="fa-solid fa-person m-2"></i>} {Name}</>}
                  id="basic-nav-dropdown"
                  className="nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="logout">
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  to="EdutismRegistration"
                  className="nav-regform"
                >
                  <i class="fa-solid fa-address-card m-2"></i>
                  REGISTER fOR EDUTISM
                </Nav.Link>
                <Nav.Link as={Link} to="signin" className="nav-regform">
                  <i class="fa-solid fa-right-to-bracket m-2"></i>
                  SIGN IN
                </Nav.Link>
              </>
            )}

            <Button type="submit" className="nav-search-icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
