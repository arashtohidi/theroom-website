import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchAPI = async (path: string) => {
  try {
    const res = await axios.get(`${API_URL}${path}`);
    return res.data;
  } catch (err) {
    console.error("Strapi API fetch error:", err);
    return null;
  }
};

export const fetchArticles = async () => {
  return await fetchAPI("/articles?populate=*");
};
