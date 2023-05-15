import React, { useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(true);

  const QuestionsData = [
    {
      QuestionId: new Date(),
      Question: '1 .Everything in React is a _____________',
      Answers: ['Module', 'Component', 'Package', 'Class'],
      RightAnswer: 'Component',
    },
    {
      QuestionId: new Date(),
      Question: '2 .What is Babel?',
      Answers: [
        'A transpiler',
        'An interpreter',
        'A Compiler',
        'Both Compiler and Transpilar',
      ],
      RightAnswer: 'Both Compiler and Transpilar',
    },
    {
      QuestionId: new Date(),
      Question: '5 .How many elements does a react component return?',
      Answers: [
        '1 Element',
        '2 Elements',
        'Multiple Elements',
        'None of the above',
      ],
      RightAnswer: 'Multiple Elements',
    },
    {
      QuestionId: new Date(),
      Question: '4 .What is ReactJS?',
      Answers: [
        'Server-side Framework',
        'User-interface framework',
        'A Library for building interaction interfaces',
        'None of the Above',
      ],
      RightAnswer: 'A Library for building interaction interfaces',
    },
  ];

  const handleStartAgain = () => {
    setIndex(0);
    setShow(true);
    setScore(0);
  };

  const CheckAnswerRightOrNot = (selectedAns) => {
    if (index == QuestionsData.length - 1) {
      setShow(false);
    }
    if (QuestionsData[index].RightAnswer === selectedAns) {
      setScore(score + 1);
    }
    setIndex(index + 1);
  };

  return (
    <div
      className=" p-5"
      style={{
        width: '30rem',
        margin: 'auto',
        marginTop: '5rem',
        backgroundColor: '#28234A',
        borderRadius: '20px',
        color: 'white',
      }}
    >
      <h1 style={{ paddingBottom: '40px' }}>
        {' '}
        Quiz App &nbsp;{' '}
        <i>
          <u>Score</u> : {score}
        </i>
      </h1>
      {!show && (
        <button
          style={{
            width: '100%',
            backgroundColor: '#28234A',
            color: 'white',
          }}
          onClick={handleStartAgain}
        >
          Start Again
        </button>
      )}
      <div style={{ width: '100%' }}>
        {show && (
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div>
              <h3>
                Question {index + 1}/{QuestionsData.length}
              </h3>
              <div>{QuestionsData[index].Question}</div>
            </div>
            <div style={{ width: '50%' }}>
              {QuestionsData[index].Answers.map((answers) => (
                <div style={{ width: '100%', border: '5px solid #203251' }}>
                  {
                    <button
                      style={{
                        width: '100%',
                        backgroundColor: '#28234A',
                        color: 'white',
                      }}
                      onClick={() => CheckAnswerRightOrNot(answers)}
                    >
                      {answers}
                    </button>
                  }
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
