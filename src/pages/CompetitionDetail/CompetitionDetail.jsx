import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import { getCompetition, registerCompetition } from "@/lib/api";
import { ArrowLeft, Calendar, Trophy, MapPin, Users } from "lucide-react";
import { toast } from "sonner";
import "./CompetitionDetail.css";
import { comps } from "../../data/mockData";

function CompetitionDetail() {
  const { id } = useParams();
  const [c, setC] = useState(comps[id - 1]);
  const [registered, setRegistered] = useState(false);

  //   useEffect(() => {
  //     getCompetition(id)
  //       .then(setC)
  //       .catch(() => {});
  //   }, [id]);

  const handleRegister = async () => {
    // try {
    //   const res = await registerCompetition(id);

    //   setC({ ...c, participants_count: res.participants_count });
    //   setRegistered(true);

    toast.success("You're in. We'll be in touch.");
    // } catch {
    //   toast.error("Registration failed");
    // }
  };

  if (!c) {
    return <div className="cd-loading">Loading...</div>;
  }

  return (
    <div className="cd-page">
      {/* HERO */}
      <div className="cd-hero">
        <img src={c.cover_image} alt={c.title} />

        <div className="cd-overlay" />

        <div className="cd-hero-content">
          <Link to="/competitions" className="cd-back">
            <ArrowLeft size={14} />
            Back to competitions
          </Link>

          <span className="cd-eyebrow">Hosted by {c.host}</span>

          <h1>{c.title}</h1>

          <p className="cd-summary">{c.summary}</p>
        </div>
      </div>

      {/* CONTENT */}
      <section className="cd-section">
        {/* LEFT */}
        <div className="cd-main">
          <p className="cd-description">{c.description}</p>

          {c.categories?.length > 0 && (
            <div className="cd-tags">
              {c.categories.map((cat) => (
                <span key={cat} className="cd-tag">
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="cd-sidebar">
          <div className="cd-card">
            {/* Prize */}
            <div className="cd-item">
              <div className="cd-label">
                <Trophy size={14} /> Prize
              </div>
              <div className="cd-value big">{c.prize}</div>
            </div>

            {/* Event date */}
            <div className="cd-item">
              <div className="cd-label">
                <Calendar size={14} /> Event date
              </div>
              <div className="cd-value">
                {new Date(c.event_date).toLocaleDateString(undefined, {
                  dateStyle: "long",
                })}
              </div>
            </div>

            {/* Deadline */}
            <div className="cd-item">
              <div className="cd-label">
                <Calendar size={14} /> Deadline
              </div>
              <div className="cd-value danger">
                {new Date(c.deadline).toLocaleDateString(undefined, {
                  dateStyle: "long",
                })}
              </div>
            </div>

            {/* Location */}
            <div className="cd-item">
              <div className="cd-label">
                <MapPin size={14} /> Location
              </div>
              <div className="cd-value">{c.city}</div>
            </div>

            {/* Participants */}
            <div className="cd-item">
              <div className="cd-label">
                <Users size={14} /> Entries
              </div>
              <div className="cd-value">
                {c.participants_count} chefs registered
              </div>
            </div>

            {/* Button */}
            <button
              className="cd-btn"
              disabled={registered}
              onClick={handleRegister}
            >
              {registered ? "Registered" : "Register your kitchen"}
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
}
export default CompetitionDetail;
