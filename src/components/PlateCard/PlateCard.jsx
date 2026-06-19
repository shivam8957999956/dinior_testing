import "./PlateCard.css";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import Rating from "../Rating/Rating";
import { chefs } from "../../data/mockData";

function PlateCard({ r, index = 0 }) {
  const chef = chefs.find((f) => Number(f.id) === Number(r.chefId));
  return (
    <Link
      to={`/restaurants/${r.id}`}
      className="restaurant-card"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className={`restaurant-image-container`}>
        <img
          src={r.images[0]}
          alt={r.name}
          className="restaurant-image"
          loading="lazy"
        />
      </div>

      <div className="restaurant-content">
        <div className="restaurant-top">
          <span className="restaurant-cuisine">{"Chef: " + chef.name}</span>
        </div>

        <h3 className={`restaurant-name`}>{r.name}</h3>

        <p className="restaurant-tagline">{r.description}</p>

        {/* <div className="restaurant-footer">
          <span className="restaurant-location">
            <MapPin size={14} />
            {r.neighborhood}, {r.city}
          </span>
          <Rating value={r.rating || 0} />
        </div> */}
      </div>
    </Link>
  );
}
export default PlateCard;
