const axios = require("axios");
const headers = {
  "Access-Control-Allow-Origin": "https://localhost3000"
};
const endpoint = "http://localhost:3001";

export async function getOrders(seq, col) {
  try {
    const res = await axios.get(`${endpoint}/api/orders/${seq}/${col}`);
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
