import "./app.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App w-full h-auto bg-white">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
