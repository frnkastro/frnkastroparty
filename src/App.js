import './App.css';
import profilepic from './profilepic.jpg'
import Particles from 'react-particles';
import tsParticleConfig from './tsParticleConfig';

const App = () => {

  return (
    <main>
      <Particles id="tsparticles" options={tsParticleConfig} />
      <img src={profilepic} className="profile-pic" alt="frnk astro in space"/>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
    </main>
  )
}

export default App;
