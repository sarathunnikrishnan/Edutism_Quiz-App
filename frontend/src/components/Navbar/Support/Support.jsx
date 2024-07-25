import React from "react";
import "./Support.css";
import { Container } from "react-bootstrap";

const Support = () => {
  return (
    <div>
      <div className="support-page">
        <Container>
          <h1>Help</h1>
          <hr></hr>
          <h3>Frequently Asked Questions</h3>
          <hr></hr>
          <div className="support-page-box">
            <h4>Premium Free Tests</h4>
            <ul>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                How can I get to my IQ Test results?
              </li>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                How do I get my Personality Test results?
              </li>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                Can I return to an uncompleted IQ Test?
              </li>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>I can't get past
                an ad. How do I get to my results?
              </li>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>I see a blank
                page. How do I continue?
              </li>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                How can I get to my results?
              </li>
            </ul>
            <h4>Kids IQ Test</h4>
            <ul>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                Is the Kids ISIQ Test free?
              </li>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                Why is there a charge for the Kids ISIQ Test?
              </li>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                How is the Kids IQ Test scored?
              </li>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                How do I return to the Kids IQ Test?
              </li>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                Why weren't there over 200 questions in the Kids IQ Test?
              </li>
            </ul>
            <h4>Career Test</h4>
            <ul>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                How do I return to the Career Personality Profile?
              </li>
            </ul>
            <h4>Account</h4>
            <ul>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                How can I delete my account?
              </li>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                Why do I come back to the same page when I click a button?
              </li>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                How can I remove myself from your mailing list?
              </li>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                II lost my password. How can I retrieve it?
              </li>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                What is your phone number? How can I contact you?
              </li>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                Where can I download the latest version of my browser?
              </li>
            </ul>
            <h4>Billing</h4>
            <ul>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                My credit card was declined. Why?
              </li>
              <li>
                <i class="fa-solid fa-hand-point-right m-2"></i>
                What is your Refund Policy?
              </li>
            </ul>
          </div>
          <hr />
          <h3>Need Further Help?</h3>
          <hr />
          <p>
            You can submit a support request if you need further assistance.
            <strong>
              Request Help <i class="fa-solid fa-angle-right"></i>{" "}
            </strong>
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Support;
