import axios from "axios";

export const loginApi = async (data) => {
  const url = "/api/login";
  try {
    const response = await axios.post(url, data, {
      // headers: {
      //   Authorization: "Bearer " + authToken,
      //   "Content-Type": "application/json",
      // },
    });

    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error)
    throw error.response.data.message;
  }
};
