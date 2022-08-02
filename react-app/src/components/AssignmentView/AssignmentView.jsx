import React from "react";
import AssignmentViewHeader from "./AssignmentViewHeader/AssignmentViewHeader";
import AssignmentViewShoppers from "./AssignmentViewShoppers/AssignmentViewShoppers";
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
      return shopperOneAssignedMinutes;
    } else if (shopperId === 2) {
      return shopperTwoAssignedMinutes;
    } else {
      return shopperThreeAssignedMinutes;
    }
  };

  if (assignmentViewVisibility === true) {
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
        <AssignmentViewHeader clickedCart={clickedCart} />
        <AssignmentViewShoppers
          clickedCart={clickedCart}
          setCartToShopper={setCartToShopper}
          setShopperTotalMinutesAssigned={setShopperTotalMinutesAssigned}
        />
      </div>
    );
  }
};

export default AssignmentView;
