import './App.css';
import Nav from './Components/Global/Nav';
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe.jsx";
import Skills from './Components/Skills.jsx';
import Project from './Components/Projects/project.js';

function App() {
  return (
    <>
      <Nav />
      <Home />
      <AboutMe />
      <Skills />
      <Project />
    </>
  );
}

export default App;
