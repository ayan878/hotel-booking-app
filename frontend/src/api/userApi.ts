import { RegisiterFormData } from "../pages/Registration";

// Define the base URL for your API
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const register = async (formData: RegisiterFormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
      method: "POST",
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
    return data;
  } catch (error: any) {
    // Handle errors and throw with custom message
    throw new Error(error.message || "Registration failed");
  }
};
