import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import OpeningScreen from './pages/OpeningScreen';
import NotFound from './pages/NotFound';
import Themes from './pages/Themes';
import CollageSeries from './pages/CollageSeries';

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
import Assemblage from './galleries/Assemblage';
import TheJapaneseWindow from './galleries/TheJapaneseWindow';

import HumanKinda from './galleries/HumanKinda';
import FloatingWorld from './galleries/FloatingWorld';
import LineArtSeries from './pages/LineArtSeries';
import TheHumanLines from './galleries/TheHumanLines';
import FamilliesDiptychsWinter from './galleries/FamiliesDiptychsWinter';
import FamilliesDiptychsSummer from './galleries/FamiliesDiptychsSummer';
import BlackWhiteBrown from './galleries/BlackWhiteBrown';
import SurrealNeuroTrip from './galleries/SurrealNeuroTrip';
import EntangledLiving from './galleries/EntangledLiving';
import Contact from './pages/Contact';
import Videos from './pages/Videos';

export const reveal = () => {
  var reveals = document.querySelectorAll(".reveal")

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    var elementVisible = 80

    if (elementTop < windowHeight - elementVisible)
      reveals[i].classList.add("active");
    else
      reveals[i].classList.remove("active");
  }
}

function App() {

  window.addEventListener("scroll", reveal);

  return (
    <Routes>

      <Route path="/" element={<OpeningScreen/>} /> 
      <Route path="/home" element={<Home/>} /> 
      <Route path="/work" element={<Themes/>} />
      <Route path="/collage" element={<CollageSeries/>} />
      <Route path="/line-art" element={<LineArtSeries/>} />


      <Route path="/eternal-randomness" element={<WabiSabi/>} />
      <Route path="/whimsical-darkness" element={<WhimsicalDarkness/>} />
      <Route path="/pink-bloodlines" element={<PinkBloodlines/>} />
      <Route path="/the-purple-era" element={<ThePurpleEra/>} />
      <Route path="/liquid-thoughts" element={<LiquidThoughts/>} />
      <Route path="/falling-empires" element={<FallingEmpires/>} />
      <Route path="/storytelling-collage" element={<StorytellingCollage/>} />
      <Route path="/the-seeker" element={<TheSeeker/>} />
      <Route path="/spiritual-path" element={<SpiritualPath/>} />
      <Route path="/dreamland-passport" element={<DreamlandPassport/>} />
      <Route path="/assemblage" element={<Assemblage/>} />
      <Route path="/the-japanese-window" element={<TheJapaneseWindow/>} />

      <Route path="/human-kinda" element={<HumanKinda/>} />
      <Route path="/pictures-of-the-floating-world" element={<FloatingWorld/>} />
      <Route path="/the-human-lines" element={<TheHumanLines/>} />
      <Route path="/families-diptychs-winter" element={<FamilliesDiptychsWinter/>} />
      <Route path="/families-diptychs-summer" element={<FamilliesDiptychsSummer/>} />
      <Route path="/B&W-&-Brown" element={<BlackWhiteBrown/>} />
      <Route path="/surreal-neuro-trip" element={<SurrealNeuroTrip/>} />
      <Route path="/entangled-living" element={<EntangledLiving/>} />


            {/* <Route path=":theme">
              <Route path=":series">
                <Route path=":image" />
              </Route>
            </Route>
         NESTED ROUTES */}

      <Route path="/about" element={<About/>} /> 
      <Route path="/videos" element={<Videos/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/*" element={<NotFound/>} /> 



    </Routes>
  );
}

export default App;
