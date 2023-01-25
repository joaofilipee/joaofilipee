import './App.css';

// components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
