import { axiosInstance } from ".";

export const registerUser = async (values) => {
  try {
    const response = await axiosInstance.post("/users/register", values);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const loginUser = async (values) => {
  try {
    const response = await axiosInstance.post("/users/login", values);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axiosInstance.get("/users/logout");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("/users/getCurrentUser");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const ForgetPassword = async (values) => {
  try {
    const response = await axiosInstance.post("/users/forgetPassword", values);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const ResetPassword = async (values) => {
  try {
    const response = await axiosInstance.post("/users/resetPassword", values);
    return response.data;
  } catch (error) {
    return error;
  }
};
