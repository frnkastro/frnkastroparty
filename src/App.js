import './App.css';

const App = () => {
  return (
    <main style={{ 
      backgroundImage: "url('./images/nebula.jpg')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      width: '100vw' 
    }}>
      <div className="content">
        <h1 className="band-name">frnk astro</h1>
        <p className="album-announcement">Full-length album coming summer 2025</p>
        <a href="https://soundcloud.com/frnkastro" className="bandcamp-link">
          Listen on SoundCloud
        </a>
      </div>

      {/* Fireflies remain as background elements */}
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
  );
}

export default App;
