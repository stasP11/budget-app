import { useState, useEffect, memo, useCallback } from "react";
import "./CardItem.scss";

function CategoryDataCounter(prop) {
  const {
    categoryData,
    onChangeCategoryData,
    onResetUpdate,
    resetUpdateStatus,
  } = prop;
  const [categoryValue, setCategoryValue] = useState(categoryData);

  useEffect(() => {
    if (resetUpdateStatus) {
      setCategoryValue(categoryData);
      onResetUpdate(false);
    }
  }, [resetUpdateStatus]);

  function handleChangeValue(event) {
    setCategoryValue(event.target.value);
    onChangeCategoryData(Number(event.target.value));
  }

  function handleIncreaseValue() {
    setCategoryValue(Number(categoryValue) + 1);
    console.log(Number(categoryValue) + 1, "we increase need value");
    onChangeCategoryData(Number(categoryValue) + 1);
  }

  function handleDecreaseValue() {
    setCategoryValue(Number(categoryValue) - 1);
    onChangeCategoryData(Number(categoryValue) - 1);
  }
  return (
    <div className="data-field">
      <button onClick={handleDecreaseValue}>-</button>
      <input value={categoryValue} onChange={handleChangeValue} />
      <button onClick={handleIncreaseValue}>+</button>
    </div>
  );
}

function CategoryCardItem(prop) {
  const {
    resetUpdateStatus,
    onResetUpdate,
    onChangeCategoryData,
    id,
    name,
    value,
  } = prop;

  //console.log(prop);

  function handleUpdatedValue(value) {
    onChangeCategoryData({
      id,
      value,
    });
  }

  /*
  then we can to add new functions, that will handle not only changed category value but also
  name/curryncy and other
  */

  return (
    <div className="card-item">
      <p className="card-item__name">{name}</p>
      <CategoryDataCounter
        categoryData={value}
        resetUpdateStatus={resetUpdateStatus}
        onResetUpdate={onResetUpdate}
        onChangeCategoryData={handleUpdatedValue}
      />
    </div>
  );
}

export default memo(CategoryCardItem, (prevProps, nextProps) => {
  console.log( prevProps.resetUpdateStatus, 'prevProps.resetUpdateStatus', nextProps.resetUpdateStatus, 'nextProps.resetStatus')
  return (
    prevProps.value == nextProps.value &&
    prevProps.id==nextProps.id &&
    prevProps.currency==nextProps.currency &&
    prevProps.name==nextProps.name &&
    prevProps.resetUpdateStatus==nextProps.resetUpdateStatus &&
    typeof prevProps.onResetUpdate === "function" &&
    typeof nextProps.onChangeCategoryData === "function"
  );
});
