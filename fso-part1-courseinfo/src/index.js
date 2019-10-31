import React from 'react'
import ReactDOM from 'react-dom'

const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14


const Header = props => <h1>{props.course}</h1>
const Part = props => <p>{props.part} {props.exercises}</p>
const Content = () => (
  <>
    <Part part={part1} exercises={exercises1}></Part>
    <Part part={part2} exercises={exercises2}></Part>
    <Part part={part3} exercises={exercises3}></Part>
  </>
)
const Total = props => <p>Number of exercises {props.amount}</p>


const App = () => {

  return (
    <div>
      <Header course={course}></Header>
      <Content></Content>
      <Total amount={exercises1 + exercises2 + exercises3}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))