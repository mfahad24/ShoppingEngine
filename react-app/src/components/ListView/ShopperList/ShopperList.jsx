import React from "react";
import "./ShopperList.css";

const ShopperList = ({
  shopperOne,
  shopperOneAssignedMinutes,
  shopperTwo,
  shopperTwoAssignedMinutes,
  shopperThree,
  shopperThreeAssignedMinutes,
}) => {
  return (
    <>
      <div className="shopper-one-container">
        <div className="shopper-one__title">Shopper 1</div>
        {shopperOne.map((shopperOneCart, index) => {
          return (
            <>
              <div
                className="shopper-one__cart"
                key={`shopper-one__cart-${index}`}
              >
                <div
                  className="shopper-one__cart--cart-title"
                  key={`shopper-one__cart--cart-title-${index}`}
                >{`Cart #${shopperOneCart.assignedCart}`}</div>
                <div
                  className="shopper-one__cart--cart-minutes"
                  key={`shopper-one__cart--cart-minutes-${index}`}
                >
                  {`${shopperOneCart.totalTimeFixed} Minutes`}
                </div>
              </div>
            </>
          );
        })}
        {shopperOne.length === 0 && (
          <span className="shopper-one__cart--nothing-assigned">
            Shopper has no carts assigned
          </span>
        )}
        <div className="shopper-one__cart--cart-total-minutes">
          {`${shopperOneAssignedMinutes} Minutes`}
        </div>
      </div>
      <div className="shopper-two-container">
        <div className="shopper-two__title">Shopper 2</div>
        {shopperTwo.map((shopperTwoCart, index) => {
          return (
            <>
              <div
                className="shopper-two__cart"
                key={`shopper-two__cart-${index}`}
              >
                <div
                  className="shopper-two__cart--cart-title"
                  key={`shopper-two__cart--cart-title-${index}`}
                >{`Cart #${shopperTwoCart.assignedCart}`}</div>
                <div
                  className="shopper-two__cart--cart-minutes"
                  key={`shopper-two__cart--cart-minutes-${index}`}
                >
                  {`${shopperTwoCart.totalTimeFixed} Minutes`}
                </div>
              </div>
            </>
          );
        })}
        {shopperTwo.length === 0 && (
          <span className="shopper-two__cart--nothing-assigned">
            Shopper has no carts assigned
          </span>
        )}
        <div className="shopper-two__cart--cart-total-minutes">
          {`${shopperTwoAssignedMinutes} Minutes`}
        </div>
      </div>
      <div className="shopper-three-container">
        <div className="shopper-three__title">Shopper 3</div>
        {shopperThree.map((shopperThreeCart, index) => (
          <>
            <div
              className="shopper-three__cart"
              key={`shopper-three__cart-${index}`}
            >
              <div
                className="shopper-three__cart--cart-title"
                key={`shopper-three__cart--cart-title-${index}`}
              >{`Cart #${shopperThreeCart.assignedCart}`}</div>
              <div
                className="shopper-three__cart--cart-minutes"
                key={`shopper-three__cart--cart-minutes-${index}`}
              >
                {`${shopperThreeCart.totalTimeFixed} Minutes`}
              </div>
            </div>
          </>
        ))}
        {shopperThree.length === 0 && (
          <span className="shopper-three__cart--nothing-assigned">
            Shopper has no carts assigned
          </span>
        )}
        <div className="shopper-three__cart--cart-total-minutes">
          {`${shopperThreeAssignedMinutes} Minutes`}
        </div>
      </div>
    </>
  );
};

export default ShopperList;
