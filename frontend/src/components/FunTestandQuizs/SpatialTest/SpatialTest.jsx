import React, { useState } from "react";
import "../FreeIqTest/FreeIqTest.css";
import { Container } from "react-bootstrap";
import { SpatialIqTestQuestions } from "../TestQuestions/SpatialIqQuestions";
import Phd from "../_D3CC8665-7AD4-41DC-9147-AB926E097301_.png-removebg-preview.png";

const SpatialTest = () => {
  const spatial = SpatialIqTestQuestions;
  const [showFinalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < spatial.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResult(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResult(false);
  };

  return (
    <div>
      <Container>
        <div className="question-header row">
          <div className="col-12 col-md-9 ">
            <h1>
              <i class="fa-solid fa-clipboard-question m-3"></i>SPATIAL IQ TEST
            </h1>
            <p>
              Spatial intelligence refers to the ability to understand and
              mentally manipulate spatial relationships. Spatial IQ tests assess
              an individual's capacity to visualize and manipulate objects in
              three-dimensional space. These tests often include tasks such as
              mentally rotating objects, solving puzzles, understanding maps,
              and interpreting geometric figures.
            </p>
            <p>
              Performance on spatial IQ tests is often associated with skills in
              fields such as architecture, engineering, mathematics, and the
              sciences. Additionally, spatial intelligence plays a crucial role
              in activities such as navigation, athletics, and artistic
              endeavors like sculpture and design.
            </p>
          </div>
          <div className="col-12 col-md-2 ">
            <img src={Phd} alt="" />
          </div>
        </div>
      </Container>
      <Container>
        {showFinalResult ? (
          <div className="final-result col-12 col-md-12">
            <h1>Final Result</h1>
            <br />
            <h2>
              {score} out of {spatial.length} correct - (
              {(score / spatial.length) * 100})%
            </h2>
            <br />
            <button onClick={() => restartGame()}>Restart Game</button>
          </div>
        ) : (
          <div className="questionbox col-12 col-md-12">
            <h4>Current Score : {score}</h4>
            <h2>
              Question {currentQuestion + 1} out of {spatial.length}
            </h2>
            <br></br>
            <h3>{spatial[currentQuestion].text}</h3>
            <br />
            <ul>
              {spatial[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                    className="col-8 col-md-4 d-inline-block m-2"
                  >
                    <h5>{option.id + 1}</h5>
                    <img
                      alt="options"
                      src={require(`../TestQuestions/Images/${option.imgaes}.gif`)}
                    ></img>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default SpatialTest;
