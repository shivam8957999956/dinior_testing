import "./FoodPostCard.css";
import { useState } from "react";
import { Heart, MessageCircle, MapPin } from "lucide-react";

function FoodPostCard({ post, index = 0, onOpen }) {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();

    if (liked) return;

    setLiked(true);
    setLikes((prev) => prev + 1);
  };

  return (
    <article
      className="food-post-card"
      style={{ animationDelay: `${index * 50}ms` }}
      onClick={() => onOpen && onOpen(post)}
    >
      <div className="food-post-header">
        <img
          src={post.author_avatar}
          alt={post.author_name}
          className="author-avatar"
        />

        <div className="author-info">
          <div className="author-name">{post.author_name}</div>

          {post.location && (
            <div className="post-location">
              <MapPin size={10} />
              {post.location}
            </div>
          )}
        </div>
      </div>

      <div className="food-image-container">
        <img src={post.image_url} alt={post.caption} className="food-image" />
      </div>

      <div className="food-post-content">
        <p className="food-caption">{post.caption}</p>

        {post.restaurant_name && (
          <p className="restaurant-name-p">at {post.restaurant_name}</p>
        )}

        <div className="food-actions">
          <button className="action-btn" onClick={handleLike}>
            <Heart
              size={18}
              strokeWidth={1.7}
              className={liked ? "liked-heart" : ""}
            />
            {likes}
          </button>

          <span className="comments-count">
            <MessageCircle size={18} strokeWidth={1.7} />
            {post.comments_count}
          </span>

          {post.tags?.length > 0 && (
            <div className="tags">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default FoodPostCard;
