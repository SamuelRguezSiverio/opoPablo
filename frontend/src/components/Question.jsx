import React, { useEffect, useState } from 'react';
import { Results } from './Results';

export const Question = ({ questionsFiltered, setActiveQuiz }) => {
  const [score, setScore] = useState(0);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [answersRandom, setAnswersRandom] = useState([]);
  const [activeResults, setActiveResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(5400); // 90 minutos en segundos
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [randomQuestions, setRandomQuestions] = useState([]);

  useEffect(() => {
    const shuffledQuestions = [...questionsFiltered].sort(() => Math.random() - 0.5).slice(0, 50);
    setRandomQuestions(shuffledQuestions);
    setIndexQuestion(0);
  }, [questionsFiltered]);

  useEffect(() => {
    if (randomQuestions.length > 0 && randomQuestions[indexQuestion]) {
      const answers = [
        ...randomQuestions[indexQuestion].incorrect_answers,
        randomQuestions[indexQuestion].correct_answer,
      ];
      setAnswersRandom(answers.sort(() => Math.random() - 0.5));
    }
  }, [randomQuestions, indexQuestion]);

  useEffect(() => {
    let timer;
    if (timeRemaining > 0 && !activeResults) {
      timer = setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0 && !activeResults) {
      setAnswered(true);
      setActiveResults(true);
    }
    return () => clearTimeout(timer);
  }, [timeRemaining, activeResults]);

  const checkAnswer = (answerText, index) => {
    if (randomQuestions[indexQuestion] && answerText === randomQuestions[indexQuestion].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectAnswerIndex(index);
    setAnswered(true);
    setTimeRemaining((time) => time - 5);
  };

  const onNextQuestion = () => {
    if (selectAnswerIndex !== null) {
      setIndexQuestion((prevIndex) => prevIndex + 1);
      setSelectAnswerIndex(null);
      setAnswered(false);
    }
  };

  const onReset = () => {
    setScore(0);
    setActiveQuiz(false);
    setTimeRemaining(5400);
    const shuffledQuestions = [...questionsFiltered].sort(() => Math.random() - 0.5).slice(0, 50);
    setRandomQuestions(shuffledQuestions);
    setIndexQuestion(0);
  };

  if (!randomQuestions.length || !randomQuestions[indexQuestion]) {
    return <div>Cargando preguntas...</div>;
  }

  return (
    <>
      {activeResults ? (
        <Results
          questionsFiltered={randomQuestions}
          score={score}
          onReset={onReset}
        />
      ) : (
        <div className="flex flex-col justify-between shadow-md shadow-slate-300 w-full max-w-xl h-full p-4 md:p-10 rounded-lg overflow-hidden">
          <div className="flex justify-between mb-4">
            <span className="text-lg md:text-xl font-bold">
              {indexQuestion + 1} / {randomQuestions.length}
            </span>
            <div>
              <span className="font-semibold">Tiempo restante: </span>
              <span className="font-bold">{timeRemaining} s</span>
            </div>
          </div>

          <button
            className="mb-4 border px-4 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900"
            onClick={onReset}
          >
            Reiniciar
          </button>
          <div className="mb-4">
            <h1 className="font-bold text-base md:text-lg">{randomQuestions[indexQuestion].question}</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden">
            {answersRandom.map((answer, index) => (
              <button
                className={`border p-4 rounded-lg flex justify-center items-center hover:scale-105 overflow-hidden text-ellipsis ${
                  answered
                    ? answer === randomQuestions[indexQuestion].correct_answer
                      ? 'bg-green-500'
                      : selectAnswerIndex === index
                      ? 'bg-red-500'
                      : 'bg-white'
                    : ''
                }`}
                key={answer}
                onClick={() => checkAnswer(answer, index)}
                disabled={answered}
              >
                <p className="font-medium text-center break-words max-h-full overflow-y-auto">{answer}</p>
              </button>
            ))}
          </div>

          {indexQuestion + 1 === randomQuestions.length ? (
            <button
              className="mt-4 border-2 border-yellow-600 text-yellow-600 rounded-md px-4 py-2 hover:bg-yellow-600 hover:text-black font-medium"
              onClick={() => {
                setAnswered(true);
                setActiveResults(true);
              }}
            >
              Finalizar
            </button>
          ) : (
            <button
              className={`mt-4 border-2 border-yellow-600 text-yellow-600 rounded-md px-4 py-2 hover:bg-yellow-600 hover:text-black font-medium ${
                selectAnswerIndex === null ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={onNextQuestion}
              disabled={selectAnswerIndex === null}
            >
              Siguiente Pregunta
            </button>
          )}
        </div>
      )}
    </>
  );
};
