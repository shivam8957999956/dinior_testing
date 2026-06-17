import "./RestaurantCard.css";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import Rating from "../Rating/Rating";

function RestaurantCard({ r, big = false, index = 0 }) {
  return (
    <Link
      to={`/restaurants/${r.id}`}
      className="restaurant-card"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className={`restaurant-image-container ${big ? "big-card" : ""}`}>
        <img
          src={r.image_url}
          alt={r.name}
          className="restaurant-image"
          loading="lazy"
        />
      </div>

      <div className="restaurant-content">
        <div className="restaurant-top">
          <span className="restaurant-cuisine">{r.cuisine}</span>

          {r.is_hidden_gem && <span className="hidden-gem">Hidden Gem</span>}
        </div>

        <h3 className={`restaurant-name ${big ? "big-title" : ""}`}>
          {r.name}
        </h3>

        <p className="restaurant-tagline">{r.tagline}</p>

        <div className="restaurant-footer">
          <span className="restaurant-location">
            <MapPin size={14} />
            {r.neighborhood}, {r.city}
          </span>

          <Rating value={r.rating || 0} />
        </div>
      </div>
    </Link>
  );
}
export default RestaurantCard;
