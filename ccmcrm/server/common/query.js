const db = require("../startup/db");

async function query(sql) {
  const result = await new Promise((resolve, reject) => {
    db.all(sql, [], (err, row) => {
      if (err) reject(err);
      resolve(row);
    });
  });

  return result;
}

module.exports = query;
