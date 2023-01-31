import './App.css';

// components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

// page
import Projects from './components/Projects/Projects';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
