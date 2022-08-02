import React, { useState, useEffect } from "react";
import UnassignedCarts from "./UnassignedCarts/UnassignedCarts";
import ShopperList from "./ShopperList/ShopperList";
import AssignmentView from "../AssignmentView/AssignmentView";
import "./ListView.css";

const ListView = () => {
  const [assignmentViewVisibility, setAssignmentViewVisbility] =
    useState(false);
  const [clickedCart, setClickedCart] = useState(null);
  const [shopperOne, setShopperOne] = useState([]);
  const [shopperOneAssignedMinutes, setShopperOneAssignedMinutes] = useState(0);
  const [shopperTwo, setShopperTwo] = useState([]);
  const [shopperTwoAssignedMinutes, setShopperTwoAssignedMinutes] = useState(0);
  const [shopperThree, setShopperThree] = useState([]);
  const [shopperThreeAssignedMinutes, setShopperThreeAssignedMinutes] =
    useState(0);

  const viewTheClickedCart = (clickedCartIndex) => {
    setAssignmentViewVisbility(true);
    setClickedCart(clickedCartIndex);
  };

  useEffect(() => {
    if (Object.keys(shopperOne).length > 0) {
      setShopperOneAssignedMinutes(
        (prev) =>
          (prev += Object.values(shopperOne).reduce(
            (_, a) => a.totalTimeFixed,
            0
          ))
      );
    }
  }, [shopperOne]);

  useEffect(() => {
    if (Object.keys(shopperTwo).length > 0) {
      setShopperTwoAssignedMinutes(
        (prev) =>
          (prev += Object.values(shopperTwo).reduce(
            (_, a) => a.totalTimeFixed,
            0
          ))
      );
    }
  }, [shopperTwo]);

  useEffect(() => {
    if (Object.keys(shopperThree).length > 0) {
      setShopperThreeAssignedMinutes(
        (prev) =>
          (prev += Object.values(shopperThree).reduce(
            (_, a) => a.totalTimeFixed,
            0
          ))
      );
    }
  }, [shopperThree]);

  return (
    <>
      <AssignmentView
        assignmentViewVisibility={assignmentViewVisibility}
        setAssignmentViewVisbility={setAssignmentViewVisbility}
        clickedCart={clickedCart}
        setShopperOne={setShopperOne}
        shopperOneAssignedMinutes={shopperOneAssignedMinutes}
        setShopperTwo={setShopperTwo}
        shopperTwoAssignedMinutes={shopperTwoAssignedMinutes}
        setShopperThree={setShopperThree}
        shopperThreeAssignedMinutes={shopperThreeAssignedMinutes}
      />
      <div
        className={
          assignmentViewVisibility === true
            ? "list-view-container__hidden"
            : "list-view-container"
        }
      >
        <UnassignedCarts viewTheClickedCart={viewTheClickedCart} />
        <ShopperList
          shopperOne={shopperOne}
          shopperOneAssignedMinutes={shopperOneAssignedMinutes}
          shopperTwo={shopperTwo}
          shopperTwoAssignedMinutes={shopperTwoAssignedMinutes}
          shopperThree={shopperThree}
          shopperThreeAssignedMinutes={shopperThreeAssignedMinutes}
        />
      </div>
    </>
  );
};

export default ListView;
