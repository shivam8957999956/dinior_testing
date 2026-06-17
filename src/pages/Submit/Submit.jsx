import { useState } from "react";
// import { createPost } from "@/lib/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import "./Submit.css";

export default function Submit() {
  const [form, setForm] = useState({
    author_name: "",
    caption: "",
    image_url: "",
    restaurant_name: "",
    location: "",
    tags: "",
  });

  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    // if (!form.author_name || !form.caption || !form.image_url) {
    //   toast.error("Name, caption, and image URL are required");
    //   return;
    // }

    // setLoading(true);

    // try {
    //   await createPost({
    //     author_name: form.author_name,
    //     caption: form.caption,
    //     image_url: form.image_url,
    //     restaurant_name: form.restaurant_name || null,
    //     location: form.location || null,
    //     tags: form.tags
    //       .split(",")
    //       .map((t) => t.trim())
    //       .filter(Boolean),
    //   });

    //   toast.success("Posted to the feed");
    //   nav("/feed");
    // } catch {
    //   toast.error("Could not post");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="submit-page">
      {/* Header */}
      <div className="submit-header">
        <span className="eyebrow">Share a plate</span>

        <h1>
          A new entry <em>for the feed.</em>
        </h1>

        <p>
          Add a photo URL of what's in front of you, tell us where, and let the
          feed do the rest.
        </p>
      </div>

      {/* Form */}
      <form className="submit-form" onSubmit={submit}>
        {[
          {
            k: "author_name",
            label: "Your name *",
            placeholder: "Chef, eater, photographer...",
          },
          {
            k: "image_url",
            label: "Image URL *",
            placeholder: "https://...",
          },
          {
            k: "caption",
            label: "Caption *",
            placeholder: "What's on the plate? Tell us how it tastes.",
            textarea: true,
          },
          {
            k: "restaurant_name",
            label: "Restaurant (optional)",
            placeholder: "At which restaurant or café?",
          },
          {
            k: "location",
            label: "City (optional)",
            placeholder: "Paris, Tokyo, Brooklyn...",
          },
          {
            k: "tags",
            label: "Tags (comma-separated)",
            placeholder: "pasta, paris, late-night",
          },
        ].map(({ k, label, placeholder, textarea }) => (
          <div key={k} className="field">
            <label>{label}</label>

            {textarea ? (
              <textarea
                value={form[k]}
                onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                placeholder={placeholder}
                rows={3}
              />
            ) : (
              <input
                value={form[k]}
                onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                placeholder={placeholder}
              />
            )}
          </div>
        ))}

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? "Publishing..." : "Publish to feed"}
        </button>
      </form>
    </div>
  );
}
