import { FaFreeCodeCamp } from "react-icons/fa";
import { DrumMachine } from "./components/DrumMachine";

function App() {
  return (
    <div className="w-fit border-2 border-stone-800 text-slate-800" id="drum-machine">
      <header className="py-4 px-20 bg-orange-400 flex items-center justify-center gap-4 text-2xl">
        <span className="text-amber-300 text-4xl"><FaFreeCodeCamp/></span>
        <span>Drum Machine</span>
      </header>
      <DrumMachine />
    </div>
  );
}

export default App;
