import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, children }) => (
  <button onClick={handleClick}>{children}</button>
);

const Anecdote = ({ selected }) => <p>{selected}</p>;

const MostVotes = ({ anecdotes, votes }) => {
  // See url - do not use oneliner to calc index of max of array in production apps
  // https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array
  const max_pos = votes.indexOf(Math.max(...votes));

  if (votes.some(el => el > 0)) {
    return (
      <>
        <h2>Anecdote with the most votes</h2>
        <Anecdote selected={anecdotes[max_pos]}></Anecdote>
        <Votes voteCount={votes[max_pos]}></Votes>
      </>
    );
  } else return null;
};

const Votes = ({ voteCount }) => <p>has {voteCount} votes</p>;

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
      <h1>Anecdote of the day</h1>
      <Button handleClick={nextQuote}>next anecdote</Button>
      <Button handleClick={addVote}>vote</Button>
      <Anecdote selected={props.anecdotes[selected]}></Anecdote>
      <Votes voteCount={votes[selected]}></Votes>
      <MostVotes anecdotes={props.anecdotes} votes={votes}></MostVotes>
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
