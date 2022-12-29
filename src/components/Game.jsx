const Game = ({ question, onClickVariant, progressLineWidth }) => {
  const { title, variants, correct } = question

  return (
    <>
      <div className="progress">
        <div
          style={{ width: progressLineWidth }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{title}</h1>
      <ul>
        {variants.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              onClickVariant(index, correct)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Game
