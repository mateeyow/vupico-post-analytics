export default function client(endpoint: string, opts: RequestInit = {}) {
  const BASE_URL = process.env.API_URL;
  return fetch(`${BASE_URL}/${endpoint}`, opts);
}

export async function fetchJSON<T>(
  endpoint: string,
  opts?: RequestInit,
): Promise<T> {
  const res = await client(endpoint, opts);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json() as Promise<T>;
}
