import React from 'react';
import './styles/Aboutme.css';
import './styles/Navbar.css';
import './styles/Projects.css';
import Aboutme from './components/Aboutme';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Aboutme />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
