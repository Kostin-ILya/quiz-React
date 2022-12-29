import { useState } from 'react'

import Game from './Game'
import Result from './Result'

import '../index.scss'

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['Библиотека', 'Фреймворк', 'Язык программирования'],
    correct: 0,
  },

  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это синтаксический сахар JS похожий на HTML',
    ],
    correct: 2,
  },
  {
    title: 'Компонент - это ... ',
    variants: [
      'Приложение',
      'Часть приложения или страницы, которую можно переиспользовать',
      'Элемент в DOM-дереве',
    ],
    correct: 1,
  },
  {
    title: 'Что такое props?',
    variants: [
      'Аргументы функции',
      'Входные данные React-компонентов',
      'Динамические данные внутри компонента',
    ],
    correct: 1,
  },
  {
    title: 'Что такое useState?',
    variants: [
      'Функция для хранения данных компонента',
      'Глобальный стейт',
      'Xук для запуска сайд-эффектов',
    ],
    correct: 0,
  },
]

const App = () => {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)

  const progressLineWidth = ((step + 1) / questions.length) * 100 + '%'

  const onClickVariant = (index, correctIndex) => {
    if (index === correctIndex) {
      setCorrect((prev) => prev + 1)
    }
    setStep((prev) => prev + 1)
  }

  const onReloadGame = () => {
    setStep(0)
    setCorrect(0)
  }

  return (
    <div className="App">
      {step < questions.length ? (
        <Game
          question={questions[step]}
          onClickVariant={onClickVariant}
          progressLineWidth={progressLineWidth}
        />
      ) : (
        <Result
          quantity={questions.length}
          correct={correct}
          onReloadGame={onReloadGame}
        />
      )}
    </div>
  )
}

export default App
