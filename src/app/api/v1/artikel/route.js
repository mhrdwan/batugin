import { baseURL } from "../../baseUrl";

export async function GET(request) {
  const res = await fetch(`${baseURL}article/get-article?page=1&limit=10`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const artikel = await res.json();

  return Response.json({ artikel });
}
