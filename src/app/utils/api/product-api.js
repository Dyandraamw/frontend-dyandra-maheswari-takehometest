import axios from "axios";
import Cookies from "js-cookie";

// const authToken = process.env.JWT;
const authToken = Cookies.get("token");

export const fetchAllProductsApi = async () => {
  //   console.log(authToken);
  const url = "/api/products";
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

export const fetchAllProductsDropdownApi = async () => {
  //   console.log(authToken);
  const url = "/api/products/dropdown";
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

export const fetchProductDetailApi = async (data) => {
  //   console.log(authToken);
  const url = "/api/products/detail/" + data;
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

export const createProductApi = async (data) => {
  const url = "/api/products";
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

export const deleteProductApi = async (id) => {
  const url = "/api/products/detail/"+id;
  try {
    const response = await axios.delete(url, {
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

export const updateProductApi = async (id,data) => {
  const url = `/api/products/detail/${id}`;
//   const data = {};
  try {
    const response = await axios.put(url, data, {
      headers: {
        Authorization: "Bearer " + authToken,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    alert(error.response.data.message);
    throw error;
  }
};
