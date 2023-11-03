import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "../src/App.css"
import Contact from "./Components/Contact";
import { Text } from "@chakra-ui/react";

function App() {
  return (
    <div className="App scrollable-content">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
