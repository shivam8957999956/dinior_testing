import { useEffect, useMemo, useState } from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import { Search } from "lucide-react";
import "./FullMenu.css";
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

function FullMenu() {
  const { id } = useParams();
  const [items, setItems] = useState(featured[id - 1].menu);
  const [filter, setFilter] = useState({ category: "all", isVeg: null });
  const [q, setQ] = useState("");
  const hotel = featured[id - 1];
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (hotel?.menu) {
      const uniqueCategories = [
        "all",
        "Veg",
        "Non Veg",
        ...new Set(hotel?.menu.map((item) => item.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [hotel]);

  // useEffect(() => {
  //   const params = { cuisine: filter.cuisine };
  //   if (filter.hidden) params.hidden = true;
  //   if (q) params.q = q;

  //   listRestaurants(params)
  //     .then(setItems)
  //     .catch(() => {});
  // }, [filter, q]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  useEffect(() => {
    let data = [...featured[id - 1]?.menu];

    // filter by category
    console.log(filter.category);
    if (filter.category === "Veg") {
      data = data.filter((r) => r.isVeg === true);
    } else if (filter.category === "Non Veg") {
      data = data.filter((r) => r.isVeg === false);
    } else if (filter.category !== "all") {
      data = data.filter((r) => r.category === filter.category);
    }

    // search query
    if (q.trim()) {
      const query = q.toLowerCase();
      data = data.filter(
        (r) =>
          r.name.toLowerCase().includes(query) ||
          r.description.toLowerCase().includes(query),
      );
    }
    setItems(data);
  }, [filter, q]);

  const categoryList = useMemo(() => categories, []);
  return (
    <div className="restaurants-page">
      {/* Header */}
      <div className="header-grid">
        <div className="header-text">
          <span className="eyebrow">Full Menu</span>
          <h1>{hotel.name}</h1>
          <p>{hotel.tagline}</p>
        </div>

        {/* Search */}
        <div className="search-wrapper">
          <Search className="search-icon" size={16} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, description..."
            className="search-input"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="filters-bar">
        <span className="eyebrow">Category</span>

        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter((f) => ({ ...f, category: c }))}
            className={`chip ${filter.category === c ? "active" : ""}`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Content */}
      {items?.length === 0 ? (
        <div className="empty-state">
          <p>No tables match. Try another cuisine.</p>
        </div>
      ) : (
        <div className="grid">
          {items.map((r, i) => (
            <div className="menu-card" key={i}>
              <div className="menu-image-container">
                <img className="menu-image" src={r.image} alt={r.name} />
              </div>

              <div className="menu-content">
                <div className="menu-top">
                  <span className="menu-type">{r.category}</span>
                  <span className={`menu-veg ${r.isVeg ? "veg" : "nonveg"}`}>
                    {r.isVeg ? "Veg" : "Non Veg"}
                  </span>
                </div>

                <h2 className="menu-name">{r.name}</h2>

                <p className="menu-desc">{r.description}</p>

                <div className="menu-footer">
                  <span className="menu-price">₹{456}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FullMenu;
