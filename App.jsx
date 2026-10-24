import "./App.css";

export default function App() {
  return (
    <main>
      <section className="landing" aria-labelledby="landing-title">
        <div className="landing__content">
          <p className="landing__eyebrow">Welcome to</p>
          <h1 id="landing-title">Paradise Nursery</h1>
          <p className="landing__description">
            Bring the beauty of nature into your home.
          </p>
          <a className="landing__button" href="#plants">
            Get Started
          </a>
        </div>
      </section>
      <section className="plants" id="plants" aria-labelledby="plants-title">
        <h2 id="plants-title">Grow your own paradise</h2>
        <p>Explore the world of Paradise Nursery and find a little more green.</p>
      </section>
    </main>
  );
}
