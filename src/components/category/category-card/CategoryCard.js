import { useState, useRef } from "react";
import "./CategoryCard.scss";
import cancelIcon from "../../../assets/icons/cancel-svgrepo-com.svg";

function CategoryCardTemplate(prop) {
  let nameRef = useRef();
  let valueRef = useRef();

  const response = {};



  function sendData() {
    response.name = nameRef.current.value;
    response.value = valueRef.current.value;
    //there i shoud to send data to parent
    prop.isClicked();
  }

  function cancelCanges() {
    prop.isClicked();
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
          <button onClick={sendData} className="item-creator__save">
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

  function updateIsClicked() {
    setIsClicked((currentisClicked) => (currentisClicked = !currentisClicked));
  }

  return (
    <div className="creator-category">
      {isClicked ? (
        <CategoryCardTemplate isClicked={updateIsClicked} />
      ) : (
        <div className="creator-category__add-button">
          <p onClick={updateIsClicked}>|+|</p>
        </div>
      )}
    </div>
  );
}







function CategoryCardItem(prop) {
  const { currency, name, value } = prop.itemData;
  let valueRef = useRef();

  function getUpdatedValue(){
    console.log('some actions')   
    /* 
    prop.onChangeCategoryData({
      name,
      value: valueRef.current.value
    })
    */
  }

  return (
    <div className="category-item">
      <p className="category-item__name">{name}</p>
      <div className="category-item__count-container">
        <button className="category-item__count-decrease">-</button>
        <div>
          <input className="category-item__count" ref={valueRef} onChange={getUpdatedValue} defaultValue={value} />
          <span className="category-item__currency">{currency}</span>
        </div>
        <button className="category-item__count-increase">+</button>
      </div>
    </div>
  );
}

function CategoryCard(prop) {
  const { categoryItems } = prop;
  const [ updatedCategories, setUpdatedCategories] = useState({})


  function handleCategotiesChanges(value){
   console.log(value)
  }

  console.log(updatedCategories);

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
          <CategoryCardItem itemData={item} onChangeCategoryData={handleCategotiesChanges}/>
        ))}
        <CreaterCategoryCardItem />
      </div>
    </div>
  );
}

export default CategoryCard;
