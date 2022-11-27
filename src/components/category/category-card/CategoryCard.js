import { useState, useRef } from "react";
import "./CategoryCard.scss";
import cancelIcon from "../../../assets/icons/cancel-svgrepo-com.svg";
import CategoryCardItem from './CategoryCardItem'

function CategoryCardTemplate(prop) {
  let nameRef = useRef();
  let valueRef = useRef();

  function sendUpdatedData() {
    prop.isClicked({
      name: nameRef.current.value,
      value: valueRef.current.value,
    });
  }

  function cancelCanges() {
    prop.isClicked(null);
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

function CreaterCategoryCardItem() {
  const [isClicked, setIsClicked] = useState(false);
  const [itemData, setItemData] = useState({});

  function onClickAddButton() {
    setIsClicked((currentisClicked) => (currentisClicked = !currentisClicked));
  }
  function onAddNewItem(prop) {
    onClickAddButton();
    // there we shoud send data
    setItemData(prop);
    // when we finish clean this
    // setItemData(null)
  }

  console.log(itemData, "final result");

  return (
    <div className="creator-category">
      {isClicked ? (
        <CategoryCardTemplate isClicked={onAddNewItem} />
      ) : (
        <div className="creator-category__add-button">
          <p onClick={onClickAddButton}>|+|</p>
        </div>
      )}
    </div>
  );
}

function CategoryCard(prop) {
  const { categoryItems } = prop;
  const [updatedCategories, setUpdatedCategories] = useState([]);


  function handleCategotiesChanges(value) {
    console.log(value, 'updated value');
    const { name } = value;
    setUpdatedCategories((c) => [...c, value]);
  }

  return (
    <div className="category-card">
      <div className="category-card__header">
        <img
          className="category-card__cancel-icon"
          onClick={() => {
            prop.watchStatus(null);
          }}
          src={cancelIcon}
        ></img>
      </div>

      <div className="category-card__items-container">

        {categoryItems.map((item) => (
          <CategoryCardItem
            itemData={item}
            onChangeCategoryData={handleCategotiesChanges}
          />
        ))}


        <CreaterCategoryCardItem />
      </div>
    </div>
  );
}

export default CategoryCard;
