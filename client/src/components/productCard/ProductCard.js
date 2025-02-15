import React from "react";
import { NavLink } from "react-router-dom";


function ProductCard({ product }) { 
  return (
    <div className="cardHolder">
      {product &&
        product.map((items,index) => (
          <div key={index} className="cardContainer">
           <NavLink className="ProductImg" to={`/products/${items.id}`} state={items}>
              <img src={items.product_main_image_url} alt="" />
            </NavLink>        


            <div className="cardDetails">
            <p className="product-title">{items.product_title.slice(0,25)}</p>
            <p className="product-price">${items.app_sale_price}</p>

            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductCard;
