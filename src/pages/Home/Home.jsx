import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import FoodPostCard from "../../components/FoodPostCard/FoodPostCard";
import CompetitionCard from "../../components/CompetitionCard/CompetitionCard";
import { featured, posts, comps } from "../../data/mockData";
function Home() {
  const items = [
    "Hidden cafés",
    "Chef showdowns",
    "Off-menu tables",
    "Sourdough revolution",
    "Late-night ramen",
    "Live-fire cooking",
    "Tasting menus",
    "Pop-ups",
  ];

  return (
    <div className="home">
      {/* mainpage */}
      <div className="hero">
        <img src="/images/homepagedinior.jpeg" alt="" className="hero-bg" />

        <div className="hero-overlay"></div>

        <div className="paper-grain hero-grain"></div>

        <div className="hero-content">
          <span className="hero-label">Issue 01 — The Dining Edition</span>

          <h1 className="hero-title">
            Eat where the <em>city</em> whispers.
          </h1>

          <p className="hero-description">
            Dinior is a food magazine for the curious eater — secret cafés, chef
            showdowns, hidden tables, and a feed that tastes like the city
            you're in.
          </p>

          <div className="hero-buttons">
            <NavLink to="/restaurants" className="primary-btn">
              Discover restaurants
            </NavLink>

            <NavLink to="/feed" className="secondary-btn">
              Open the feed
            </NavLink>
          </div>
        </div>
      </div>

      {/* marqueee */}
      <section className="marquee-section">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div key={k} className="marquee-row">
              {items.map((item) => (
                <span key={`${k}-${item}`} className="marquee-item">
                  {item}
                  <span className="separator">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* featured */}
      <section className="featured-section">
        <div className="featured-header">
          <div>
            <span className="featured-label">The Editor's Table</span>

            <h2 className="featured-title">Featured this issue</h2>
          </div>

          <NavLink to="/restaurants" className="all-restaurants-link">
            All restaurants →
          </NavLink>
        </div>

        {featured.length > 0 && (
          <div className="featured-grid">
            <div className="featured-main">
              <RestaurantCard r={featured[0]} big />
            </div>

            <div className="featured-side">
              {featured.slice(1, 3).map((r, i) => (
                <RestaurantCard key={r.id} r={r} index={i + 1} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* hiddenjem */}
      <section className="hidden-gems-section">
        <div className="hidden-gems-container">
          <div className="hidden-gems-header">
            <div className="hidden-gems-title-section">
              <span className="hidden-gems-label">Unmarked doors</span>

              <h2 className="hidden-gems-title">
                Hidden gems
                <br />
                <em>worth the search.</em>
              </h2>
            </div>

            <p className="hidden-gems-description">
              The eight-seat counters, the cellar tapas bars, the cafés behind a
              curtain. These are the places that don't advertise — but everyone
              in food talks about.
            </p>
          </div>

          <div className="hidden-gems-grid">
            {featured.slice(0, 3).map((r, i) => (
              <RestaurantCard key={r.id} r={r} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FEED PREVIEW */}
      <section className="feed-section">
        <div className="section-header">
          <div>
            <span className="section-label">Off the pass</span>
            <h2 className="section-title">Tonight on the line</h2>
          </div>

          <NavLink to="/feed" className="section-link">
            Open feed →
          </NavLink>
        </div>

        <div className="feed-grid">
          {posts.slice(0, 6).map((p, i) => (
            <div key={p.id} className="feed-item">
              <FoodPostCard post={p} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* COMPETITIONS */}
      <section className="competition-section">
        <div className="competition-container">
          <div className="section-header">
            <div>
              <span className="section-label">The arena</span>
              <h2 className="section-title">Chefs in competition</h2>
            </div>

            <NavLink to="/competitions" className="section-link">
              All competitions →
            </NavLink>
          </div>

          <div className="competition-grid">
            {comps.slice(0, 2).map((c, i) => (
              <CompetitionCard key={c.id} c={c} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
