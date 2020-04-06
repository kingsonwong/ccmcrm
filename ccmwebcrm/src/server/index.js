const express = require("express");
const cors = require("cors");
const orders = require("./routes/orders");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/orders", orders);

const port = process.env.PORT || "5000";
const server = app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});

module.exports = server;
