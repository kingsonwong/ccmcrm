const axios = require("axios");
const url = "http://localhost:5000/api";

async function login(username, password) {
  try {
    const response = await axios.post(url + "/users/login", {
      username: username,
      password: password,
    });
    const jwt = response.data;
    console.log(jwt);
    localStorage.setItem("token", jwt);
  } catch (error) {
    console.log(error);
  }
}

exports.login = login;
