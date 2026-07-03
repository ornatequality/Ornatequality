export async function parseApiResponse(response: Response) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  const text = await response.text();

  if (text.trim().startsWith("<!DOCTYPE") || text.trim().startsWith("<html")) {
    throw new Error("Server error. Please refresh the page and try again.");
  }

  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Unexpected server response. Please try again.");
  }
}
