import css from './App.module.css';
import "modern-normalize";
import { useState } from "react";
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions.tsx'
import VoteStats from '../VoteStats/VoteStats.tsx';
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
};
  
  const resetVotes= () => setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
  });

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onClick={handleVote} onReset={resetVotes} canReset={true} />
      <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} />
    </div>
  )
}

export default App



