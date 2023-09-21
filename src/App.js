import About from "./Components/About";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App" style={{ background: "black", boxSizing: "border-box" }}>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
