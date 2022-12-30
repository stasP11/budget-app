import { useState, useRef, useEffect } from "react";
import "./CategoryCard.scss";
import cancelIcon from "../../../assets/icons/cancel-svgrepo-com.svg";
import CategoryCardItem from "../category-card-item/CategoryCardItem";
import CreaterCategoryCardItem from "../category-card-item/CreaterCategoryCardItem";
import CancellIconButton from "../../buttons/cancel-icon/CancelIconButton";
import YesNoButtons from "../../buttons/button/YesNoButtons/YesNoButtons";
import { asyncFetchUserDataAction, asyncAddNewDataAction} from "../../../store/saga/data-update/index";
import { useDispatch } from "react-redux";

function CategoryCard(prop) {
  const { categoryItems, onWatchStatusChange, categoryName } = prop;
  const [isCategoriesUpdated, setCategoryUpdatedStatus] = useState(false);
  const [updatedData, setUpdatedData] = useState({ categoryName });

  const changedResult = { categoryName };
  const handledCategoryItems = Object.entries(categoryItems);
  const dispatch = useDispatch();

  // status not updated by default
  const [resetStatus, setResetStatus] = useState(false);

  function handleCategoriesChanges(value) {
    console.log(value, "resived changed data");
    if (!isCategoriesUpdated) {
      setCategoryUpdatedStatus(true);
    }

    if (changedResult[value.id]) {
      changedResult[value.id] = { ...changedResult[value.id], ...value };
    } else {
      changedResult[value.id] = { ...value };
    }

    setUpdatedData(changedResult);
    console.log(changedResult, "edited data");
  }

  function updateResetStatus(status) {
    setResetStatus(status);
  }

  function handleCancellUpdate() {
    setCategoryUpdatedStatus(false);
    setResetStatus(true);
  }

  function handleApproveUpdate() {
    dispatch(asyncFetchUserDataAction(updatedData));
  }
  function handleCategoriesCreation(value){
    dispatch(asyncAddNewDataAction({
      userId: 'user1',
      ...value,
      categoryName,
    }))
  }

  return (
    <div className="category-card">
      <div className="category-card__header">
        <CancellIconButton onClose={onWatchStatusChange} />
      </div>
      <div className="category-card__items-container">
        {handledCategoryItems.map((item) => (
          <div key={item[0]}>
            <CategoryCardItem
              key={item[0]}
              itemData={item}
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

export default CategoryCard;
