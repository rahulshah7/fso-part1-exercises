import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const giveGood = () => setGood(good + 1)
  const giveNeutral = () => setNeutral(neutral + 1)
  const giveBad = () => setBad(bad + 1)

  const total = good + bad + neutral
  const average = ((good + bad * -1) / total) || 0
  const positivePercent = good / total || 0

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={giveGood} text='good'></Button>
      <Button handleClick={giveNeutral} text='neutral'></Button>
      <Button handleClick={giveBad} text='bad'></Button>

      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{positivePercent}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)