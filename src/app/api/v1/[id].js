import axios from "axios";

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const response = await axios.get(`https://api.batugin.co.id/articles/${id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch article data" });
  }
}
