const API_URL = process.env.API_URL as string;

export const fetchData = async (query: string, variables = {}) => {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();
  if (json.errors) {
    console.error(JSON.stringify(json));
    throw new Error("Failed to fetch API");
  }
  return json.data;
};
