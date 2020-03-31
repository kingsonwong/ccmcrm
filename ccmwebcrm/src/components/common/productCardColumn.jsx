import React from "react";

const ProductCardColumn = () => {
  return (
    <div class="row mt-4">
      <div className="col-sm-2 pr-0 product-item-title">Brand</div>
      <div className="col-sm-3 pr-0 pl-0 product-item-title">
        Product Description
      </div>
      <div className="col-sm-2 pl-0 product-item-title">Model No.</div>
      <input
        className="specialInput"
        type="text"
        placeholder="Price"
        disabled
      />
      <input className="specialInput" type="text" placeholder="Cost" disabled />
      <input
        className="specialInput"
        type="text"
        placeholder="Discount"
        disabled
      />
      <input
        className="specialInput"
        type="text"
        placeholder="Delivery"
        disabled
      />
      <input className="specialInput" type="text" placeholder="Qty" disabled />
    </div>
  );
};

export default ProductCardColumn;
