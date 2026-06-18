import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { chefs } from "../../data/mockData";
import "./Chefs.css";

function Chefs() {
  const [followed, setFollowed] = useState({});

  const toggle = (id) => {
    setFollowed((f) => ({ ...f, [id]: !f[id] }));
  };

  return (
    <div data-testid="chefs-page" className="chefs-page">
      <header className="chefs-header">
        <div className="header-left">
          <p className="label-eyebrow">The Roster · 10 chefs</p>

          <h1 className="main-title">
            The chefs <em>behind</em>
            <br />
            the plates.
          </h1>
        </div>

        <div className="header-right">
          <p>
            We don't rank chefs. We listen to them. Ten profiles. Ten kitchens.
            Ten ways to think about dinner.
          </p>
        </div>
      </header>

      <div className="chef-grid">
        {chefs.map((c, i) => (
          <article
            key={c.id}
            data-testid={`chef-card-${c.id}`}
            className="chef-card"
          >
            <Link to={`/chefs/${c.id}`} className="chef-image">
              <img src={c.avatar} alt={c.name} loading="lazy" />

              <span className="chef-number">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Link>

            <p className="label-eyebrow">{c.style}</p>

            <Link to={`/chefs/${c.id}`} className="chef-name">
              {c.name}
            </Link>

            <p className="chef-location">
              {c.venue} · {c.city}
            </p>

            <p className="chef-bio">{c.bio}</p>

            <div className="chef-footer">
              <span>{c.followers} followers</span>

              <button
                data-testid={`chef-follow-${c.id}`}
                onClick={() => toggle(c.id)}
                className={`follow-btn ${followed[c.id] ? "following" : ""}`}
              >
                {followed[c.id] ? "Following" : "Follow"}
              </button>
            </div>
          </article>
        ))}
      </div>

      <section className="apply-section">
        <div className="apply-content">
          <p className="label-eyebrow">Showcase your craft</p>

          <h2>A chef? Apply to be on the roster.</h2>

          <p>
            Curated submissions only. Five photos, one signature dish, one
            story.
          </p>
        </div>

        <button className="apply-btn">
          Submit your portfolio
          <ArrowUpRight size={16} />
        </button>
      </section>
    </div>
  );
}
export default Chefs;
