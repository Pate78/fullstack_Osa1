import React from 'react'
import ReactDOM from 'react-dom'
import { tsPropertySignature } from '@babel/types';

/* const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
} */

const Header = (props) => (
    <h1>{props.course}</h1>
)

const Content = (props) => {
    return (
        <>
            <Part part={props.part1} partEx={props.part1ex} />
            <Part part={props.part2} partEx={props.part2ex} />
            <Part part={props.part3} partEx={props.part3ex} />
        </>
    )
}

const Part = (props) => (
    <p>
        {props.part} {props.partEx}
    </p>
)

const Total = (props) => (
    <p>
        Number of exercises {props.part1ex + props.part2ex + props.part3ex}
    </p>
)

const App = () => {
    // const-määrittelyt
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const part1ex = 10
    const part2 = 'Using props to pass data'
    const part2ex = 7
    const part3 = 'State of a component'
    const part3ex = 14

    return (
      <div>
        <Header course={course} />
        <Content part1={part1} part1ex={part1ex}
        part2={part2} part2ex={part2ex}
        part3={part3} part3ex={part3ex} />
        <Total part1ex={part1ex} part2ex={part2ex} part3ex={part3ex} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))