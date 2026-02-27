import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'

const Home = () => {

  const smoothScrollFollowTarget = ({
    getTargetY,
    duration = 2200,
    maxStepPx = 18, // cap how many pixels we can move per animation frame
  }) => {
    const startTime = performance.now();

    const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

    const step = (now) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = easeInOutSine(t);

      const currentY = window.pageYOffset;
      const targetY = getTargetY();

      // "Desired" progress-based position
      const desiredY = currentY + (targetY - currentY) * eased;

      // Cap movement to avoid sudden jumps caused by layout changes
      const delta = desiredY - currentY;
      const cappedDelta =
        Math.abs(delta) > maxStepPx ? Math.sign(delta) * maxStepPx : delta;

      window.scrollTo(0, currentY + cappedDelta);

      if (t < 1 && Math.abs(targetY - window.pageYOffset) > 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const delay = 2000;
    const above = -40; // 50px above the element

    const id = setTimeout(() => {
      const intro = document.getElementById("intro");
      if (!intro) return;

      smoothScrollFollowTarget({
        duration: 2400,
        maxStepPx: 16,
        getTargetY: () => {
          const rect = intro.getBoundingClientRect();
          const absoluteTop = rect.top + window.pageYOffset;

          // 100px above the top of #intro
          return Math.max(0, absoluteTop - above);
        },
      });
    }, delay);

    return () => clearTimeout(id);
  }, []);
  

  return (
    <Layout banner="color">

      <img src='img/home/mobile-home-banner.jpg' className='introduction__top-banner' alt="Collage art circle"/>

      <section className="introduction" id="intro">
        
        <div className='introduction__top-image'>
          <img src='img/home/home-half-circle.jpg' className='introduction__top-image--1' alt="Collage art circle"/>
        </div>

        <p className="introduction__text">
            <span className="introduction__text--1">Whimsical darkness</span>
            <span className="introduction__text--2">is my special way</span>
            <span id="scroll-point" className="introduction__text--3">to force my light</span>
            <span className="introduction__text--4">to invite my shadow</span>
            <span className="introduction__text--5">for a dance</span>
            <span className="introduction__text--6">so I can refrain</span>
            <span className="introduction__text--7">from choosing</span>
            <span className="introduction__text--8">sides</span>
            <span className="flex-wrap">
              <span className="introduction__text--dot">.</span>
            </span>
        </p>

            <button className="introduction__btn">
              <Link to="/work">
              <span className="introduction__btn--1">Work</span>
              <span className="introduction__btn--2">Collage<hr className='introduction__hr'/>Illustration</span>
              </Link>
            </button>

        <img src="img/home/home-bottom-sketch.jpg" className="introduction__bottom-image" alt="Line art sketch"/>
      </section>
    </Layout>
  )
}

export default Home