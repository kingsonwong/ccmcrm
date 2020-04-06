import React from "react";
import Button from "./common/button";
import ProductCard from "./common/productCard";
import ProductCardColumn from "./common/productCardColumn";

const FormPartD = ({ addProduct, order, handleInput, deleteProduct }) => {
  return (
    <React.Fragment>
      <div class="row">
        <div className="col">
          <div className="product-control">
            <Button type="button" class="btn btn-primary" onClick={addProduct}>
              Add Product
            </Button>
          </div>
        </div>
      </div>
      <ProductCardColumn />
      <hr />
      {order.productLists.length === 0
        ? "No products."
        : order.productLists.map(product => {
            return (
              <ProductCard
                index={order.productLists.indexOf(product) + 1}
                product={product}
                onChange={handleInput}
                onDelete={deleteProduct}
              />
            );
          })}
    </React.Fragment>
  );
};

export default FormPartD;
