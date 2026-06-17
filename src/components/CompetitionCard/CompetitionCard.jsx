import "./CompetitionCard.css";
import { NavLink } from "react-router-dom";
import { Trophy, Calendar } from "lucide-react";
function CompetitionCard({ c, index = 0 }) {
  const deadline = new Date(c.deadline);
  const event = new Date(c.event_date);

  return (
    <NavLink
      to={`/competitions/${c.id}`}
      className="competition-card"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="competition-image-container">
        <img
          src={c.cover_image}
          alt={c.title}
          className="competition-image"
          loading="lazy"
        />
      </div>

      <div className="competition-content">
        <span className="competition-label">
          <Trophy size={14} />
          Competition · {c.city}
        </span>

        <h3 className="competition-title">{c.title}</h3>

        <p className="competition-summary">{c.summary}</p>

        <div className="competition-details">
          <div className="detail-box">
            <div className="detail-label">Prize</div>
            <div className="detail-value">{c.prize}</div>
          </div>

          <div className="detail-box">
            <div className="detail-label">Event</div>
            <div className="detail-value event-date">
              <Calendar size={14} />
              {event.toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>

          <div className="detail-box">
            <div className="detail-label">Deadline</div>
            <div className="deadline-value">
              {deadline.toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
              })}
            </div>
          </div>

          <div className="detail-box">
            <div className="detail-label">Entries</div>
            <div className="detail-value">{c.participants_count}</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default CompetitionCard;
