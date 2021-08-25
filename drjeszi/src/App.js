import Hero from './components/hero';
import Contact from './components/contact';
import { Intro } from './components/intro';
import Navbar from './components/navbar';
import Prices from './components/prices';
import { Professions } from './components/professions';
import Topnav from './components/topnav';
import './src/App.css';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Topnav/>
      <Navbar/>
      <Hero/>
      <Intro/>
      <Professions/>
      <Prices/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
