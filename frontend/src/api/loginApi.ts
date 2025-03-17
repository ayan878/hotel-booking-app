import { LoginFormData } from "../pages/Login";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const loginApi = async (loginData: LoginFormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      credentials:"include",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    // Instead of throwing an Error object, you can directly throw the error message
    throw new Error(error.message || "Login failed");
  }
};
