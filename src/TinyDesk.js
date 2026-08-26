import "./TinyDesk.css";
import { Link } from "react-router-dom";

const videos = [
  {
    title: "NPR Tiny Desk Contest 2026",
    src: "https://www.youtube.com/embed/k0mKQIQ50KY",
    description:
      "Live from a basement in Denver, Colorado — frnk astro performs “Jesus In a Prius” for the 2026 NPR Tiny Desk Contest.",
  },
  {
    title: "The Flu (WebMD)",
    src: "https://www.youtube.com/embed/pO4ItFRqL-k?list=RDpO4ItFRqL-k&start_radio=1",
    description:
      "Another basement-era live moment from frnk astro — “The Flu (WebMD).”",
  },
];

const TinyDesk = () => {
  return (
    <main className="tiny-desk">
      <div className="tiny-content">
        <div className="tiny-top">
          <Link to="/" className="tiny-back" aria-label="Back to home">
            ← home
          </Link>
        </div>

        <h1 className="tiny-title">Videos</h1>

        {videos.map((video) => (
          <article key={video.title} className="video-card">
            <h2 className="video-heading">{video.title}</h2>

            <div className="video-wrapper">
              <iframe
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="tiny-copy">{video.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
};

export default TinyDesk;
