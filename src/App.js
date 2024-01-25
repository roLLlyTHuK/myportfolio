import { Routes, Route, useLocation } from 'react-router-dom';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import Home from './containers/home/index';
import About from './containers/about/index';
import Skills from './containers/skills/index';
import Portfolio from './containers/portfolio/index';
import Resume from './containers/resume/index';
import Contact from './containers/contact/index';
import NavBar from './components/navBar/index';
import { particles } from './utils/particles';
import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [init, setInit] = useState(false);
  const location = useLocation();
  const renderParticlesHome = location.pathname === '/';
  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="App">
      {/* particles.js */}
      {renderParticlesHome && init && (
        <Particles id="tsparticles" options={particles} init={init} />
      )}

      {/* <NavBar /> */}
      <NavBar />
      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
