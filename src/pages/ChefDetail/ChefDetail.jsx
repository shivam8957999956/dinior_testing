import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Award } from "lucide-react";
import { chefs, chefsPlates } from "../../data/mockData";
import "./ChefDetail.css";
import { useEffect, useState } from "react";

function ChefDetail() {
  const { id } = useParams();
  const [selectedPlate, setSelectedPlate] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const c = chefs.find((x) => x.id === Number(id));

  // if (!c) return <Navigate to="/chefs" />;

  // const venue = restaurants.find((r) => r.id === c.venueId);
  const posts = chefsPlates.filter((p) => p.chefId === Number(id));

  return (
    <div className="chef-detail-page">
      {/* Back */}
      <section className="back-section">
        <Link to="/chefs" className="back-link">
          <ArrowLeft size={14} />
          All chefs
        </Link>
      </section>

      {/* Hero */}
      <section className="chef-hero">
        <div className="chef-info">
          <p className="label-eyebrow">{c.style}</p>

          <h1 className="chef-title">
            {c.name.split(" ")[0]}
            <br />
            <em>{c.name.split(" ").slice(1).join(" ")}.</em>
          </h1>

          <p className="chef-bio">{c.bio}</p>

          <div className="accolades">
            {c.accolades.map((a) => (
              <span key={a} className="badge">
                <Award size={12} />
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="chef-image-section">
          <img src={c.avatar} alt={c.name} />

          <div className="chef-stats">
            <div>
              <p className="label-eyebrow">Following</p>
              <h3>{c.followers}</h3>
            </div>

            <div>
              <p className="label-eyebrow">Handle</p>
              <h3>{c.handle}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="showcase-section">
        <div className="container">
          <p className="label-eyebrow">The Showcase</p>
          <h2>Signature plates.</h2>

          <div className="showcase-grid">
            {c.showcase.map((src, i) => (
              <div className="showcase-card" key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant */}
      {/* {venue && (
        <section className="venue-section">
          <div className="venue-image">
            <img src={venue.hero} alt={venue.name} />
          </div>

          <div className="venue-content">
            <p className="label-eyebrow">Find {c.name.split(" ")[0]} at</p>

            <h2>{venue.name}</h2>

            <p>{venue.bio}</p>

            <Link to={`/restaurants/${venue.id}`} className="visit-btn">
              Visit restaurant
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      )} */}

      {/* Posts */}
      {posts.length > 0 && (
        <section className="posts-section">
          <h2>Recent posts.</h2>

          <div className="posts-grid">
            {posts.map((p) => (
              <div
                className="post-card"
                key={p.id}
                onClick={() => {
                  setSelectedPlate(p);
                  setCurrentImage(0);
                }}
              >
                <img src={p.images[0]} alt={p.name} />

                <h3>{p.name}</h3>

                <p>"{p.description}"</p>
              </div>
            ))}
          </div>
          {selectedPlate && (
            <div
              className="modal-overlay"
              onClick={() => setSelectedPlate(null)}
            >
              <div className="plate-modal" onClick={(e) => e.stopPropagation()}>
                <img
                  src={selectedPlate.images[currentImage]}
                  alt={selectedPlate.name}
                />

                <div className="plate-overlay">
                  <h2>{selectedPlate.name}</h2>
                  <p>{selectedPlate.description}</p>
                </div>

                <button
                  className="prev-btn"
                  onClick={() =>
                    setCurrentImage(
                      currentImage === 0
                        ? selectedPlate.images.length - 1
                        : currentImage - 1,
                    )
                  }
                >
                  ❮
                </button>

                <button
                  className="next-btn"
                  onClick={() =>
                    setCurrentImage(
                      (currentImage + 1) % selectedPlate.images.length,
                    )
                  }
                >
                  ❯
                </button>

                <button
                  className="close-btn"
                  onClick={() => setSelectedPlate(null)}
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
export default ChefDetail;
