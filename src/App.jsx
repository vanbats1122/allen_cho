import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Experience from './components/experience/Experience';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Project />
        <Contact />
    </>
  );
};

export default App;