import { FaFreeCodeCamp } from "react-icons/fa";
import { DrumMachine } from "./components/DrumMachine";

function App() {
  return (
    <div className="w-4/12">
      <header className="w-full py-4 px-20 bg-orange-400 flex items-center justify-center gap-4 text-2xl">
        <span><FaFreeCodeCamp/></span>
        <span>Drum Machine</span>
      </header>
      <DrumMachine />
    </div>
  );
}

export default App;
