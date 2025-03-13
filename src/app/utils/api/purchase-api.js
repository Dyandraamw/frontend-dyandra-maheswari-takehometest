import axios from "axios";
import Cookies from "js-cookie";

// const authToken = process.env.JWT;
const authToken = Cookies.get("token");

export const fetchAllPurchasesApi = async () => {
  //   console.log(authToken);
  const url = "/api/purchases";
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    });

    return response.data;
  } catch (error) {
    // alert(error.response.data.message);
    throw error;
  }
};

export const createPurchaseApi = async (data) => {
  const url = "/api/purchases";
  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: "Bearer " + authToken,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    //alert(error.response.data.message);
    throw error;
  }
};

export const fetchPurchaseDetailApi = async (id) => {
    //   console.log(authToken);
    const url = "/api/purchases/detail/"+id;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      });
  
      return response.data;
    } catch (error) {
      // alert(error.response.data.message);
      throw error;
    }
  };