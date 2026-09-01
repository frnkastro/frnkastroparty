import "./App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className="content">
        <h1 className="band-name">frnk astro</h1>
        <p className="sub-headline">Denver, CO Basement Rock</p>

        <div className="button-container">
          <div className="primary-buttons">
            <Link
              to="/shows"
              className="link-btn primary"
              aria-label="View upcoming frnk astro shows"
            >
              Shows
            </Link>
          </div>

          <div className="secondary-buttons">
            <Link
              to="/videos"
              className="link-btn secondary"
              aria-label="View frnk astro videos"
            >
              Videos
            </Link>
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
            <a
              href="https://instagram.com/frnkastro"
              target="_blank"
              rel="noreferrer"
              className="link-btn secondary"
              aria-label="Please help us be cool"
            >
              Become our First Instagram Follower
            </a>
            <a
              href="mailto:frnkastroparty@gmail.com"
              className="link-btn secondary"
              aria-label="Get in touch with frnk astro"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">Denver, CO • frnkastroparty@gmail.com</footer>
    </main>
  );
};

export default Home;
