import './App.css';
import Coding from './components/Coding';
import Coding2 from './components/Coding2';
import Intro from './components/Intro';
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from './components/Skills';

function App() {
  AOS.init();
  return (
    <div className="App">
    <Intro />
    <Coding2/>
    <Coding/>
    <Skills/>
    </div>
  );
}

export default App;
