import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import OpeningScreen from './pages/OpeningScreen';
import NotFound from './pages/NotFound';
import Themes from './pages/Themes';
import CollageSeries from './pages/CollageSeries';

import GalleryPage from './galleries/GalleryPage';

import LineArtSeries from './pages/LineArtSeries';
import Contact from './pages/Contact';
import Videos from './pages/Videos';

export const reveal = (nameOfClass, visibleDistance) => {
  var reveals = document.querySelectorAll(nameOfClass)

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    // var elementVisible = 80

    if (elementTop < windowHeight - visibleDistance)
      reveals[i].classList.add("active");
    else
      reveals[i].classList.remove("active");
  }
}

function App() {

  window.addEventListener("scroll", () => reveal(".reveal", 80));

  return (
    <Routes>

      <Route path="/" element={<OpeningScreen/>} /> 
      <Route path="/home" element={<Home/>} /> 
      <Route path="/work" element={<Themes/>} />
      <Route path="/collage" element={<CollageSeries/>} />
      <Route path="/line-art" element={<LineArtSeries/>} />


      <Route path="/eternal-randomness" element={<GalleryPage slug="wabi-sabi" />} />
      <Route path="/whimsical-darkness" element={<GalleryPage slug="whimsical-darkness" />} />
      <Route path="/the-purple-era" element={<GalleryPage slug="the-purple-era" />} />
      <Route path="/liquid-thoughts" element={<GalleryPage slug="liquid-thoughts" />} />
      <Route path="/falling-empires" element={<GalleryPage slug="falling-empires" />} />
      <Route path="/storytelling-collage" element={<GalleryPage slug="storytelling-collage" />} />
      <Route path="/the-seeker" element={<GalleryPage slug="the-seeker" />} />
      <Route path="/spiritual-path" element={<GalleryPage slug="spiritual-path" />} />
      <Route path="/dreamland-passport" element={<GalleryPage slug="dreamland-passport" />} />
      <Route path="/assemblage" element={<GalleryPage slug="assemblage" />} />
      <Route path="/the-japanese-window" element={<GalleryPage slug="the-japanese-window" />} />
      <Route path="/botanical-wanders" element={<GalleryPage slug="botanical-wanders" />} />
      {/* <Route path="/pink-bloodlines" element={<GalleryPage slug="pink-bloodlines" />} /> */}


      <Route path="/human-kinda" element={<GalleryPage slug="human-kinda" />} />
      <Route path="/pictures-of-the-floating-world" element={<GalleryPage slug="floating-world" />} />
      <Route path="/the-human-lines" element={<GalleryPage slug="the-human-lines" />} />
      <Route path="/families-diptychs-winter" element={<GalleryPage slug="families-diptychs-cold" />} />
      <Route path="/families-diptychs-summer" element={<GalleryPage slug="families-diptychs-warm" />} />
      <Route path="/black-white-brown" element={<GalleryPage slug="black-white-brown" />} />
      <Route path="/surreal-neuro-trip" element={<GalleryPage slug="surreal-neuro-trip" />} />
      <Route path="/entangled-living" element={<GalleryPage slug="entangled-living" />} />


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
