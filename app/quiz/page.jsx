'use client'

import React, { useState } from 'react';
import { quizData } from '../data.js';

const Page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  if (!quizData || !quizData.questions) {
    return <div>Loading...</div>; // Handle the case where quizData is undefined
  }

  const { questions } = quizData;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  // Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    setSelectedAnswer(answer === correctAnswer);
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    // If the answer was wrong, reveal the correct answer
    if (!selectedAnswer) {
      setShowCorrectAnswer(true);
    } else {
      setShowCorrectAnswer(false); // Reset correct answer display if it was shown previously
    }

    // Move to the next question or finish the quiz
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }

    setSelectedAnswerIndex(null);
    setChecked(false);
  };

  const revealCorrectAnswer = () => {
    setShowCorrectAnswer(true);
  };

  const quitQuiz = () => {
    setShowResult(true); // Show results when quitting
  };

  // Determine sprinkles effect based on score
  const sprinklesEffect = () => {
    const scorePercentage = (result.score / (questions.length * 5)) * 100;
    if (scorePercentage === 100) {
      return <div className="sprinkles-large"></div>; // Show large sprinkles effect for perfect score
    } else if (scorePercentage >= 95) {
      return <div className="sprinkles-small"></div>; // Show small sprinkles effect for high score
    } else {
      return null; // No sprinkles effect for other scores
    }
  };

  return (
    <div className='container'>
      <h1>MBZ Quiz</h1>
      <div>
        <h2>
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className='quiz-container'>
            <h3>{question}</h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={
                  selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'
                }
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked && showCorrectAnswer && (
              <div className='correct-answer'>
                Correct Answer: <strong>{correctAnswer}</strong>
              </div>
            )}
            {checked ? (
              <button
                onClick={() => {
                  revealCorrectAnswer();
                  nextQuestion();
                }}
                className='btn btn-next'
              >
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className='btn btn-next-disabled'>
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
            <button onClick={quitQuiz} className='btn btn-quit'>
              Quit
            </button>
          </div>
        ) : (
          <div className='quiz-container'>
            <h3>Results</h3>
            <h3>Overall {((result.score / (questions.length * 5)) * 100).toFixed(1)}%</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={() => window.location.reload()} className='btn btn-restart'>
              Restart
            </button>
          </div>
        )}
        {/* Show sprinkles effect based on score */}
        {sprinklesEffect()}
      </div>
    </div>
  );
};

export default Page;
