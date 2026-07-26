import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Shows = () => {
  useEffect(() => {
    const scriptSrc = "https://widgetv3.bandsintown.com/main.min.js";
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.charset = "utf-8";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }

    return undefined;
  }, []);

  return (
    <main>
      <div className="content">
        <h1 className="band-name">frnk astro</h1>
        <p className="sub-headline">Upcoming Shows</p>

        <div className="button-container">
          <div className="primary-buttons">
            <Link to="/" className="back-link" aria-label="Back to home">
              ← home
            </Link>
          </div>
        </div>

        <div className="shows-container">
          <a
            href="#shows"
            className="bit-widget-initializer"
            data-artist-name="id_15658007"
            data-app-id="9e2449ba87f146a930f5d51e47c59f12"
            aria-label="Bandsintown shows widget"
          >
            Loading shows...
          </a>
        </div>
      </div>

      <footer className="footer">Denver, CO • frnkastroparty@gmail.com</footer>
    </main>
  );
};

export default Shows;
