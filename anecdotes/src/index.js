import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, children }) => (
  <button onClick={handleClick}>{children}</button>
);

const App = props => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([...props.anecdotes].map(el => 0));

  const nextQuote = () => {
    setSelected(Math.floor(Math.random() * Math.floor(props.anecdotes.length)));
  };

  const addVote = () => {
    const newVotes = [
      ...votes.slice(0, selected),
      votes[selected] + 1,
      ...votes.slice(selected + 1, votes.length)
    ];
    setVotes(newVotes);
  };

  return (
    <div>
      <Button handleClick={nextQuote}>next anecdote</Button>
      <Button handleClick={addVote}>vote</Button>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
