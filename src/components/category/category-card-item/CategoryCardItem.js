import { useState, useEffect } from "react";
import "./CardItem.scss";

function CategoryDataCounter(prop) {
  const { categoryData, onChangeCategoryData, onResetUpdate, resetUpdateStatus } = prop;
  const [categoryValue, setCategoryValue] = useState(categoryData);


  useEffect(()=>{
    if(resetUpdateStatus){
      setCategoryValue(categoryData)
      onResetUpdate(false)
    }
  }, [resetUpdateStatus])



  function handleChangeValue(event) {
    setCategoryValue(event.target.value);
    onChangeCategoryData(Number(event.target.value));
  }

  function handleIncreaseValue() {
    setCategoryValue(Number(categoryValue) + 1);
    console.log(Number(categoryValue) + 1, 'we increase need value')
    onChangeCategoryData(Number(categoryValue) + 1);
  }

  function handleDecreaseValue() {
    setCategoryValue(Number(categoryValue) - 1);
    onChangeCategoryData(Number(categoryValue) - 1);
  }
  return (
    <div className="data-field">
      <button onClick={handleDecreaseValue}>-</button>
      <input
        value={categoryValue}
        onChange={handleChangeValue}
      />
      <button onClick={handleIncreaseValue}>+</button>
    </div>
  );
}

function CategoryCardItem(prop) {
  const { resetUpdateStatus, onResetUpdate, onChangeCategoryData, key } = prop
  const [ id, itemData ] = prop.itemData;
  const {name, value, currency} = itemData;




  function handleUpdatedValue(value){
    onChangeCategoryData({
      id, value
    })
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
        onChangeCategoryData={ handleUpdatedValue}
      />
    </div>
  );
}

export default CategoryCardItem;