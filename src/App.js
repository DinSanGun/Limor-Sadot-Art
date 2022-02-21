import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import OpeningScreen from './pages/OpeningScreen';
import NotFound from './pages/NotFound';
import Themes from './pages/Themes';
import WabiSabi from './galleries/WabiSabi';
import WhimsicalDarkness from './galleries/WhimsicalDarkness';
import PinkBloodlines from './galleries/PinkBloodline';

function App() {
  return (
    <Routes>

      <Route path="/" element={<OpeningScreen/>} /> 
      <Route path="/home" element={<Home/>} /> 
      <Route path="/work" element={<Themes/>} />

      <Route path="/wabi-sabi" element={<WabiSabi/>} />
      <Route path="/whimsical-darkness" element={<WhimsicalDarkness/>} />
      <Route path="/pink-bloodlines" element={<PinkBloodlines/>} />



            {/* <Route path=":theme">
              <Route path=":series">
                <Route path=":image" />
              </Route>
            </Route>
         NESTED ROUTES */}

      <Route path="/about" element={<About/>} /> 
      <Route path="/*" element={<NotFound/>} /> 



    </Routes>
  );
}

export default App;
