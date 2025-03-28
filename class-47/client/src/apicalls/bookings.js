import { axiosInstance } from ".";

export const makePayment = async (values) => {
  try {
    const response = await axiosInstance.post(
      "/api/booking/make-payment",
      values,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const bookShow = async (values) => {
  try {
    const response = await axiosInstance.post(
      "/api/booking/book-show",
      values,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getAllBookings = async () => {
  try {
    const response = await axiosInstance.get("/api/booking/get-all-bookings", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err) {
    return err.response;
  }
};
