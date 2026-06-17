import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import "./Restaurants.css";
import { featured } from "../../data/mockData";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";

const cuisines = [
  "all",
  "French-Moroccan",
  "Café",
  "Japanese",
  "Mediterranean",
  "Spanish",
  "Indian",
];

function Restaurants() {
  const [items, setItems] = useState(featured);
  const [filter, setFilter] = useState({ cuisine: "all", hidden: false });
  const [q, setQ] = useState("");

  // useEffect(() => {
  //   const params = { cuisine: filter.cuisine };
  //   if (filter.hidden) params.hidden = true;
  //   if (q) params.q = q;

  //   listRestaurants(params)
  //     .then(setItems)
  //     .catch(() => {});
  // }, [filter, q]);

  useEffect(() => {
    let data = [...featured];

    // filter by cuisine
    if (filter.cuisine !== "all") {
      data = data.filter((r) => r.cuisine === filter.cuisine);
    }

    // filter hidden gems
    if (filter.hidden) {
      data = data.filter((r) => r.is_hidden_gem);
    }

    // search query
    if (q.trim()) {
      const query = q.toLowerCase();
      data = data.filter(
        (r) =>
          r.name.toLowerCase().includes(query) ||
          r.city.toLowerCase().includes(query) ||
          r.neighborhood.toLowerCase().includes(query),
      );
    }

    setItems(data);
  }, [filter, q]);

  const cuisineList = useMemo(() => cuisines, []);

  return (
    <div className="restaurants-page">
      {/* Header */}
      <div className="header-grid">
        <div className="header-text">
          <span className="eyebrow">Discover</span>
          <h1>Restaurants & cafés.</h1>
          <p>
            From hidden cellars to corner cafés, find your next table — filtered
            by cuisine, neighborhood, or pure curiosity.
          </p>
        </div>

        {/* Search */}
        <div className="search-wrapper">
          <Search className="search-icon" size={16} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, neighborhood, city..."
            className="search-input"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="filters-bar">
        <span className="eyebrow">Cuisine</span>

        {cuisineList.map((c) => (
          <button
            key={c}
            onClick={() => setFilter((f) => ({ ...f, cuisine: c }))}
            className={`chip ${filter.cuisine === c ? "active" : ""}`}
          >
            {c}
          </button>
        ))}

        <button
          onClick={() => setFilter((f) => ({ ...f, hidden: !f.hidden }))}
          className={`hidden-btn ${filter.hidden ? "active" : ""}`}
        >
          Hidden gems only
        </button>
      </div>

      {/* Content */}
      {items.length === 0 ? (
        <div className="empty-state">
          <p>No tables match. Try another cuisine.</p>
        </div>
      ) : (
        <div className="grid">
          {items.map((r, i) => (
            <RestaurantCard key={r.id} r={r} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Restaurants;
