import React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import isac from "./home-2.jpg";
import Laptop from "./laptop-half-opendreamstime-1-scaled-600x376.jpg";
import Greaph from './home-graph.jpg'

const Home = () => {
      
  return (
    <div className="home-page">
      <Container>
        <div className="home-header row">
          <div className="row header-image">
          <div className="home-header-left col-12 col-md-6 row">
            <h2>Put Your Mind</h2>
            <h2>To The Test</h2>
            <h3>The World's Leading Online IQ Test.</h3>
            <Nav.Link
              as={Link}
              to="freeiqtest"
              className="home-header-left-button"
            >
              take the test
            </Nav.Link>
          </div>
          <div className="home-header-right col-12 col-md-6 ">
            <img src={isac} alt="none"></img>
          </div>
          </div>
          <div className="center-1 row ">
            <div className="center-1-left col-12 col-md-6 ">
              <img src={Laptop} alt="none"></img>
            </div>
            <div className="center-1-right col-12 col-md-6 ">
              <h4>Why Our IQ Test?</h4>
              <p>
                Our original IQ test is the most scientifically valid free IQ
                test available online today.
              </p>
              <p>
                Previously offered only to corporations, schools, and in
                certified professional applications, the test is now available
                to you. In addition to offering your free general IQ, we offer
                an optional extensive analysis of your score, reporting your
                performance in 13 different areas of intelligence and revealing
                your key cognitive strengths and weaknesses.
              </p>
              <p>
                Developed by PhDs and statistically sound, our free test
                reflects the best research available and can be taken on any
                desktop, laptop, tablet, or phone.
              </p>
              <p>And, it’s fun!</p>
            </div>
          </div>
          <div className="center-2 row">
            <div className="center-2-left col-12 col-md-6">
              <h4>What Is an IQ?</h4>
              <p>An Intelligence Quotient indicates a person’s mental abilities relative to others.
                 Everyone has numerous specific mental abilities, some of which can be 
                 measured accurately and are reliable predictors of academic and financial success.</p>
            </div>
            <div className="center-2-right col-12 col-md-6">
            <img src={Greaph} alt="none"></img>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
