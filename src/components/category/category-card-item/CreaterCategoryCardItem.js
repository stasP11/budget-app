import { useState, useRef } from "react";
import "./CardItem.scss";

function CategoryCardTemplate(prop) {
  const { onItemCreation } = prop;
  let nameRef = useRef();
  let valueRef = useRef();

  function sendUpdatedData() {
    onItemCreation({
      name: nameRef.current.value,
      value: Number(valueRef.current.value) || 0,
    });
  }

  function cancelCanges() {
    onItemCreation(null);
  }

  return (
    <div className="item-creator">
      <div className="item-creator__container">
        <div className="item-creator__ctegory-name">
          <p>Please, write category name</p>
          <input ref={nameRef}></input>
        </div>
        <div className="item-creator__count">
          <p>Please, write category count</p>
          <input ref={valueRef}></input>
        </div>
        <div className="item-creator__action">
          <button onClick={sendUpdatedData} className="item-creator__save">
            Save
          </button>
          <button onClick={cancelCanges} className="item-creator__cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function CreateCardItem(prop) {
  // in future there shoud be added error handler

  const { onCreatedNewItem } = prop;
  const [isClicked, setIsClicked] = useState(false);

  function onClickAddButton() {
    setIsClicked((currentisClicked) => (currentisClicked = !currentisClicked));
  }

  function handleCreationItem(value) {
    if (value) {
      onCreatedNewItem(value);
      onClickAddButton();
    } else {
      onClickAddButton();
    }
  }

  return (
    <div className="creator-category">
      {isClicked ? (
        <CategoryCardTemplate onItemCreation={handleCreationItem} />
      ) : (
        <div className="creator-category__add-button">
          <p onClick={onClickAddButton}>+</p>
        </div>
      )}
    </div>
  );
}

export default CreateCardItem;
