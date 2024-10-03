import React, { useState } from 'react';

const quizQuestions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4',
  },
  {
    question: 'Which language is used for web development?',
    options: ['Python', 'JavaScript', 'C++', 'Java'],
    answer: 'JavaScript',
  },
  {
    question: 'Which language is used for Machine Learning?',
    options: ['Python', 'JavaScript', 'C++', 'Java'],
    answer: 'Python',
  },
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-app" style={{ textAlign: 'center', padding: '20px' }}>
      {showScore ? (
        <div>
          <h1>Your Score: {score}/{quizQuestions.length}</h1>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h1>{quizQuestions[currentQuestion].question}</h1>
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerOptionClick(option)}
              style={buttonStyle}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const buttonStyle = {
  padding: '10px',
  margin: '10px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default QuizApp;
