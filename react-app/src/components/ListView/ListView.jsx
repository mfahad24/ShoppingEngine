import React, { useState, useEffect } from "react";
import AssignmentView from "../AssignmentView/AssignmentView";
import carts from "../../../../data/carts.json";
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
            {`${shopperOneAssignedMinutes} Minutes Assigned`}
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
            {`${shopperTwoAssignedMinutes} Minutes Assigned`}
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
            {`${shopperThreeAssignedMinutes} Minutes Assigned`}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListView;
