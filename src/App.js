import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import OpeningScreen from './pages/OpeningScreen';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Routes>

      <Route path="/" element={<OpeningScreen/>} /> 
      <Route path="/home" element={<Home/>} /> 
      <Route path="/work" element={<Gallery/>} />
      
        {/* 
            <Route path=":theme">
              <Route path=":series">
                <Route path=":image" />
              </Route>
            </Route>
         NESTED ROUTES*/} /

      <Route path="/about" element={<About/>} /> 
      <Route path="/*" element={<NotFound/>} /> 



    </Routes>
  );
}

export default App;
