import React from 'react';
import './styles/App.css';
import LandingPage from '../src/components/Home';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import About from '../src/components/About';
import Services from '../src/components/Services';
import Projects from '../src/components/Projects';
import Resume from '../src/components/Resume';
import Contact from '../src/components/Contact';



function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <LandingPage />
        <About />
         <Services />
         <Resume />
        <Projects />
        <Contact />
       
        
      </main>
      <Footer />
    </div>
  );
}

export default App;