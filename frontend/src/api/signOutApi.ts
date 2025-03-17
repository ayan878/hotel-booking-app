const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const signOutApi = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include", // Ensures cookies are included in requests
    });

    if (!response.ok) {
      throw new Error(
        `Logout failed: ${response.status} ${response.statusText}`
      );
    }

    return await response.json(); // Return response data if needed
  } catch (error) {
    console.error("Logout error:", error);
    throw error; // Re-throw error to handle it in the calling function
  }
};

export default signOutApi;