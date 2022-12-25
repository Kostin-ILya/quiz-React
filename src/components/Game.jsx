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
    correct: 2,
  },
  {
    title: 'Что такое useState?',
    variants: [
      'Функция для хранения данных компонента',
      'Глобальный стейт',
      'Xук для запуска сайд-эффектов',
    ],
    correct: 1,
  },
]

const Game = () => {
  return (
    <>
      <div className="progress">
        <div style={{ width: '50%' }} className="progress__inner"></div>
      </div>
      <h1>Что такое useState?</h1>
      <ul>
        <li>Функция для хранения данных компонента</li>
        <li>Глобальный стейт</li>
        <li>Xук для запуска сайд-эффектов</li>
      </ul>
    </>
  )
}

export default Game