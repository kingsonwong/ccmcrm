const axios = require("axios");
const url = "http://localhost:5000/api";

async function getAllOrders() {
  try {
    const response = await axios.get(url + "/orders/");
    const allOrders = response.data;
    return allOrders;
  } catch (error) {
    console.log(error);
  }
}

async function getOrderById(ccm_invoice_id) {
  try {
    const response = await axios.get(url + "/orders/" + ccm_invoice_id);
    const order = response.data;
    return order;
  } catch (error) {
    console.log(error);
  }
}

async function postOrder(orderObj) {
  try {
    const response = await axios.post(url + "/orders/", orderObj);
    const successMessage = response.data;
    return successMessage;
  } catch (error) {
    console.log(error);
  }
}

async function updateOrder(id, orderObj) {
  try {
    const response = await axios.put(url + "/orders/" + id, orderObj);
    const successMessage = response.data;
    return successMessage;
  } catch (error) {
    console.log(error);
  }
}

async function deleteOrder(id) {
  try {
    const response = await axios.delete(url + "/orders/" + id);
    const successMessage = response.data;
    return successMessage;
  } catch (error) {
    console.log(error);
  }
}

exports.getAllOrders = getAllOrders;
exports.getOrderById = getOrderById;
exports.postOrder = postOrder;
exports.updateOrder = updateOrder;
exports.deleteOrder = deleteOrder;
