import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// safer fallback (prevents crashing if env is missing)
const API_BASE = `${BACKEND_URL || ""}/api`;

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ---------------- RESTAURANTS ---------------- */
export const listRestaurants = (params) =>
  api.get("/restaurants", { params }).then((res) => res.data);

export const getRestaurant = (id) =>
  api.get(`/restaurants/${id}`).then((res) => res.data);

/* ---------------- POSTS ---------------- */
export const listPosts = () => api.get("/posts").then((res) => res.data);

export const createPost = (payload) =>
  api.post("/posts", payload).then((res) => res.data);

export const likePost = (id) =>
  api.post(`/posts/${id}/like`).then((res) => res.data);

/* ---------------- COMMENTS ---------------- */
export const listComments = (postId) =>
  api.get(`/posts/${postId}/comments`).then((res) => res.data);

export const addComment = (postId, payload) =>
  api.post(`/posts/${postId}/comments`, payload).then((res) => res.data);

/* ---------------- COMPETITIONS ---------------- */
export const listCompetitions = () =>
  api.get("/competitions").then((res) => res.data);

export const getCompetition = (id) =>
  api.get(`/competitions/${id}`).then((res) => res.data);

export const registerCompetition = (id) =>
  api.post(`/competitions/${id}/register`).then((res) => res.data);

/* ---------------- REVIEWS ---------------- */
export const listReviews = (restaurant_id) =>
  api.get("/reviews", { params: { restaurant_id } }).then((res) => res.data);

export const createReview = (payload) =>
  api.post("/reviews", payload).then((res) => res.data);

/* ---------------- AI ---------------- */
export const generateBlurb = (payload) =>
  api.post("/ai/blurb", payload).then((res) => res.data);
