import { RegisterFormData } from "../pages/Registration";

// Define the base URL for your API
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const register = async (formData: RegisterFormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred");
    }
    // If response is OK, parse and return data
    const data = await response.json();
    console.log("data", data);

    return data;
  } catch (error: any) {
    // Handle errors and throw with custom message
    throw new Error(error.message || "Registration failed");
  }
};
