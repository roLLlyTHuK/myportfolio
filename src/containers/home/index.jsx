import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './styles.scss';

const Home = () => {
  const navigate = useNavigate();
  const handlerNavigateToContact = () => {
    navigate('/contact');
  };
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>Hello, I'm Andrii</h1>
        <h2>Fullstack Developer</h2>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: 'translateY(550px)' }}
        end={{ transform: 'translateX(0px)' }}
      >
        <div className="home__contact-me">
          <button onClick={handlerNavigateToContact}>Contact me</button>
          <a
            href={require('../../utils/Andrii_Dovhaniuk_frontend.pdf')}
            download="CV_Frontend_Dovhaniuk_Andrii.pdf"
          >
            Download CV
          </a>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
