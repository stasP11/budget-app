import { useState, useRef } from "react";
import "./CategoryCard.scss";
import cancelIcon from "../../../assets/icons/cancel-svgrepo-com.svg";
import CategoryCardItem from "../category-card-item/CategoryCardItem";
import CreaterCategoryCardItem from "../category-card-item/CreaterCategoryCardItem";
import CancellIconButton from "../../buttons/cancel-icon/CancelIconButton"

function CategoryCard(prop) {
  const { categoryItems, onWatchStatusChange } = prop;
  const [updatedCategories, setUpdatedCategories] = useState([]);

  function handleCategotiesChanges(value) {
    console.log(value, "updated value");
    const { name } = value;
    setUpdatedCategories((c) => [...c, value]);
  }

  return (
    <div className="category-card">
      <div className="category-card__header">
        <CancellIconButton onClose={onWatchStatusChange}/>
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
