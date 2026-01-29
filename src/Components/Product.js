import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <h1>
        {product.name}{" "}
        <span class="product.badge text-bg-secondary">${product.price}</span>{" "}
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">
            -
          </button>
          <button type="button" class="btn btn-primary">
            0
          </button>
          <button type="button" class="btn btn-primary">
            +
          </button>

          <div>
            <div class="row gx-4">
             
              <div>
                <div class="p-0">Total Value</div>
              </div>
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Product;
