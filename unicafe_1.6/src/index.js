import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad}) => {
    if (good===0 && bad===0 && neutral===0) {
        return (
            <p>No feedback given</p>
        )
    }
/*     let amountOfFeedback = good+bad+neutral
    const average = (good-bad)/amountOfFeedback */
/*     console.log('Good: ', {good})
    console.log('Good+Bad+Neutral: ', {amountOfFeedback}) */
    /* const postitive = (good/(good+bad+neutral))*100 */
    return (
        <table>
            <tbody>
                <tr><Statistic text='good' amount={good} /></tr>
                <tr><Statistic text='neutral' amount={neutral} /></tr>
                <tr><Statistic text='bad' amount={bad} /></tr>
                <tr><Statistic text='all' amount={bad+neutral+good} /></tr>
                <tr><Statistic text='average' amount={(good-bad)/(good+bad+neutral)} /></tr>
                <tr><Statistic text='positive' amount={(good/(good+bad+neutral))*100} /></tr>
            </tbody>
        </table>
    )
}

const Statistic = ({text, amount}) => {
/*     console.log('Name: ', text, 'amount: ', amount)
 */    return (<><td>{text}</td><td>{amount}</td></>)
} 

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <p>
        <Button handleClick={() => setGood(good+1)} text='Good'/>
        <Button handleClick={() => setNeutral(neutral+1)} text='Neutral'/>
        <Button handleClick={() => setBad(bad+1)} text='Bad'/>
      </p>
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)