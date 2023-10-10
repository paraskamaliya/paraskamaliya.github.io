import About from "./Components/About";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "../src/App.css"

function App() {
  return (
    <div className="App scrollable-content">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
