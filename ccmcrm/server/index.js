const express = require("express");
const config = require("config");
const cors = require("cors");
const app = express();
app.use(cors());

require("./startup/routes")(app);

const port = 3001;
const server = app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

module.exports = server;
