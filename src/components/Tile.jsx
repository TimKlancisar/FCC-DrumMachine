import { useEffect, useRef } from "react";

export const Tile = ({sound, index, textSound, checkSound}) => {
    const thisSound = useRef(null)
    const playSound = () => {
        thisSound.current.currentTime = 0;
        thisSound.current.play(); textSound(sound[0])
    };
    return (
        <button key={index} onClick={playSound} onMouseUp={(e) => {e.target.classList.remove('playing')}} className='drum-pad flex justify-center flex-col h-20 w-20 bg-slate-700 text-orange-400 font-bold shadow hover:text-slate-700 hover:bg-orange-400'>
                <span className="pointer-events-none">{sound[0]}</span>
                <span className="pointer-events-none">({sound[1]})</span>
                <audio ref={thisSound} data-index={index} src={checkSound[sound[1]]}></audio>
        </button>
    );
}

export default Tile;  