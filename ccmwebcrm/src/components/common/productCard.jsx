import React from "react";
import Input from "./input";

const ProductCard = ({ cardid, onChange }) => {
  return (
    <div class="card row mt-2">
      <div class="card-body">
        <div class="row">
          <div className="col-sm-2 pr-0">
            <Input
              type="text"
              id={cardid}
              name="brandName"
              class="form-control"
              placeholder="brand"
              required=""
              autofocus=""
              onChange={onChange}
            />
          </div>
          <div className="col-sm-3 pr-0 pl-0">
            <Input
              type="text"
              id={cardid}
              name="productDescription"
              class="form-control"
              placeholder="Product Description "
              required=""
              autofocus=""
              onChange={onChange}
            />
          </div>
          <div className="col-sm-2 pl-0">
            <Input
              id={cardid}
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
            id={cardid}
            className="specialInput"
            name="price"
            type="text"
            placeholder="$"
            onChange={onChange}
          />
          <input
            id={cardid}
            className="specialInput"
            name="cost"
            type="text"
            placeholder="$"
            onChange={onChange}
          />
          <input
            id={cardid}
            className="specialInput"
            name="discount"
            type="text"
            placeholder="$"
            onChange={onChange}
          />
          <input
            id={cardid}
            className="specialInput"
            name="deliveryCost"
            type="text"
            placeholder="$"
            onChange={onChange}
          />
          <input
            id={cardid}
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
