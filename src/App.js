import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import OpeningScreen from './pages/OpeningScreen';
import NotFound from './pages/NotFound';
import Themes from './pages/Themes';
import CollageSeries from './pages/CollageSeries';

import GalleryPage from './galleries/GalleryPage';
import { galleries } from './data/galleries';

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

      {galleries.map((gallery) => (
        <Route
          key={gallery.slug}
          path={`/${gallery.slug}`}
          element={<GalleryPage slug={gallery.slug} />}
        />
      ))}


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
