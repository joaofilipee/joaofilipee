import './App.css';

// components
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
