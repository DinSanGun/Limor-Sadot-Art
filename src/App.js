import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import OpeningScreen from './pages/OpeningScreen';
import NotFound from './pages/NotFound';
import Themes from './pages/Themes';
import WabiSabi from './galleries/WabiSabi';
import WhimsicalDarkness from './galleries/WhimsicalDarkness';
import PinkBloodlines from './galleries/PinkBloodline';
import ThePurpleEra from './galleries/ThePurpleEra';
import LiquidThoughts from './galleries/LiquidThoughts';
import FallingEmpires from './galleries/FallingEmpires';
import StorytellingCollage from './galleries/StorytellingCollage';
import TheSeeker from './galleries/TheSeeker';
import SpiritualPath from './galleries/SpiritualPath';
import DreamlandPassport from './galleries/DreamlandPassport'

function App() {
  return (
    <Routes>

      <Route path="/" element={<OpeningScreen/>} /> 
      <Route path="/home" element={<Home/>} /> 
      <Route path="/work" element={<Themes/>} />

      <Route path="/wabi-sabi" element={<WabiSabi/>} />
      <Route path="/whimsical-darkness" element={<WhimsicalDarkness/>} />
      <Route path="/pink-bloodlines" element={<PinkBloodlines/>} />
      <Route path="/the-purple-era" element={<ThePurpleEra/>} />
      <Route path="/liquid-thoughts" element={<LiquidThoughts/>} />
      <Route path="/falling-empires" element={<FallingEmpires/>} />
      <Route path="/storytelling-collage" element={<StorytellingCollage/>} />
      <Route path="/the-seeker" element={<TheSeeker/>} />
      <Route path="/spiritual-path" element={<SpiritualPath/>} />
      <Route path="/dreamland-passport" element={<DreamlandPassport/>} />


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
