import { useState, useEffect } from "react";
import "./CardItem.scss";

function SpendingItem(prop) {
  const { itemId, value, onChangeValue } = prop;

  const [state, setState] = useState(value);

  useEffect(() => {
    setState(value);
  }, [value]);

  function handleChangeValue(event) {
    console.log(itemId, "this shit is work!!! handleChangeValue");
    onChangeValue(itemId, Number(event.target.value));
  }

  function handleIncreaseValue() {
    console.log(itemId, "this shit is work!!! handleChangeValue");
    onChangeValue(itemId, Number(state) + 1);
  }

  function handleDecreaseValue() {
    console.log(itemId, "this shit is work!!! handleChangeValue");
    onChangeValue(itemId, Number(state) - 1);
  }

  return (
    <div className="data-field">
      <button className="data-field--minus" onClick={handleDecreaseValue}>
        -
      </button>
      <input value={state} onChange={handleChangeValue} />
      <button className="data-field--plus" onClick={handleIncreaseValue}>
        +
      </button>
    </div>
  );
}

function CategoryItem(prop) {
  const { itemId, name, value, onChangeValue } = prop;
  return (
    <div className="card-item">
      <p className="card-item__name">{name}</p>
      <SpendingItem
        itemId={itemId}
        value={value}
        onChangeValue={onChangeValue}
      />
    </div>
  );
}

export default CategoryItem;
