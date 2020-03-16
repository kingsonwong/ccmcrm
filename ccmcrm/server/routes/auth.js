const express = require("express");
const Joi = require("@hapi/joi");
const config = require("config");
const router = express.Router();
const db = require("../startup/db");
const query = require("../common/query");
const jwt = require("jsonwebtoken");

router.post("/", async function(req, res) {
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let check_user_sql = `Select username, password from staffs where username = "${req.body.username}"`;
  let user = await query(check_user_sql);
  if (user[0] === undefined) return res.status(400).send("Invalid username.");

  const validPassword = req.body.password === user[0].password;
  if (!validPassword) return res.status(400).send("Invalid password");

  const token = generateAuthToken(req.body.username);

  res.send(token);
});

function validate(body) {
  const schema = Joi.object({
    username: Joi.string()
      .min(3)
      .max(30)
      .email()
      .required(),
    password: Joi.string()
      .min(5)
      .max(30)
      .required()
  });
  return schema.validate(body);
}

function generateAuthToken(username) {
  const token = jwt.sign({ username: username }, "jwtPrivateKey");
  return token;
}

module.exports = router;
