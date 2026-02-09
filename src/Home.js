import "./App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className="content">
        <h1 className="band-name">frnk astro</h1>
        <p className="sub-headline">4-piece basement rock from Denver, CO</p>

        <div className="button-container">
          <div className="primary-buttons">
            {/* internal route now */}
            <Link
              to="/tiny-desk"
              className="link-btn primary"
              aria-label="View NPR 2026 Tiny Desk Contest page"
            >
              Watch Tiny Desk
            </Link>

            <a
              href="mailto:frnkastroparty@gmail.com"
              className="link-btn primary"
              aria-label="Book a show with frnk astro"
            >
              Book a Show
            </a>
          </div>

          <div className="secondary-buttons">
            <a
              href="https://frnkastro.bandcamp.com"
              target="_blank"
              rel="noreferrer"
              className="link-btn secondary"
              aria-label="Listen to frnk astro on Bandcamp"
            >
              Listen on Bandcamp
            </a>
            <a
              href="https://soundcloud.com/frnkastro"
              target="_blank"
              rel="noreferrer"
              className="link-btn secondary"
              aria-label="Listen to frnk astro on SoundCloud"
            >
              Listen on SoundCloud
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">Denver, CO • frnkastroparty@gmail.com</footer>
    </main>
  );
};

export default Home;
