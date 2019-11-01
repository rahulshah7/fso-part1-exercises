import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, total, average, positivePercent }) => {
  if (total == 0) {
    return <p>No feedback given</p>
  }

  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Statistic text={"Good"} value={good}></Statistic>
          <Statistic text={"Neutral"} value={neutral}></Statistic>
          <Statistic text={"Bad"} value={bad}></Statistic>
          <Statistic text={"Total"} value={total}></Statistic>
          <Statistic text={"Average"} value={average}></Statistic>
          <Statistic text={"Positive"} value={positivePercent + "%"}></Statistic>
        </tbody>
      </table>
    </>
  )
}

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
  const positivePercent = good / total * 100 || 0

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={giveGood} text='good'></Button>
      <Button handleClick={giveNeutral} text='neutral'></Button>
      <Button handleClick={giveBad} text='bad'></Button>

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        average={average}
        positivePercent={positivePercent}>
      </Statistics>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)