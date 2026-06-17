import { useEffect, useState } from "react";
import CompetitionCard from "../../components/CompetitionCard/CompetitionCard";
// import { listCompetitions } from "@/lib/api";
import "./Competitions.css";
import { comps } from "../../data/mockData";

function Competitions() {
  const [items, setItems] = useState(comps);

  // useEffect(() => {
  //   listCompetitions()
  //     .then(setItems)
  //     .catch(() => {});
  // }, []);

  return (
    <div className="competitions-page">
      {/* Header */}
      <div className="competitions-header">
        <span className="eyebrow">The arena</span>

        <h1>
          Chef <em>competitions</em>.
        </h1>

        <p>
          From pastry showdowns to live-fire arenas — every contest worth a
          chef's coat is here.
        </p>
      </div>

      {/* Grid */}
      <div className="competitions-grid">
        {items.map((c, i) => (
          <CompetitionCard key={c.id} c={c} index={i} />
        ))}
      </div>
    </div>
  );
}
export default Competitions;
