import React from "react";
import Input from "./input";

const ProductCard = ({ index, product, onChange, onDelete }) => {
  return (
    <div class="card row mt-2 productcard">
      <div class="card-body">
        <div class="row">
          <div className="col-sm-1 pr-0 pl-0 close-product-button">
            <button
              id={index}
              type="button"
              class="close-product-button btn"
              onClick={onDelete}
            >
              X
            </button>
          </div>

          <div className="col-sm-3 pr-0 pl-0">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  {index}
                </span>
              </div>
              <Input
                type="text"
                id={index}
                value={product.productDescription}
                name="productDescription"
                class="form-control"
                placeholder="Product Description"
                required=""
                autofocus=""
                onChange={onChange}
              />
            </div>
          </div>
          <div className="col-sm-1 pr-0 pl-0">
            <Input
              type="text"
              id={index}
              value={product.brandName}
              name="brandName"
              class="form-control"
              placeholder="Brand"
              required=""
              autofocus=""
              onChange={onChange}
            />
          </div>

          <div className="col-sm-2 pl-0">
            <Input
              id={index}
              value={product.modelNo}
              type="text"
              name="modelNo"
              class="form-control"
              placeholder="Model No."
              required=""
              autofocus=""
              onChange={onChange}
            />
          </div>
          <input
            id={index}
            value={product.unitprice}
            className="specialInput"
            name="price"
            type="text"
            placeholder="$"
            onChange={onChange}
          />
          <input
            id={index}
            value={product.unitcost}
            className="specialInput"
            name="cost"
            type="text"
            placeholder="$"
            onChange={onChange}
          />
          <input
            id={index}
            value={product.discount}
            className="specialInput"
            name="discount"
            type="text"
            placeholder="$"
            onChange={onChange}
          />
          <input
            id={index}
            value={product.deliveryCost}
            className="specialInput"
            name="deliveryCost"
            type="text"
            placeholder="$"
            onChange={onChange}
          />
          <input
            id={index}
            value={product.qty}
            className="specialInput"
            name="qty"
            type="number"
            placeholder="0"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
