exports.getProductsOfSingleOrder = function getProductsOfSingleOrder() {
  return `SELECT * from orders_products WHERE ccm_invoice_no = "?"`;
};

exports.getProductsOfAllOrder = function getProductsOfAllOrder() {
  return `SELECT * from orders_products`;
};
