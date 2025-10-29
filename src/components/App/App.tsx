import css from './App.module.css';
import "modern-normalize";
import { useState } from "react";
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions.tsx'
import type Votes from '../../types/votes';
import type { VoteType } from '../../types/votes';


function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

const handleVote = (type: VoteType) => {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));

    console.log("Clicked:", type, "New State:", votes);
  };
  
  const resetVotes= () => setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onClick={handleVote} onReset={resetVotes}/>

    </div>
  )
}

export default App



