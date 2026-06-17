import "./Rating.css";
import { Star } from "lucide-react";

function Rating({ value = 0, size = 16 }) {
  const rounded = Math.round(value);

  return (
    <div className="rating" aria-label={`Rating ${value}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.5}
          className={i <= rounded ? "star star-on" : "star star-off"}
        />
      ))}
    </div>
  );
}

export default Rating;
