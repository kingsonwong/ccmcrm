exports.getAllUsers = function getAllUsers() {
  return `SELECT * FROM staffs`;
};

exports.getSingleUser = function getSingleUser() {
  return `SELECT * FROM staffs WHERE username = ?`;
};

exports.updateSingleUser = function updateSingleUser() {
  return `UPDATE staffs SET password = ? WHERE username = ?`;
};
