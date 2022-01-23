import { useState } from "react";
import Tile from "./Tile";

import clap from "../assets/clap.wav";
import kick from "../assets/kick.wav";
import smooth from "../assets/melancholy.wav";
import snare from "../assets/snare.wav";
import swoop from "../assets/swoop.wav";
import openHat from "../assets/open-hat.wav";
import highHat from "../assets/open-high-hat.wav";
import pianoA from "../assets/piano-a.wav";
import pianoG from "../assets/piano-g.wav";

export const DrumMachine = () => {
    const ourSounds = [['clap', 'q'], ['kick', 'e'], ['smooth', 'a'], ['snare', 'w'], ['swoop', 'z'], ['openHat', 'x'], ['highHat', 'c'], ['pianoA', 's'], ['pianoG', 'd']];
    const checkSound = {
        q: clap,
        e: kick,
        a: smooth,
        w: snare,
        z: swoop,
        x: openHat,
        c: highHat,
        s: pianoA,
        d: pianoG,
    }
    const [soundName, setSoundName] = useState('Play something');
    document.addEventListener('keydown', (e) => {
        let soundElement = document.querySelector(`audio[data-index="${Object.keys(checkSound).indexOf(e.key)}"]`);
        if(!soundElement) return;
        soundElement.currentTime = 0;
        soundElement.play();
        if(checkSound[e.key]) {setSoundName(ourSounds.filter(x => x[1] === e.key)[0][0])}
        soundElement.parentNode.classList.add('playing')
    });
    document.addEventListener('keyup', () => {
        [...document.querySelectorAll('button')].map(x => x.classList.remove('playing'));
    })
    return (
        <main className="flex flex-col items-center gap-4 p-16 bg-white">
            <div className="bg-black text-lime-300 w-full h-12 py-2 font-mono text-center" id="display">{soundName}</div>
            <div className="grid grid-cols-3 gap-2">{ourSounds.map((sound, index) => <Tile sound={sound} index={index} key={index} textSound={setSoundName} checkSound={checkSound} /> )}</div>            
        </main>
    );
}

export default DrumMachine;