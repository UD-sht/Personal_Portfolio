import './App.css';
import Nav from './Components/Global/Nav';
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe.jsx";
import Skills from './Components/Skills.jsx';
import Project from './Components/Projects/project.js';
import Experience from './Components/Experience.jsx';
import Footer from './Components/Global/Footer.jsx';
import Contacts from './Components/Contacts.jsx';


function App() {
  return (
    <>
      <Nav />
      <Home />
      <AboutMe />
      <Skills />
      <Project />
      <Experience />
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
