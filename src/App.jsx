import "./app.css";
import DedicatedProcesses from "./components/dedicatedProcesses/DedicatedProcesses";
import Global from "./components/globalFinancing/Global";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App w-full h-auto bg-white">
      <Navbar />
      <Home />
      <Global />
      <DedicatedProcesses />
    </div>
  );
}

export default App;
