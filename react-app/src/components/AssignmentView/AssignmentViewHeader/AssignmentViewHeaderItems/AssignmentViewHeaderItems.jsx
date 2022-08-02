import React from "react";
import "./AssignmentViewHeaderItems.css";

const AssignmentViewHeaderItems = ({ singleCart }) => {
  return singleCart.items.map((item, index) => {
    return (
      <div
        className="assignment-view-items-container"
        key={`assignment-view-items-container${index}`}
      >
        <>
          <div
            className="assignment-view-item__name-and-subtype"
            key={`assignment-view-item__name-and-subtype${index}`}
          >
            {item.name} ({item["sub-type"]})
          </div>
          <div
            className="assignment-view-item__isle"
            key={`assignment-view-item__isle${index}`}
          >
            {item.isle}
          </div>
        </>
      </div>
    );
  });
};

export default AssignmentViewHeaderItems;
