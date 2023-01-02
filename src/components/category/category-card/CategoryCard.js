import { useState, useRef, useEffect, memo, useMemo, useCallback } from "react";
import "./CategoryCard.scss";
import CategoryCardItem from "../category-card-item/CategoryCardItem";
import CreaterCategoryCardItem from "../category-card-item/CreaterCategoryCardItem";
import CancellIconButton from "../../buttons/cancel-icon/CancelIconButton";
import YesNoButtons from "../../buttons/button/YesNoButtons/YesNoButtons";
import {
  asyncFetchUserDataAction,
  asyncAddNewDataAction,
} from "../../../store/saga/data-update/index";
import { useDispatch } from "react-redux";

function CategoryCard(prop) {
  const { categoryItems, onWatchStatusChange, categoryName } = prop;
  const [isCategoriesUpdated, setCategoryUpdatedStatus] = useState(false);
  const [updatedData, setUpdatedData] = useState({ categoryName });

  const changedResult = { categoryName };
  const dispatch = useDispatch();

  const handledCategoryItems = useMemo(() => {
    return Object.entries(categoryItems);
  }, [categoryItems]);

  // status not updated by default
  const [resetStatus, setResetStatus] = useState(false);

  function handleCategoriesChanges(value) {
    if (!isCategoriesUpdated) {
      setCategoryUpdatedStatus(true);
    }

    if (changedResult[value.id]) {
      changedResult[value.id] = { ...changedResult[value.id], ...value };
    } else {
      changedResult[value.id] = { ...value };
    }

    setUpdatedData(changedResult);
  }

  function updateResetStatus(status) {
    console.log(status, 'pay atention')
    setResetStatus(status);
  }
  
  function handleCancellUpdate() {
    setCategoryUpdatedStatus(false);
    setResetStatus(true);
  }

  function handleApproveUpdate() {
    dispatch(asyncFetchUserDataAction(updatedData));
  }





  function handleCategoriesCreation(value) {
    dispatch(
      asyncAddNewDataAction({
        userId: "user1",
        ...value,
        categoryName,
      })
    );
  }

  return (
    <div className="category-card">
      <div className="category-card__header">
        <CancellIconButton onClose={onWatchStatusChange} />
      </div>
      <div className="category-card__items-container">
        {handledCategoryItems.map(([id, { currency, name, value }]) => (
          <div key={id}>
            <CategoryCardItem
              id={id}
              currency={currency}
              name={name}
              value={value}
              resetUpdateStatus={resetStatus}
              onChangeCategoryData={handleCategoriesChanges}
              onResetUpdate={updateResetStatus}
            />
          </div>
        ))}
        <CreaterCategoryCardItem onCreateItem={handleCategoriesCreation} />
      </div>

      {isCategoriesUpdated ? (
        <YesNoButtons
          onApproveUpdate={handleApproveUpdate}
          onCancellUpdate={handleCancellUpdate}
        />
      ) : null}
    </div>
  );
}

export default memo(CategoryCard);