const sqlite3 = require("sqlite3").verbose();

var db = new sqlite3.Database("ccmdb.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the cocomall database.");
});

async function sendQuery(sql, params = []) {
  const result = await new Promise((resolve, reject) => {
    db.all(sql, params, (err, row) => {
      if (err) reject(err);
      resolve(row);
    });
  });

  return result;
}

exports.sendQuery = sendQuery;
