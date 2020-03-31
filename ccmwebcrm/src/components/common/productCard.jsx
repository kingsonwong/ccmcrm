import React from "react";
import Input from "./input";
import DropDown from "./dropdown";

const ProductCard = ({ onChange, productCategory }) => {
  return (
    <div class="card row mt-2">
      <div class="card-body">
        <div class="row">
          <div className="col-sm-2 pr-0">
            <Input
              type="text"
              id="brandName"
              class="form-control"
              placeholder="brand"
              required=""
              autofocus=""
              onChange={onChange}
            />
          </div>
          <div className="col-sm-4 pr-0 pl-0">
            <Input
              type="text"
              id="productDescription"
              class="form-control"
              placeholder="product description "
              required=""
              autofocus=""
              onChange={onChange}
            />
          </div>
          <div className="col-sm-2 pl-0">
            <Input
              type="text"
              id="modelNo"
              class="form-control"
              placeholder="Model No."
              required=""
              autofocus=""
              onChange={onChange}
            />
          </div>
          <input className="specialInput" type="text" placeholder="$" />
          <input className="specialInput" type="text" placeholder="$" />
          <input className="specialInput" type="text" placeholder="$" />
          <input className="specialInput" type="text" placeholder="$" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
