import { useEffect, useState } from "react";
// import { listPosts, listComments, addComment } from "@/lib/api";
import { toast } from "sonner";
import { X, Send } from "lucide-react";
import "./Feed.css";
import { posts as p, comments as c } from "../../data/mockData";
import FoodPostCard from "../../components/FoodPostCard/FoodPostCard";
function Feed() {
  const [posts, setPosts] = useState(p);
  const [active, setActive] = useState(null);
  const [comments, setComments] = useState(c);
  const [draft, setDraft] = useState({ author_name: "", text: "" });

  // useEffect(() => {
  //   listPosts()
  //     .then(setPosts)
  //     .catch(() => {});
  // }, []);

  const openPost = async (p) => {
    setActive(p);
    try {
      // const c = await listComments(p.id);
      setComments(c);
    } catch {
      setComments([]);
    }
  };

  const closeModal = () => {
    setActive(null);
    setComments([]);
    setDraft({ author_name: "", text: "" });
  };

  const submitComment = async (e) => {
    e.preventDefault();

    // if (!draft.author_name || !draft.text) {
    //   toast.error("Add your name and a comment");
    //   return;
    // }

    // try {
    //   const c = await addComment(active.id, draft);
    //   setComments([...comments, c]);

    //   setDraft({ author_name: "", text: "" });

    //   setPosts((ps) =>
    //     ps.map((p) =>
    //       p.id === active.id
    //         ? { ...p, comments_count: p.comments_count + 1 }
    //         : p,
    //     ),
    //   );
    // } catch {
    //   toast.error("Could not add comment");
    // }
  };

  return (
    <div className="feed-page">
      {/* Header */}
      <div className="feed-header">
        <span className="feed-eyebrow">The Feed</span>
        <h1>
          What's on the pass <em>right now</em>.
        </h1>
        <p>
          A live stream from chefs, cafés, and curious eaters around the world.
        </p>
      </div>

      {/* Grid */}
      <div className="feed-grid">
        {posts.map((p, i) => (
          <div key={p.id} className="feed-item">
            <FoodPostCard post={p} index={i} onOpen={openPost} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            <div className="modal-image">
              <img src={active.image_url} alt={active.caption} />
            </div>

            {/* Content */}
            <div className="modal-content">
              {/* Header */}
              <div className="modal-top">
                <div className="author">
                  <img src={active.author_avatar} alt="" />
                  <div>
                    <div className="name">{active.author_name}</div>
                    {active.location && (
                      <div className="location">{active.location}</div>
                    )}
                  </div>
                </div>

                <button className="close-btn" onClick={closeModal}>
                  <X size={20} />
                </button>
              </div>

              {/* Caption */}
              <div className="modal-caption">
                <p>{active.caption}</p>
                {active.restaurant_name && (
                  <span>at {active.restaurant_name}</span>
                )}
              </div>

              {/* Comments */}
              <div className="comments">
                {comments.length === 0 ? (
                  <p className="empty">
                    No comments yet. Start the conversation.
                  </p>
                ) : (
                  comments.map((c) => (
                    <div key={c.id} className="comment">
                      <strong>{c.author_name}</strong>
                      <span>{c.text}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Input */}
              <form className="comment-form" onSubmit={submitComment}>
                <input
                  value={draft.author_name}
                  onChange={(e) =>
                    setDraft({ ...draft, author_name: e.target.value })
                  }
                  placeholder="Your name"
                />

                <div className="comment-row">
                  <input
                    value={draft.text}
                    onChange={(e) =>
                      setDraft({ ...draft, text: e.target.value })
                    }
                    placeholder="Add a comment..."
                  />

                  <button type="submit">
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Feed;
