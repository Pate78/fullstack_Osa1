import './index.css';
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = (props) => {
    const number = props.number
/*     console.log('Anecdote: number:',props.number)
 */    return (
        <div>
            {props.anecdotes[number]}
        </div>
    )
}

const Statistics = ({anecdotes, votes}) => {
    let mostVotedIndex = 0
    let mostVotedVotes = 0
    let mostVotedAnecdote = ''
    let index = 0
    
    anecdotes.forEach (a => {
/*         console.log('Statistics: a: ', a, ' votes: ', votes[index], ' index: ', index)
 */        if (votes[index]>mostVotedVotes) {
            mostVotedIndex=index
            mostVotedAnecdote = a
            mostVotedVotes=votes[index]
        }
        index++
    })
    if(mostVotedAnecdote==='') {
        return <div>No votes</div>
    }
    console.log('Most voted: ', mostVotedAnecdote, 'Votes: ', mostVotedVotes)
    return (
        <div><h1>Most voted anecdote is</h1>
            {mostVotedAnecdote}
        </div>
    )
}

const random = () => Math.floor(Math.random() * (+6 - +0)) + +0

const App = (props) => {
    const [selected, setSelected] = useState(random)
    const [votes, setVotes] = useState(Array(6).fill(0))

    const setToValue = (newValue) => {
        setSelected(newValue)
    }
    
    const addVote = (selected) => {
        const copyVotes = [...votes]
/*         console.log('votes.length: ',votes.length,' copyVotes.length: ', copyVotes.length)
 */        copyVotes[selected] += 1
/*         console.log('copyVotes[selected]',copyVotes[selected], 'selected: ',selected)
 */        setVotes(copyVotes)
/*         console.log('votes[selected]: ',votes[selected])
 */    }

    return (
    <div>
        <Anecdote anecdotes={props.anecdotes} number={selected} />
        <p>
            This anecdote has {votes[selected]} votes
        </p>
        <p>
            <button onClick={() => setToValue(random)} >Next anecdote</button>
            <button onClick={() => addVote(selected)} >Vote</button>
        </p>
        <Statistics anecdotes={props.anecdotes} votes={votes} />

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)







