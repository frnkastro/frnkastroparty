import './App.css';

const App = () => {
  return (
    <main>
      <div className="content">
        <h1 className="band-name">frnk astro</h1>
        <p className="album-announcement">Full-length album coming summer 2025</p>
        <div className="button-container">
          <a href="https://frnkastro.bandcamp.com" target="_blank" className="link-btn">Bandcamp</a>
          <a href="https://soundcloud.com/frnkastro" target="_blank" className="link-btn">SoundCloud</a>
          {/* <a href="https://open.spotify.com/artist/YOUR-ARTIST-ID" target="_blank" className="link-btn">Spotify</a> */}
          <a href="https://instagram.com/frnkastro" target="_blank" className="link-btn">Instagram</a>
          <a href="https://facebook.com/frnkastro" target="_blank" className="link-btn">Facebook</a>
        </div>
      </div>
    </main>
  );
}

export default App;
