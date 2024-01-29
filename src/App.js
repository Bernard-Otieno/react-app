import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Project-display';
import Footer from './components/Footer';
import EasterEgg from './components/EasterEgg';
import Slideshow from './components/Slideshow';
function App() {
  return (
   <div>
    
    <Header />

    <About />
    <Slideshow />

    <Projects/>

    <Contact />

    <EasterEgg />
    <div>
      <h1>Chuck Norris Jokes App</h1>
      <ChuckNorrisJokes />
    </div>

    <Footer />
   </div>

  
  );
}

export default App;
