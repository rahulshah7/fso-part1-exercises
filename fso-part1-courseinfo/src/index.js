import React from 'react'
import ReactDOM from 'react-dom'

const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

const Header = props => <h1>{props.course}</h1>
const Part = props => <p>{props.part} {props.exercises}</p>
const Content = () => (
  <>
    <Part part={course.parts[0].name} exercises={course.parts[0].exercises}></Part>
    <Part part={course.parts[1].name} exercises={course.parts[1].exercises}></Part>
    <Part part={course.parts[2].name} exercises={course.parts[2].exercises}></Part>
  </>
)
const Total = props => <p>Number of exercises {props.amount}</p>


const App = () => {

  return (
    <div>
      <Header course={course.name}></Header>
      <Content></Content>
      <Total amount={course.parts.reduce((prev, curr) => prev + curr.exercises, 0)}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))