import { useState, useRef } from "react";
import "./CategoryCard.scss";
import cancelIcon from "../../../assets/icons/cancel-svgrepo-com.svg";
import CategoryCardItem from './card-item/CategoryCardItem'
import CreaterCategoryCardItem from './card-item/CreaterCategoryCardItem'










function CategoryCard(prop) {
  const { categoryItems } = prop;
  const [updatedCategories, setUpdatedCategories] = useState([]);


  function handleCategotiesChanges(value) {
    console.log(value, 'updated value');
    const { name } = value;
    setUpdatedCategories((c) => [...c, value]);
  }

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
