import React from "react";
import carts from "../../../../data/carts.json";
import shoppers from "../../../../data/shoppers.json";
import "./AssignmentView.css";

const AssignmentView = ({
  assignmentViewVisibility,
  setAssignmentViewVisbility,
  clickedCart,
  setShopperOne,
  setShopperTwo,
  setShopperThree,
  shopperOneAssignedMinutes,
  shopperTwoAssignedMinutes,
  shopperThreeAssignedMinutes,
}) => {
  const setCartToShopper = (
    shopperId,
    assignedCart,
    shoppingTime,
    deliveryTime
  ) => {
    let totalTime = Number(shoppingTime) + Number(deliveryTime);
    let totalTimeFixed = Number(totalTime.toFixed(0));
    if (shopperId === 1) {
      setShopperOne((prev) => [...prev, { assignedCart, totalTimeFixed }]);
    } else if (shopperId === 2) {
      setShopperTwo((prev) => [...prev, { assignedCart, totalTimeFixed }]);
    } else {
      setShopperThree((prev) => [...prev, { assignedCart, totalTimeFixed }]);
    }
  };

  const setShopperTotalMinutesAssigned = (shopperId) => {
    if (shopperId === 1) {
      console.log(shopperOneAssignedMinutes);
      return shopperOneAssignedMinutes;
    } else if (shopperId === 2) {
      return shopperTwoAssignedMinutes;
    } else {
      return shopperThreeAssignedMinutes;
    }
  };

  if (assignmentViewVisibility) {
    return (
      <div className="assignment-view-container">
        <div
          onClick={() => {
            setAssignmentViewVisbility(false);
          }}
          className="assignment-view__close-buttton"
        >
          close
        </div>
        {carts.map((singleCart, index) => {
          if (clickedCart === index) {
            return (
              <>
                <div
                  className="assignment-view-header-container"
                  key={`assignment-view-header-container${index}`}
                >
                  <div className="assignment-view-header__cart-number">
                    {`Cart #${index + 1}`}
                  </div>
                  <div className="assignment-view-header__cart-miles">
                    {`${singleCart.miles_from_store} miles`}
                  </div>
                  {singleCart.buyer.restrictions.map((restriction) => {
                    return (
                      <div className="assignment-view-header__cart-restrictions">
                        {`Restrictions: ${restriction}`}
                      </div>
                    );
                  })}
                  {singleCart.buyer.restrictions.length === 0 &&
                    "Restrictions: None"}
                </div>
                {singleCart.items.map((item, index) => {
                  return (
                    <div className="assignment-view-items-container">
                      <>
                        <div className="assignment-view-item__name-and-subtype">
                          {item.name} ({item["sub-type"]})
                        </div>
                        <div className="assignment-view-item__isle">
                          {item.isle}
                        </div>
                      </>
                    </div>
                  );
                })}
              </>
            );
          }
        })}
        <div className="assignment-view-shoppers-container">
          {shoppers.map((shopper, index) => {
            let shoppingTime = (
              carts[clickedCart].item_count * shopper.minutes_per_item
            ).toFixed(1);
            let deliveryTime = (
              carts[clickedCart].miles_from_store * shopper.minutes_per_mile
            ).toFixed(1);
            return (
              <div className={`assignment-view-shopper-${index + 1}`}>
                <div className={`assignment-view-shopper-${index + 1}--title`}>
                  {`Shopper ${shopper.id}`}
                </div>
                {shopper.restrictions.map((restriction, index) => {
                  return (
                    <span
                      className={`assignment-view-shopper-${
                        index + 1
                      }--restrictions`}
                    >
                      {shopper.restrictions.length > 1
                        ? `${restriction}, `
                        : restriction}
                    </span>
                  );
                })}
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
                      setShopperTotalMinutesAssigned(shopper.id) > 240 &&
                      `assignment-view-shopper-${index + 1}--button--warning`
                    } ${
                      setShopperTotalMinutesAssigned(shopper.id) > 300 &&
                      `assignment-view-shopper-${index + 1}--button--error`
                    }`}
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
      </div>
    );
  }
};

export default AssignmentView;
