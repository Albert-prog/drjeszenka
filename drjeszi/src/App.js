import Hero from './components/hero';
import { Intro } from './components/intro';
import Navbar from './components/navbar';
import { Professions } from './components/professions';
import Topnav from './components/topnav';
import './src/App.css';

function App() {
  return (
    <div className="App">
      <Topnav/>
      <Navbar/>
      <Hero/>
      <Intro/>
      <Professions/>
    </div>
  );
}

export default App;
