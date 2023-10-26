import React from 'react'
import heroIm from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby kale chips meh JOMO, squid jean shorts tilde iceland
            portland leggings slow-carb fixie DIY trust fund church-key. Hella
            blog bespoke put a bird on it af. Cred retro air plant iPhone.
          </p>
        </div>
        <div className="img-container">
          <img className='img' src={heroIm} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
}

export default Hero