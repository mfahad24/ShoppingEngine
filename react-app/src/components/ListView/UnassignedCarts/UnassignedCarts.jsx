import React from "react";
import "./UnassignedCarts.css";
import carts from "../../../../../data/carts.json";

const UnassignedCarts = ({ viewTheClickedCart }) => {
  return (
    <div className="unassigned-carts-container">
      <div className="unassigned-carts__title">Unassigned Carts</div>
      {carts.map((singleCart, index) => {
        return (
          <div
            className="unassigned-carts__cart-container"
            key={`unassigned-carts__cart-container${index}`}
            onClick={() => {
              viewTheClickedCart(index);
            }}
          >
            <div className="unassigned-carts__cart">
              <div className="unassigned-carts__cart--single-cart-number">
                {`Cart #${index + 1}`}
              </div>
              <div className="unassigned-carts__cart--single-cart-miles">
                {`${singleCart.miles_from_store} miles`}
              </div>
              <div className="unassigned-carts__cart--single-cart-item-count">
                {`${singleCart.item_count} items`}
              </div>
            </div>
            <ul className="unassigned-carts__cart-list">
              {singleCart.items.map((item, index) => {
                return (
                  <li
                    className={
                      singleCart.items.length <= 10
                        ? "unassigned-carts__cart-list--single-cart-item-name"
                        : "unassigned-carts__cart-list--single-cart-item-name-alt"
                    }
                    key={`unassigned-carts__cart-list--single-cart-item-name${index}`}
                  >
                    {item.name} ({item["sub-type"]})
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default UnassignedCarts;
