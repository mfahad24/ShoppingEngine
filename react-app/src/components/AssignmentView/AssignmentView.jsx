import React from "react";
import carts from "../../../../data/carts.json";
import shoppers from "../../../../data/shoppers.json";
import "./AssignmentView.css";

const AssignmentView = ({
  assignmentViewVisibility,
  setAssignmentViewVisbility,
  clickedCart,
}) => {
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
                <div style={{ color: "red" }}>Shopping Time: 15.2 Minutes</div>
                <div style={{ color: "red" }}>Delivery Time: 23.5 Minutes</div>
                <div>{`Overall rating: ${shopper.overall_rating}`}</div>
                <div
                  style={{ color: "red" }}
                >{`Buyer rating: ${shopper.overall_rating}`}</div>
                <div>
                  <button
                    className={`assignment-view-shopper-${index + 1}--button`}
                  >
                    Select Shopper
                  </button>
                </div>
                <div style={{ color: "red" }}>58 Minutes Assigned</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default AssignmentView;
