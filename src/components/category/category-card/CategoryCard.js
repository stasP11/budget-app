import "./CategoryCard.scss";
import { useState, useEffect } from "react";
import CategoryCardItem from "../category-card-item/CategoryCardItem";
import CreateCardItem from "../category-card-item/CreaterCategoryCardItem";
import { CancellIcon } from "../../buttons/icons/Icons";
import YesNoButtons from "../../buttons/button/YesNoButtons/YesNoButtons";
import {
  asyncFetchUserDataAction,
  asyncAddNewDataAction,
} from "../../../store/saga/data-update/index";
import { useDispatch } from "react-redux";
import { generateID } from "../../../servises/helpers-functions/utils/utils";

function updateArr(arr, id, newData) {
  return arr.map((item) => {
    if (item.id === id) {
      return { ...item, value: newData };
    }
    return item;
  });
}

function Card(prop) {
  const { onReset, categoryData } = prop;
  const { id, categoryItems, categoryName } = categoryData;

  const dispatch = useDispatch();

  const [itemsState, setItemsState] = useState(categoryItems);
  const [isUpdatedValue, setIsUpdatedValue] = useState(false);

  useEffect(() => {
    setItemsState(categoryItems);
  }, [categoryItems]);

  function handleChangeValue(...prop) {
    const [id, newData] = prop;

    setItemsState(updateArr(itemsState, id, newData));
    if (!isUpdatedValue) {
      setIsUpdatedValue(true);
    }
  }

  function handleCancellUpdate() {
    setItemsState(categoryItems);
    setIsUpdatedValue(false);
  }

  function handleApproveUpdate() {
    dispatch(asyncFetchUserDataAction({ id, itemsState }));
    setIsUpdatedValue(false);
  }

  function handleCreatingCardItem(value) {
    const itemData = { ...value, id: generateID(), currency: "EUR" };
    dispatch(asyncAddNewDataAction({ id, itemData }));
  }

  const itemsList = itemsState.map(({ id, name, value }) => {
    return (
      <div key={id}>
        <CategoryCardItem
          itemId={id}
          name={name}
          value={value}
          onChangeValue={handleChangeValue}
        />
      </div>
    );
  });

  return (
    <div className="category-card">
      <div className="category-card--header">
        <div>{categoryName}</div>{" "}
        <div>
          <CancellIcon onReset={onReset} size="midlle" />
        </div>
      </div>
      <div className="category-card--container">{itemsList}</div>
      <CreateCardItem onCreatedNewItem={handleCreatingCardItem} />
      {isUpdatedValue ? (
        <YesNoButtons
          onCancellUpdate={handleCancellUpdate}
          onApproveUpdate={handleApproveUpdate}
        />
      ) : null}
    </div>
  );
}

export default Card;
