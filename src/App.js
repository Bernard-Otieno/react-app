import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/projects';
function App() {
  return (
   <div>
    <Header />

    <About />

    <Projects />

    <Contact />
  
   </div>

  
  );
}

export default App;
