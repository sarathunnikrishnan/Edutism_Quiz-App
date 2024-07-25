import React, { useContext } from "react";
import "./MyResult.css";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScoreCard from "./ScoreCard/ScoreCard";
import { UserDetails } from "../../UserDetails/UserDetails";

const MyResult = () => {
  const { firstName } = useContext(UserDetails);
  
  return (
    <div className="result-page">
      <Container>
        <h1>MY TEST RESULTS</h1>
        <hr />
        <h3>Tests Completed or In Progress</h3>
        <hr />
        {firstName ? (
          <ScoreCard />
        ) : (
          <>
            <div className="result-box">
              <h4>You are not signed in.</h4>
              <br />
              <h5>
                Please either{" "}
                <Nav.Link
                  className="result-box-log"
                  as={Link}
                  to="EdutismRegistration"
                >
                  Sign In Your Account
                </Nav.Link>
              </h5>
              <h5>or take a test below to begin</h5>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default MyResult;
