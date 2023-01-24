import './App.css';

// components
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Skills from './components/SkillSet/Skills';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Skills />
      </BrowserRouter>
    </div>
  );
}

export default App;
