import { useState, useRef } from "react";
import "./CategoryCard.scss";
import cancelIcon from "../../../assets/icons/cancel-svgrepo-com.svg";

function CategoryDataCounter(prop) {
  const { categoryData, onCategoryDataChange} = prop
  const dataValueRef = useRef();
  const [categoryValue, setCategoryValue] = useState(categoryData);

  function handleChangeValue() {
    setCategoryValue(dataValueRef.current.value);
    onCategoryDataChange(categoryValue)
  }
  function onIncreaseValue() {
    setCategoryValue(categoryValue + 1);
    onCategoryDataChange(categoryValue)
  }
  function onDecreaseValue() {
    setCategoryValue(categoryValue - 1);
    onCategoryDataChange(categoryValue)
  }

  return (
    <div className="data-field">
      <button onClick={onDecreaseValue}>-</button>
      <input
        value={categoryValue}
        onChange={handleChangeValue}
        ref={dataValueRef}
      />
      <button onClick={onIncreaseValue}>+</button>
    </div>
  );
}

function CategoryCardItem(prop) {
      
  console.log(prop);
  const { name, value } = prop.itemData;
  const [ categoryItemValue, setCategoryItemValue ] = useState(value);

  function handelCategoryDataChange(newValue){
    setCategoryItemValue(newValue);
     const changedCategoryItem = {
        
     }
    // send updated data
    /*
    onCategoryChange()
     */
  }


  return (
    <div className="category-item">
      <p className="category-item__name">{name}</p>
      <CategoryDataCounter categoryData={categoryItemValue} onCategoryDataChange={handelCategoryDataChange}/>
    </div>
  );
}

export default CategoryCardItem;



/*
function CategoryCardItem(prop) {
  const { currency, name, value } = prop.itemData;
  let valueRef = useRef();

  function getUpdatedValue() {
    prop.onChangeCategoryData({
      name,
      value: valueRef.current.value,
    });
  }

  return (
    <div className="category-item">
      <p className="category-item__name">{name}</p>
      <div className="category-item__count-container">
        <button className="category-item__count-decrease">-</button>
        <div>
          <input
            className="category-item__count"
            ref={valueRef}
            onChange={getUpdatedValue}
            defaultValue={value}
          />
          <span className="category-item__currency">{currency}</span>
        </div>
        <button className="category-item__count-increase">+</button>
      </div>

      <CategoryDataCounter categoryData={value} />
    </div>
  );
}
*/