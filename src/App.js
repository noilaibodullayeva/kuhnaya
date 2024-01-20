import Header from './header/Header';
import Home from './home/Home';
import About from './About Us/About';
import Bedroom from './bedroom/Bedroom';
import Kitchen from './kitchen/Kitchen';
import Decor from './decor/Decor';
import Contact from './contact/Contact';
import "./App.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/bedroom' element={<Bedroom />} />
          <Route path='/kitchen' element={<Kitchen />} />
          <Route path='/decor' element={<Decor />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
