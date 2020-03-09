const axios = require("axios");
const headers = {
  "Access-Control-Allow-Origin": "https://localhost3000"
};
export async function get_orders(page) {
  try {
    const res = await axios.get(`http://localhost:3001/api/getorders/${page}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export async function get_num_orders(page) {
  try {
    const res = await axios.get(`http://localhost:3001/api/getordernum`);
    return res.data[0].numer_of_order;
  } catch (e) {
    console.log(e);
  }
}
