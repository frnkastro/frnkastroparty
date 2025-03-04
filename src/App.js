import './App.css';

const App = () => {
  return (
    <main>
      <div className="content">
        <h1 className="band-name">frnk astro</h1>
        <p className="album-announcement">Full-length album coming summer 2025</p>
        <div className="button-container">
          <a href="https://frnkastro.bandcamp.com" target="_blank" className="link-btn" aria-label="Listen to frnk astro on Bandcamp">Bandcamp</a>
          <a href="https://soundcloud.com/frnkastro" target="_blank" className="link-btn" aria-label="Listen to frnk astro on SoundCloud">SoundCloud</a>
          {/* <a href="https://open.spotify.com/artist/YOUR-ARTIST-ID" target="_blank" className="link-btn">Spotify</a> */}
          <a href="https://instagram.com/frnkastro" target="_blank" className="link-btn" aria-label="Follow frnk astro on Instagram">Instagram</a>
          <a href="https://facebook.com/frnkastro" target="_blank" className="link-btn" aria-label="Follow frnk astro on Facebook">Facebook</a>
        </div>
      </div>
    </main>
  );
}
