import React, { useEffect } from 'react'
import Layout from '../layout/Layout'
import YouTubeVideo from '../components/YouTubeVideo'
import BackButton from '../components/BackButton'
import GoTop from '../components/GoTop'

const About = () => {

  useEffect(() => {
    const nav = document.getElementById('navbar')
    nav.scrollIntoView(true)
  }, [])
  

  return (
    <Layout banner='grey'>
        <div id="about-banner" className="about__banner">
          <img src="/img/about/top-banner-about.jpg" className="about__banner-img" alt="about-banner" />
          <div className="about__banner-title">
            about
          </div>
        </div>

        <div className='about'>
        <section className='about__top-section'>
          <div className='about__intro'>
            <h4 className='heading-4'>Who are you?</h4>
            <p className='about__quote'>I am many things, some can be defined <br/>and some cannot. <br/> As we all are.</p>
            <p className='about__strong'>My name is Limor Sadot</p>
            <p className='about__text about__text--black'>
              I was born and raised in Israel <br/>
              (My Hebrew name means : "fields of myrrh fragrance")
            </p>
            <p className='about__text'>
              I'm a collage and mixed-media artist, a designer and an illustrator, a spiritual seeker, a tree hugger and a mom.<br/>
              Art is my main tool for searching and growing.
            </p>
          </div>
          <div className='about__intro-images'>
            <img className="about__intro-images--1" src="/img/about/intro-bubble.png" alt="bubble-1" />
            <img className="about__intro-images--2" src="/img/about/intro-profile.png" alt="bubble-2" />
          </div>

          <div className='about__declaration'>
            <h4 className='heading-4 margin-bottom-realy-small'>Artist Declaration</h4>
            <p className='about__text'>
              Between the reduction and the multiplicity, 
              between the art lines and the collage pieces becoming one, 
              between the darkness and the great light that expresses itself in the spectrum of all colors, 
              this is where I live.
            </p>
            <p className='about__text'>
              I move between the poles, 
              seeking to discover the secrets within me through these polar instruments of consciousness, 
              to explore and understand my existence through them and to scrape from them the source of truth. 
              They both touch on the deity, the infinity planted in each of us, 
              and for the sake of my research I activate my two brain lobes and play between them a ping pong game of art. 
              The male and the female, wisdom and knowledge, lines and stains.
              <br />
              The two faces of my work, my two main paths are: 
              mixed media collage, on one hand, and line art illustration on the other hand, 
              can seem opposite or different and yet they both give me the chance 
              to deal with complexity vs Wholeness intuitively and these are the vital tools 
              that I need to explore the diversity of the human story.
            </p>

            <p className='about__text'>
              <span className='about__strong'>My "Collage & Mixed media" </span>
              is a spotty and intuitive tool, I feel at home with it. 
              It seeks truth and harmony in the compound. 
              It stems from my subconscious, both private and collective as a human being. 
              I was always influenced by old legends, spiritual wisdom, philosophies of different 
              cultures and archetypes and I use them in my work. Collage represents to me 
              the more feminine knowledge and the longer process for the exploration of truth. 
              It is a way that is unfolding through trial and eror, 
              understanding one thing from another until arriving to the hole truth that exist 
              in the harmonious wholeness of the one law. 
            </p>

            <p className='about__text'>
              <span className='about__strong'>My "Line ART" Illustrations </span>
              on the other hand, represent to me a more male type of search. 
              They are mostly intuitive dynamic lines that treasure within them, 
              a bit like seeds, a complete wisdom that already resides within them 
              but they still do not have all the intelligence sufficient to 
              discover and develop the whole story. 
              They are sketches-like, limitation of wondering loose thoughts. 
              As for the subject of work - I mostly depict imaginary human portraits 
              with open eyes to the truth but with their mouth closed and that creates a tension. 
              They all seem to consciously know the secret of life but cannot tell it yet. 
              My secret of life is that I'm creating these complex and entangled figures 
              and families of humans (that perhaps exist in a parallel dimension) and they 
              are my imaginary friends and an on-going obsession that helps me carrying 
              the burden of pre-mature consciousness and keeping humanity human. 
              Faces are inner reflections, slivers of souls that are briefly depicted 
              in the contours of a limited truth so as long as I deal with the human face 
              I am portraying humanity. 
              Faces, my Faces... are watching, observing, Seeing, feeling, knowing, 
              but not communicating it yet and not fighting loudly. 
              They are quiet and this is their real fight.
            </p>
            <div className='about__signature'>
              <img src="/img/about/signature.png" alt="Limor Sadot" className='about__signature-image'/>
            </div>
          </div>

          <div className='about__declaration-image'>
            <img className='about__declaration-circle' src='/img/about/intro-half-circle.png' alt='bubble-3' />
          </div>
        </section>

        <div className='about__interview-header'>
          <img src="/img/about/interview-image.jpg" alt="interview" className='about__interview-image' />
          <div className='about__interview-title'>
            <img src="/img/about/three-bubbles.png" alt="bubbles" className="about__interview-bubbles" />
            <h3 className='heading-3'>a short interview</h3>
          </div>
        </div>

        <section className='about__interview'>
          <div className='about__interview-text'>
            <h4 className='heading-4'>What drew you to collage and intuitive art?</h4>
            <p className='about__text'>
              I've been studying and working as a visual communication artist for 
              over 25 years in the field of advertising and graphic design. 
              Since my early art and design studies I fell in love with 
              the collage technique that was fast and intuitive and felt 
              like a truth telling style for me, and so it was with intuitive fast ink drawing. 
              Watercolors, oil, realistic pencil drawing or charcoal works needed 
              a more careful and meticulous attitude, but collage felt 
              like freedom to the wild creature in me. 
              Tearing, cutting and pasting with less mind and more heart 
              seemed like a good way to visually tell my story in a way that 
              I couldn’t really make any “mistake”. 
              I think collage is like channeling your inner world out 
              to the paper fast so the skills you really need is to be brave 
              enough to let go and to be open enough to allow it to simply 
              come out to the light. It’s actually like giving birth, a precipitous birth, 
              and you never know exactly how this baby will look 
              but you know he will somehow look like you.
            </p>

            <h4 className='heading-4'>What are your major influences?</h4>
            <p className='about__text'>
              Well, obviously advertising, magazines, urban-living and design 
              that was my line of work and profession for so many years are big influences. 
              But ever since I remember myself I was a spiritual seeker - asking questions, 
              looking for answers about life, how and why the world ticks the way it ticks? 
              Is there a system? a pattern? a secret code? a way out? a meaning to this whole charade? 
              I needed to find some answers myself.
              <br />
              The spiritual path had led me to do my personal leg work around the world. 
              I traveled to many countries and studied cultures, philosophies, religions 
              and different ways of thinking and seeing the world: 
              from Zen-Buddhism through the native American philosophies, 
              and the last years, back in Israel - the secrets of Jewish mysticism. 
              The last place I've lived before returning back to Israel was Japan. 
              I lived a few years in there, fell in love with this culture, got married 
              and gave birth there so that is certainly a MAJOR influence to my life and art, 
              probably more than just in this lifetime.
            </p>

            <h4 className='heading-4'>How do you apply spirituality to your artistic work?</h4>
            <p className='about__text'>
              When you live a spiritual life, a life of awake awareness 
              it is reflected in everything you do because you are connected 
              to the root and the root is above everything (and not below as is commonly thought). 
              From this, everything you operate in the world of action, the world of matter, 
              will receive expression that stems from this awareness: 
              making a cup of tea or talking to a friend or even cleaning your house 
              and certainly creating a work of art. As long as you create out of deep attention, 
              you “suck in” lights from a higher or deeper source of consciousness 
              and for me it means that I do not create just to show myself or because 
              something pressures me from within to express itself emotionally or conceptually 
              or to release some mental stress, which may have been good for me in the past.  
              I believe that quieting the heart or self-satisfaction in my artistic process 
              is only a necessary step in order to climb higher so I can connect and touch 
              my soul by expressing the unique spark of infinity within me that understands 
              the structural laws of the universe.
            </p>

            <h4 className='heading-4'>what are your artistic methods?</h4>
            <p className='about__text'>
              I see myself as an inventor and a researcher in my artistic work. 
              I use all my skills from cut and paste analogue collage 
              to illustration and digital work. I’m really a mixer and matcher: 
              digital figures that I create especially with photographs that I take 
              and took from my life around the world, found objects, acrylic paints, 
              ink doodlings, pieces of advertising from old magazines or brown old book pages. 
              What motivates me is that I'm trying to invent with all these diverse tools 
              and materials a new and unique collage language in each series of works, 
              this is the inventor side of me. 
            </p>

            <h4 className='heading-4'>What about the researcher side?</h4>
            <p className='about__text'>
              When you work in series, it's like creating families of work 
              and when you research a family you deal with both: similarity and uniqueness 
              in different percentages. A family is really like a hologram, you decide 
              if to look at what unites them or what differentiates them and separates them 
              from each other. Creating families helps me research my inner “family self” 
              spiritually as well, and to unite the separateness ego parts within me. 
              Comparing them is a left brain activity, and uniting them and seeing them 
              as a family, as a whole - is my right brain activity, that reminds me 
              that all in all I am one and we are all one in this drama of opposites. 
              Trying to hold both sides together in harmony and unify the opposites 
              is the most important spiritual task, I believe. 
            </p>

            <h4 className='heading-4'>what’s next?</h4>
            <p className='about__text'>
              The last couple of years I left the design field to fulfill my dream
              to purely practice art - so I participated in many group exhibitions, 
              and also fullfiled a long calling to “collage” my two big passions together: 
              spirituality and art so I dedicated my life completely to teach spirituality 
              through collage art in unique courses and workshops. I only hope I've helped 
              my students to ask some vital questions about life, after all this is what 
              I think I know to do best and perhaps this is my greatest talent of all - asking questions 
              and waiting for the universe to answer them, and then... to simply listen. 
              So what’s next? just waiting for the next question to pop up and lead me to my next adventure.            
            </p>

            <div className='about__back-btn'>
              <BackButton />
            </div>

            <div className='about__go-top'>
              <GoTop/>
            </div>

          </div>

          <div className='about__interview-videos'>
            <YouTubeVideo link="https://www.youtube.com/embed/nt2idwDFzH0"/>
            <YouTubeVideo link="https://www.youtube.com/embed/PUjYCkNugtg"/>
            <img src="/img/about/interview-bottom-image.png" alt="faces" className='about__interview-bottom-image' />
          </div>
        </section>
      </div>
      
    </Layout>
  )
}

export default About