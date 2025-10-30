import type { VoteType } from '../../types/votes'
import css from './VoteOptions.module.css'

interface VoteOptionsProps {
    onClick: (type: VoteType) => void;
    onReset: () => void;
   
}


function VoteOptions({ onClick, onReset }: VoteOptionsProps) {
    return(
    <div className={css.container}>
        <button className={css.button} onClick={() => onClick("good")}>Good</button>
        <button className={css.button} onClick={() => onClick("neutral")}>Neutral</button>
        <button className={css.button} onClick={() => onClick("bad")}>Bad</button>
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>
    </div>)
}

export default VoteOptions