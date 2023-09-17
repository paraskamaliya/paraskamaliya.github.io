import About from "./Components/About";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App" style={{ background: "black", boxSizing: "border-box" }}>
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}

export default App;
