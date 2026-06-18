import { useEffect, useState } from "react";
import { useParams, NavLink, Link } from "react-router-dom";
// import {
//   getRestaurant,
//   listReviews,
//   createReview,
//   generateBlurb,
// } from "@/lib/api";
import Rating from "../../components/Rating/Rating";
import { ArrowLeft, MapPin, Sparkles } from "lucide-react";
import { toast } from "sonner";
import "./RestaurantDetail.css";
import { featured, reviews as rev } from "../../data/mockData";

export default function RestaurantDetail() {
  const { id } = useParams();
  const [items, setItems] = useState(featured);
  const [selectedDish, setSelectedDish] = useState(null);
  const r = featured[id - 1];
  //   const [r, setR] = useState(null);
  const [reviews, setReviews] = useState(rev);
  const [form, setForm] = useState({
    author_name: "",
    rating: 5,
    title: "",
    body: "",
  });

  //   const [blurb, setBlurb] = useState("");
  //   const [loadingBlurb, setLoadingBlurb] = useState(false);

  //   useEffect(() => {
  //     getRestaurant(id)
  //       .then(setR)
  //       .catch(() => {});
  //     listReviews(id)
  //       .then(setReviews)
  //       .catch(() => {});
  //   }, [id]);

  const handleReview = async (e) => {
    //   e.preventDefault();
    //   if (!form.author_name || !form.title || !form.body) {
    //     toast.error("Please fill all fields");
    //     return;
    //   }
    //   try {
    //     const review = await createReview({
    //       ...form,
    //       restaurant_id: id,
    //       rating: Number(form.rating),
    //     });
    //     setReviews([review, ...reviews]);
    //     setForm({ author_name: "", rating: 5, title: "", body: "" });
    //     const updated = await getRestaurant(id);
    //     setR(updated);
    //     toast.success("Review published");
    //   } catch {
    //     toast.error("Could not save review");
    //   }
  };

  //   const handleBlurb = async () => {
  //     if (!r) return;

  //     setLoadingBlurb(true);

  //     try {
  //       const res = await generateBlurb({
  //         name: r.name,
  //         cuisine: r.cuisine,
  //         vibe: r.tagline,
  //         kind: "restaurant",
  //       });

  //       setBlurb(res.blurb);
  //     } catch {
  //       toast.error("AI blurb failed");
  //     } finally {
  //       setLoadingBlurb(false);
  //     }
  //   };

  //   if (!r) {
  //     return <div className="loading">Loading...</div>;
  //   }

  return (
    <div className="restaurant-detail">
      {/* HERO */}
      <div className="hero">
        <img src={r.image_url} alt={r.name} />

        <div className="hero-overlay" />

        <div className="hero-content">
          <Link to="/restaurants" className="back-link">
            <ArrowLeft size={14} />
            Back to discovery
          </Link>

          <span className="eyebrow">
            {r.cuisine}
            {r.is_hidden_gem && " · Hidden Gem"}
          </span>

          <h1>{r.name}</h1>

          <p className="tagline">{r.tagline}</p>
        </div>
      </div>

      {/* MAIN */}
      <section className="content">
        <div className="left">
          {/* INFO ROW */}
          <div className="info-row">
            <div>
              <span className="eyebrow">Rating</span>
              <div className="rating-box">
                <Rating value={r.rating} size={20} />
                <span className="rating-value">
                  {r.rating?.toFixed(1) || "—"}
                </span>
              </div>
            </div>

            <div>
              <span className="eyebrow">Where</span>
              <div className="location">
                <MapPin size={16} />
                {r.neighborhood}, {r.city}
              </div>
            </div>

            <div>
              <span className="eyebrow">Price</span>
              <div>{r.price_range}</div>
            </div>

            {r.chef_name && (
              <div>
                <span className="eyebrow">Chef</span>
                <div>{r.chef_name}</div>
              </div>
            )}
          </div>

          {/* DESCRIPTION */}
          <p className="description">{r.description}</p>

          {/* AI BLURB */}
          {/* <div className="ai-section">
            <button
              onClick={handleBlurb}
              disabled={loadingBlurb}
              className="ai-btn"
            >
              <Sparkles size={14} />
              {loadingBlurb ? "Writing..." : "Generate editor's blurb"}
            </button>

            {blurb && (
              <div className="ai-box">
                <span className="eyebrow">Editor's Note · Dinior AI</span>
                <p>{blurb}</p>
              </div>
            )}
          </div> */}

          {/* DISHES */}
          {r.signature_dishes?.length > 0 && (
            <div className="section">
              <span className="eyebrow">Signature dishes</span>
              <ul className="dishes">
                {r.signature_dishes.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          )}

          {/* menu */}
          {r.menu?.length > 0 && (
            <div className="section">
              <span className="eyebrow">Specialized Menu</span>
              <div className="gallery">
                {r.menu.slice(0, 3).map((g, index) => (
                  <div
                    className="gallery-item"
                    key={index}
                    onClick={() => setSelectedDish(g)}
                  >
                    <img src={g.image} alt={g.name} />
                    <div className="overlay">
                      <h4>{g.name}</h4>
                      <p>{g.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="menu-btn-container">
                <NavLink to={`/menu/${id}`} className="all-restaurants-link">
                  View Full Menu →
                </NavLink>
              </div>
            </div>
          )}

          {selectedDish && (
            <div
              className="modal-backdrop"
              onClick={() => setSelectedDish(null)}
            >
              <div className="dish-modal" onClick={(e) => e.stopPropagation()}>
                <button
                  className="close-btn"
                  onClick={() => setSelectedDish(null)}
                >
                  ✕
                </button>

                <img src={selectedDish.image} alt={selectedDish.name} />

                <div className="dish-content">
                  <div className="dish-header">
                    <div>{selectedDish.name}</div>

                    <span
                      className={selectedDish.isVeg ? "veg-tag" : "nonveg-tag"}
                    >
                      {selectedDish.isVeg ? "Veg" : "Non Veg"}
                    </span>
                  </div>

                  <p className="dish-price">{99}</p>

                  <p className="dish-description">{selectedDish.description}</p>
                </div>
              </div>
            </div>
          )}

          {/* GALLERY */}
          {r.gallery?.length > 0 && (
            <div className="section">
              <span className="eyebrow">From the kitchen</span>
              <div className="gallery">
                {r.gallery.map((g) => (
                  <img key={g} src={g} alt="" />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* REVIEWS */}
        <div className="right">
          <div className="sticky">
            <span className="eyebrow">Reviews</span>
            <h3>What guests said.</h3>

            <form onSubmit={handleReview} className="review-form">
              <input
                placeholder="Your name"
                value={form.author_name}
                onChange={(e) =>
                  setForm({ ...form, author_name: e.target.value })
                }
              />

              <input
                placeholder="Headline"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />

              <textarea
                placeholder="Tell us about the meal..."
                rows={3}
                value={form.body}
                onChange={(e) => setForm({ ...form, body: e.target.value })}
              />

              <div className="form-bottom">
                <select
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: e.target.value })}
                >
                  {[5, 4, 3, 2, 1].map((n) => (
                    <option key={n} value={n}>
                      {n} stars
                    </option>
                  ))}
                </select>

                <button type="submit">Publish</button>
              </div>
            </form>

            <div className="reviews">
              {reviews.map((rv) => (
                <div key={rv.id} className="review">
                  <Rating value={rv.rating} size={14} />
                  <h4>{rv.title}</h4>
                  <p>{rv.body}</p>
                  <span>— {rv.author_name}</span>
                </div>
              ))}

              {reviews.length === 0 && (
                <p className="empty">Be the first to review.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
