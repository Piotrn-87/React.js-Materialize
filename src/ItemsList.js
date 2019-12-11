import React from "react";

const ItemsList = ({ stuff, deleteItems }) => {
  const itemsList = stuff.length ? (
    stuff.map(item => {
      return (
        <div className="Active collection-item" key={item.id}>
          <span className="green-text">{item.content}</span>
          <button
            className="waves-effect waves-light btn right"
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
    <p className="red-text center"> You have no item list </p>
  );

  return <div className="collection">{itemsList}</div>;
};

export default ItemsList;
