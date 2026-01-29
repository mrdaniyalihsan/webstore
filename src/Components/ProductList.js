import React from "react";
import Product from './Product.js'

const ProductList = ({products}) => {
  console.log(products);
  return (
    <div>
      {products && products.length > 0 ? (
        <ul>
          {products.map((product,index) => (
            <Product product={product}/>
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
