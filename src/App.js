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
function App() {
  return (
   <div>
    
    <Header />

    <About />

    <Projects/>

    <Contact />

    <EasterEgg />

    <Footer />
   </div>

  
  );
}

export default App;
