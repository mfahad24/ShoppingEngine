import React, { useState } from "react";
import AssignmentView from "../AssignmentView/AssignmentView";
import carts from "../../../../data/carts.json";
import "./ListView.css";

const ListView = () => {
  const [assignmentViewVisibility, setAssignmentViewVisbility] =
    useState(false);
  const [clickedCart, setClickedCart] = useState(null);

  const viewTheClickedCart = (clickedCartIndex) => {
    setAssignmentViewVisbility(true);
    setClickedCart(clickedCartIndex);
  };
  return (
    <>
      <AssignmentView
        assignmentViewVisibility={assignmentViewVisibility}
        setAssignmentViewVisbility={setAssignmentViewVisbility}
        clickedCart={clickedCart}
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
                        {/* {singleCart.items.length <= 5 ? item.name : index <=5 && item.name} */}
                      </li>
                    );
                  })}
                  {/* <span className="unassigned-carts__cart-list-view-all-button">{singleCart.items.length > 5 ? 'view all' : ''}</span> */}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="shopper-one-container">
          <div className="shopping-one__title">Shopper 1</div>
          <div className="shopper-one__cart">
            <div className="shopper-one__cart--cart-title">Cart #1</div>
            <div className="shopper-one__cart--cart-minutes">57 minutes</div>
          </div>
          <div className="shopper-one__cart--cart-total-minutes">
            158 minutes
          </div>
        </div>
        <div className="shopper-two-container">
          <div className="shopping-two__title">Shopper 2</div>
          <div className="shopper-two__cart">
            <div className="shopper-two__cart--cart-title">Cart #1</div>
            <div className="shopper-two__cart--cart-minutes">57 minutes</div>
          </div>
          <div className="shopper-one__cart--cart-total-minutes">
            158 minutes
          </div>
        </div>
        <div className="shopper-three-container">
          <div className="shopping-three__title">Shopper 3</div>
          <div className="shopper-three__cart">
            <div className="shopper-three__cart--cart-title">Cart #1</div>
            <div className="shopper-three__cart--cart-minutes">57 minutes</div>
          </div>
          <div className="shopper-one__cart--cart-total-minutes">
            158 minutes
          </div>
        </div>
      </div>
    </>
  );
};

export default ListView;
