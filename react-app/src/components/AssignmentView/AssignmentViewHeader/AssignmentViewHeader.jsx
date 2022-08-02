import React from "react";
import AssignmentViewHeaderItems from "./AssignmentViewHeaderItems/AssignmentViewHeaderItems";
import carts from "../../../../../data/carts.json";
import "./AssignmentViewHeader.css";

const AssignmentViewHeader = ({ clickedCart }) => {
  return (
    <>
      {carts.map((singleCart, index) => {
        if (clickedCart === index) {
          return (
            <>
              <div
                className="assignment-view-header-container"
                key={`assignment-view-header-container-${index}`}
              >
                <div
                  className="assignment-view-header__cart-number"
                  key={`assignment-view-header__cart-number-${index}`}
                >
                  {`Cart #${index + 1}`}
                </div>
                <div
                  className="assignment-view-header__cart-miles"
                  key={`assignment-view-header__cart-miles-${index}`}
                >
                  {`${singleCart.miles_from_store} miles`}
                </div>
                {singleCart.buyer.restrictions.map((restriction) => {
                  return (
                    <div
                      className="assignment-view-header__cart-restrictions"
                      key={`assignment-view-header__cart-restrictions-${index}`}
                    >
                      {`Restrictions: ${restriction}`}
                    </div>
                  );
                })}
                {
                  <span
                    className="assignment-view-header__cart-restrictions--none"
                    key={`assignment-view-header__cart-restrictions--none-${index}`}
                  >
                    {singleCart.buyer.restrictions.length === 0 &&
                      "Restrictions: None"}
                  </span>
                }
              </div>
              <AssignmentViewHeaderItems singleCart={singleCart} />
            </>
          );
        }
      })}
    </>
  );
};

export default AssignmentViewHeader;
