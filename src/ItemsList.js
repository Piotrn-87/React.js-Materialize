import React from "react";

const ItemsList = ({ items, deleteItems }) => {
  const itemsList = items.length ? (
    items.map(item => {
      return (
        <div className="collection-item" key={item.id}>
          <span className="green-text">{items.content}</span>
          <button
            className="right"
            onClick={() => {
              deleteItems(item.id);
            }}
          >
            Done
          </button>
        </div>
      );
    })
  ) : (
    <p> You have no item list </p>
  );

  return <div className="collection">{itemsList}</div>;
};

export default ItemsList;
