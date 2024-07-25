import React, { useState } from "react";
import "../FreeIqTest/FreeIqTest.css";
import { Container } from "react-bootstrap";
import { FreeIqTestQuestions } from "../TestQuestions/FreeIqTestQuestions";
import Phd from "../_D3CC8665-7AD4-41DC-9147-AB926E097301_.png-removebg-preview.png";

const FreeIqTest = () => {
  const free = FreeIqTestQuestions;
  const [showFinalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < free.length) {
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
              <i class="fa-solid fa-clipboard-question m-3"></i>FREE IQ TEST
            </h1>
            <p>
              An IQ test is a standardized assessment designed to measure a
              person's cognitive abilities in various areas such as logic,
              reasoning, problem-solving, and verbal comprehension. IQ, or
              Intelligence Quotient, is a numerical score derived from the
              performance on the test, with the average score typically set at
              100. IQ tests are often used in educational and employment
              settings to assess intellectual capabilities, although they have
              been subject to criticism regarding cultural bias and limitations
              in capturing the full spectrum of human intelligence.
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
              {score} out of {free.length} correct - (
              {(score / free.length) * 100})%
            </h2>
            <br />
            <button onClick={() => restartGame()}>Restart Game</button>
          </div>
        ) : (
          <div className="questionbox col-12 col-md-12">
            <h4>Current Score : {score}</h4>
            <h2>
              Question {currentQuestion + 1} out of {free.length}
            </h2>
            <br></br>
            <h3>{free[currentQuestion].text}</h3>
            <br />
            <ul>
              {free[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text}
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

export default FreeIqTest;
