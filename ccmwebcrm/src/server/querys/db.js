const sqlite3 = require("sqlite3").verbose();

var db = new sqlite3.Database("ccmdb.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the cocomall database.");
});

async function getQuery(sql, params) {
  const result = await new Promise((resolve, reject) => {
    var param = params ? params : [];
    db.all(sql, param, (err, row) => {
      if (err) reject(err);
      resolve(row);
    });
  });

  return result;
}

async function insertQuery(sql, orderObj) {
  const result = await new Promise((resolve, reject) => {
    db.run(sql, Object.values(orderObj), (err, row) => {
      if (err) {
        reject(err);
      }
      resolve(row);
    });
  });

  return result;
}

async function deleteQuery(sql, id) {
  const result = await new Promise((resolve, reject) => {
    db.all(sql, [id], (err, row) => {
      if (err) reject(err);
      resolve(row);
    });
  });

  return result;
}

exports.getQuery = getQuery;
exports.insertQuery = insertQuery;
exports.deleteQuery = deleteQuery;
