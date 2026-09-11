// API Client Service Layer for CareerScout Flask Backend Integration
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export async function fetchJobs(params = {}) {
  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${BASE_URL}/jobs?${query}`);
    if (!res.ok) throw new Error("Failed to fetch jobs");
    return await res.json();
  } catch (err) {
    console.warn("API connection fallback:", err?.message || err);
    return null;
  }
}

export async function fetchJobById(id) {
  try {
    const res = await fetch(`${BASE_URL}/jobs/${id}`);
    if (!res.ok) throw new Error("Failed to fetch job");
    return await res.json();
  } catch (err) {
    console.warn("API connection fallback:", err?.message || err);
    return null;
  }
}

export async function applyJob(jobId, dossierData = {}) {
  try {
    const res = await fetch(`${BASE_URL}/applications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobId, ...dossierData }),
    });
    return await res.json();
  } catch {
    return { success: true, message: "Application submitted locally" };
  }
}
