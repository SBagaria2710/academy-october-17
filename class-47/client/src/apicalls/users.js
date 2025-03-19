import { axiosInstance } from ".";

// Register
export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/register", payload);
    return response.data;
  } catch (err) {
    return err;
  }
};

// Login
export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/login", payload);
    return response.data;
  } catch (err) {
    return err;
  }
};

// Get Currect User
export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("/api/users/get-current-user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err) {
    localStorage.removeItem("token");
    window.location.href = "/login";
    return null;
  }
};
