import { useState, useRef } from "react";
import "./CardItem.scss";

function CategoryCardTemplate(prop) {
<<<<<<< HEAD
  const {onItemCreation} = prop
=======
>>>>>>> master
  let nameRef = useRef();
  let valueRef = useRef();

  function sendUpdatedData() {
<<<<<<< HEAD
    onItemCreation({
      name: nameRef.current.value,
      value: Number(valueRef.current.value) || 0,
=======
    prop.isClicked({
      name: nameRef.current.value,
      value: valueRef.current.value,
>>>>>>> master
    });
  }

  function cancelCanges() {
<<<<<<< HEAD
    onItemCreation(null);
=======
    prop.isClicked(null);
>>>>>>> master
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

<<<<<<< HEAD
function CreaterCategoryCardItem(prop) {
  const { onCreateItem } = prop
=======
function CreaterCategoryCardItem() {
>>>>>>> master
  const [isClicked, setIsClicked] = useState(false);
  const [itemData, setItemData] = useState({});

  function onClickAddButton() {
    setIsClicked((currentisClicked) => (currentisClicked = !currentisClicked));
  }
<<<<<<< HEAD

  function handleCreationItem(value){
    if(value){
    onCreateItem(value)
    } else {
      onClickAddButton()
    }
  }

  return (
    <div className="creator-category">
      {isClicked ? (
        <CategoryCardTemplate onItemCreation={handleCreationItem} />
=======
  function onAddNewItem(prop) {
    onClickAddButton();
    // there we shoud send data
    setItemData(prop);
    // when we finish clean this
    // setItemData(null)
  }
  return (
    <div className="creator-category">
      {isClicked ? (
        <CategoryCardTemplate isClicked={onAddNewItem} />
>>>>>>> master
      ) : (
        <div className="creator-category__add-button">
          <p onClick={onClickAddButton}>|+|</p>
        </div>
      )}
    </div>
  );
}

export default CreaterCategoryCardItem;
