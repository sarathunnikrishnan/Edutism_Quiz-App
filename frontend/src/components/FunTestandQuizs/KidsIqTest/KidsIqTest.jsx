import React, { useState } from "react";
import "../FreeIqTest/FreeIqTest.css";
import { Container } from "react-bootstrap";
import { KidsIqTestQuestions } from "../TestQuestions/KidsIqTestQuestions";
import Phd from "../_D3CC8665-7AD4-41DC-9147-AB926E097301_.png-removebg-preview.png";

const KidsIqTest = () => {
  const kids = KidsIqTestQuestions;
  const [showFinalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < kids.length) {
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
              <i class="fa-solid fa-clipboard-question m-3"></i>KIDS IQ TEST
            </h1>
            <p>
              A kids' IQ test is specifically tailored to assess the cognitive
              abilities of children. These tests often include age-appropriate
              tasks and questions that measure a child's reasoning,
              problem-solving, memory, and language skills. Kids' IQ tests are
              used by educators, psychologists, and parents to gain insights
              into a child's intellectual development, identify areas of
              strength and weakness, and provide appropriate educational
              support. It's important to note that IQ tests for children should
              be administered by qualified professionals and interpreted
              cautiously, considering factors such as age, cultural background,
              and individual differences. Additionally, IQ scores for children
              may not accurately predict future academic or career success and
              should be considered alongside other measures of a child's
              abilities and achievements.
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
              {score} out of {kids.length} correct - (
              {(score / kids.length) * 100})%
            </h2>
            <br />
            <button onClick={() => restartGame()}>Restart Game</button>
          </div>
        ) : (
          <div className="questionbox col-12 col-md-12">
            <h4>Current Score : {score}</h4>
            <h2>
              Question {currentQuestion + 1} out of {kids.length}
            </h2>
            <br></br>
            <h3>{kids[currentQuestion].text}</h3>
            <br />
            <ul>
              {kids[currentQuestion].options.map((option) => {
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

export default KidsIqTest;
