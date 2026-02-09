import './App.css';

const App = () => {
  return (
    <main>
      <div className="content">
        <h1 className="band-name">frnk astro</h1>
        <p className="album-announcement">4-piece basement rock from Denver, CO</p>
        <div className="button-container">
          <div className="primary-buttons">
            <a href="https://youtu.be/k0mKQIQ50KY?si=DUZ4_jLzafmhaP8X" target="_blank" className="link-btn primary" aria-label="Watch NPR 2026 Tiny Desk Contest Entry">Watch Tiny Desk</a>
            <a href="mailto:frnkastroparty@gmail.com" className="link-btn primary" aria-label="Book a show with frnk astro">Book a Show</a>
          </div>
          
          <div className="secondary-buttons">
            <a href="https://frnkastro.bandcamp.com" target="_blank" className="link-btn secondary" aria-label="Listen to frnk astro on Bandcamp">Listen on Bandcamp</a>
            <a href="https://soundcloud.com/frnkastro" target="_blank" className="link-btn secondary" aria-label="Listen to frnk astro on SoundCloud">Listen on SoundCloud</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
