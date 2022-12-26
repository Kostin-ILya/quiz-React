const Result = ({ correct, quantity, onReloadGame }) => {
  let text = ''
  switch (correct) {
    case 0:
    case 5:
      text = 'ответов'
      break
    case 1:
      text = 'ответ'
      break
    default:
      text = 'ответа'
  }

  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="finish"
      />
      <h2>
        Вы отгадали {correct} {text} из {quantity}
      </h2>
      <button onClick={onReloadGame}>Попробовать снова</button>
    </div>
  )
}

export default Result
