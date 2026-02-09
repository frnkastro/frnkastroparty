import "./TinyDesk.css";
import { Link } from "react-router-dom";

const TinyDesk = () => {
  return (
    <main className="tiny-desk">
      <div className="tiny-content">
        <div className="tiny-top">
          <Link to="/" className="tiny-back" aria-label="Back to home">
            ← home
          </Link>
        </div>

        <h1 className="tiny-title">NPR Tiny Desk Contest 2026</h1>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/k0mKQIQ50KY"
            title="frnk astro – Jesus In a Prius (Tiny Desk Contest 2026)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="tiny-copy">
          Live from a basement in Denver, Colorado — frnk astro performs{" "}
          <strong>“Jesus In a Prius”</strong> for the 2026 NPR Tiny Desk Contest.
        </p>
      </div>
    </main>
  );
};

export default TinyDesk;
