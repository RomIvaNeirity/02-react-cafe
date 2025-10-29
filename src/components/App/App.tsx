import css from './App.module.css';
import "modern-normalize";
import { useState } from "react";
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions.tsx'
import type Votes from '../../types/votes';
import type { VoteType } from '../../types/votes';




function App()
{
  const votes: Votes = {
	good: 0,
	neutral: 0,
	bad: 0
  }
  
  const handleVote = () => {
    console.log("I'm a button!");
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions />
      <button onClick={handleVote}>Click me!</button>
    </div>
  )
}

export default App



