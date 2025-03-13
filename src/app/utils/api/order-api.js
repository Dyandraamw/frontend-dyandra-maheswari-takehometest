import axios from "axios";
import Cookies from "js-cookie";

// const authToken = process.env.JWT;
const authToken = Cookies.get("token");

export const fetchAllOrdersApi = async () => {
  //   console.log(authToken);
  const url = "/api/orders";
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

export const createOrderApi = async (data) => {
  const url = "/api/orders";
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

export const fetchOrderDetailApi = async (id) => {
    //   console.log(authToken);
    const url = "/api/orders/detail/"+id;
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