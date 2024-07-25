import React, { useState } from "react";
import "../FreeIqTest/FreeIqTest.css";
import { Container } from "react-bootstrap";
import { PersonalityTestQuestions } from "../TestQuestions/PersonalityTestQuestions";
import Phd from "../_D3CC8665-7AD4-41DC-9147-AB926E097301_.png-removebg-preview.png";

const PersonalityTest = () => {
  const personality = PersonalityTestQuestions;
  const [showFinalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + isCorrect);
    }
    console.log(isCorrect);
    if (currentQuestion + 1 < personality.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResult(true);
    }
  };

  const PersonalityResult = ({ result }) => {
    if (result >= 150 && result < 239) {
      return <h2>YOU ARE A VERY KIND PERSON!</h2>;
    } else if (result >= 240 && result < 340) {
      return <h2>YOU ARE SUPER SMART!</h2>;
    } else if (result >= 340 && result < 430) {
      return <h2>YOU ARE HILARIOUS!</h2>;
    } else if (result >= 430 && result < 510) {
      return <h2>YOU ARE HILARIOUS!</h2>;
    } else if (result >= 510) {
      return <h2>YOU ARE INDIPENDENT PERSON!</h2>;
    } else {
      return <h2>Failed</h2>;
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
              <i class="fa-solid fa-clipboard-question m-3"></i>PERSONALITY IQ
              TEST
            </h1>
            <p>
              A personality test is a psychological assessment tool designed to
              measure individual traits, characteristics, and behavioral
              tendencies. These tests typically employ questionnaires or other
              methods to evaluate aspects such as extraversion, agreeableness,
              conscientiousness, emotional stability, and openness to
              experience, among others. Personality tests are widely used in
              various contexts, including clinical psychology, career
              counseling, and organizational psychology. They can provide
              valuable insights into an individual's personality profile,
              preferences, and potential areas for personal or professional
              development. However, it's important to interpret the results of
              personality tests with caution, as they may not capture the full
              complexity of an individual's personality and can be influenced by
              factors such as mood, context, and response biases.
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
            <h2>Your Score is {score}</h2>
            <br />
            <>
              <PersonalityResult result={score} />
            </>

            <br />
            <button onClick={() => restartGame()}>Restart Game</button>
          </div>
        ) : (
          <div className="questionbox col-12 col-md-12">
            <h4>Current Score : {score}</h4>
            <h2>
              Question {currentQuestion + 1} out of {personality.length}
            </h2>
            <br></br>
            <h3>{personality[currentQuestion].text}</h3>
            <br />
            <ul>
              {personality[currentQuestion].options.map((option) => {
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

export default PersonalityTest;
