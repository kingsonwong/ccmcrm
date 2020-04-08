exports.getAllUsers = function getAllUsers() {
  return `SELECT * FROM staffs`;
};

exports.getSingleUser = function getSingleUser() {
  return `SELECT * FROM staffs WHERE username = ?`;
};

exports.updateSingleUserPassword = function updateSingleUserPassword() {
  return `UPDATE staffs SET password = ? WHERE username = ?`;
};
