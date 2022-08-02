import React from "react";
import shoppers from "../../../../../data/shoppers.json";
import carts from "../../../../../data/carts.json";
import "./AssignmentViewShoppers.css";

const AssignmentViewShoppers = ({
  clickedCart,
  setShopperTotalMinutesAssigned,
  setCartToShopper,
}) => {
  return (
    <>
      <div className="assignment-view-shoppers-container">
        {shoppers.map((shopper, index) => {
          let shoppingTime = (
            carts[clickedCart].item_count * shopper.minutes_per_item
          ).toFixed(1);
          let deliveryTime = (
            carts[clickedCart].miles_from_store * shopper.minutes_per_mile
          ).toFixed(1);
          return (
            <div
              className={`assignment-view-shopper-${index + 1}`}
              key={`assignment-view-shopper-${index + 1}`}
            >
              <div
                className={`assignment-view-shopper-${index + 1}--title`}
                key={`assignment-view-shopper-${index + 1}--title`}
              >
                {`Shopper ${shopper.id}`}
              </div>
              <div
                className={`assignment-view-shopper__restrictions`}
                key={`assignment-view-shopper__restrictions-${index + 1}`}
              >
                {shopper.restrictions.map((restriction, index) => {
                  return (
                    <span
                      className={`assignment-view-shopper__restriction--restriction`}
                      key={`assignment-view-shopper__restriction--restriction-${
                        index + 1
                      }`}
                    >
                      {shopper.restrictions.length > 1
                        ? index === shopper.restrictions.length - 1
                          ? `${restriction} `
                          : `${restriction}, `
                        : restriction}
                    </span>
                  );
                })}
              </div>

              <div>{`Shopping Time: ${shoppingTime} Minutes`}</div>
              <div>{`Delivery Time: ${deliveryTime} Minutes `}</div>
              <div>{`Overall Rating: ${shopper.overall_rating}`}</div>
              <div>{`Buyer Rating: ${
                Object.keys(carts[clickedCart].buyer.ratings).length > 1
                  ? (carts[clickedCart].buyer.ratings[
                      Object.keys(carts[clickedCart].buyer.ratings)[0]
                    ] +
                      carts[clickedCart].buyer.ratings[
                        Object.keys(carts[clickedCart].buyer.ratings)[1]
                      ]) /
                    2
                  : carts[clickedCart].buyer.ratings["1"]
              }`}</div>
              <div>
                <button
                  onClick={() =>
                    setCartToShopper(
                      shopper.id,
                      clickedCart + 1,
                      shoppingTime,
                      deliveryTime
                    )
                  }
                  className={`assignment-view-shopper-${index + 1}--button ${
                    setShopperTotalMinutesAssigned(shopper.id) > 240
                      ? `assignment-view-shopper-${index + 1}--button--warning`
                      : ""
                  } ${
                    setShopperTotalMinutesAssigned(shopper.id) > 300
                      ? `assignment-view-shopper-${index + 1}--button--error`
                      : ""
                  }`}
                  key={`assignment-view-shopper-${index + 1}--button-${index + 1}`}
                >
                  Select Shopper
                </button>
              </div>
              <div>{`${setShopperTotalMinutesAssigned(
                shopper.id
              )} Minutes Assigned`}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AssignmentViewShoppers;
