import { useState, useRef } from "react";
import "./CardItem.scss";

function CategoryDataCounter(prop) {
  const { categoryData, onCategoryDataChange } = prop;
  const dataValueRef = useRef();
  const [categoryValue, setCategoryValue] = useState(categoryData);

  function handleChangeValue() {
    setCategoryValue(dataValueRef.current.value);
    onCategoryDataChange(categoryValue);
  }
  function handleIncreaseValue() {
    setCategoryValue(Number(categoryValue) + 1);
    onCategoryDataChange(categoryValue);
  }
  function handleDecreaseValue() {
    setCategoryValue(Number(categoryValue) - 1);
    onCategoryDataChange(categoryValue);
  }

  return (
    <div className="data-field">
      <button onClick={handleDecreaseValue}>-</button>
      <input
        value={categoryValue}
        onChange={handleChangeValue}
        ref={dataValueRef}
      />
      <button onClick={handleIncreaseValue}>+</button>
    </div>
  );
}

function CategoryCardItem(prop) {
  const { name, value } = prop.itemData;
  const [categoryItemValue, setCategoryItemValue] = useState(value);

  function handelCategoryDataChange(newValue) {
    setCategoryItemValue(newValue);
    const changedCategoryItem = {};
    /*
    send updated data
    onCategoryChange()
     */
  }

  return (
    <div className="card-item">
      <p className="card-item__name">{name}</p>
      <CategoryDataCounter
        categoryData={categoryItemValue}
        onCategoryDataChange={handelCategoryDataChange}
      />
    </div>
  );
}

export default CategoryCardItem;
