const axios = require("axios");

const endpoint = "http://localhost:3001";

export async function login(username, password) {
  //console.log(username, password);
  try {
    const res = await axios.post(`${endpoint}/api/auth`, {
      username: username,
      password: password
    });
    //return res.data;
    return res;
  } catch (e) {
    console.log(e);
  }
}
