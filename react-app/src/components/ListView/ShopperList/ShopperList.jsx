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
        <div className="shopping-one__title">Shopper 1</div>
        {shopperOne.map((shopperOneCart) => {
          return (
            <>
              <div className="shopper-one__cart">
                <div className="shopper-one__cart--cart-title">{`Cart #${shopperOneCart.assignedCart}`}</div>
                <div className="shopper-one__cart--cart-minutes">
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
        <div className="shopping-two__title">Shopper 2</div>
        {shopperTwo.map((shopperTwoCart) => {
          return (
            <>
              <div className="shopper-two__cart">
                <div className="shopper-two__cart--cart-title">{`Cart #${shopperTwoCart.assignedCart}`}</div>
                <div className="shopper-two__cart--cart-minutes">
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
        <div className="shopping-three__title">Shopper 3</div>
        {shopperThree.map((shopperThreeCart) => {
          return (
            <>
              <div className="shopper-three__cart">
                <div className="shopper-three__cart--cart-title">{`Cart #${shopperThreeCart.assignedCart}`}</div>
                <div className="shopper-three__cart--cart-minutes">
                  {`${shopperThreeCart.totalTimeFixed} Minutes`}
                </div>
              </div>
            </>
          );
        })}
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
