import CategoryButton from "../category-button/CategoryButton";
import CategoryCard from "../category-card/CategoryCard";
import { useState } from "react";
import "./CategoriesContainer.scss";

const usersData = [
  {
    time: "09.11.2021",
    categories: [
      {
        categoryName: "Food",
        categoryItems: [
          {
            name: "meat",
            value: 15,
            currency: "EUR",
          },
          {
            name: "pasta",
            value: 2.54,
            currency: "EUR",
          },
        ],
      },
      {
        categoryName: "Transport",
        categoryItems: [
          {
            name: "Taxi",
            value: 35,
            currency: "EUR",
          },
          {
            name: "Tram",
            value: 0.54,
            currency: "EUR",
          },
        ],
      },
    ],
  },
];

//
// import getNeedData

function getUserData() {
  return usersData[0];
}
const userData = getUserData();

function Category(data) {
  const { categories } = data.userData;
  const [activatedCategoryName, setIActivatedCategoryName] = useState(null);

  function handleWatchedStatus(name) {
    setIActivatedCategoryName((cardName) => (cardName = name));
  }

  function isActivatedCard(props, updatedState) {
    return props == updatedState ? "activated" : "unactivated";
  }

  const category = categories.map((categoriesObj) => {
    const { categoryName, categoryItems } = categoriesObj;
    return (
      <div
        key={categoryName}
        className={isActivatedCard(categoryName, activatedCategoryName)}
      >
        <div className="button">
          <CategoryButton
            categoryName={categoryName}
            onWatchStatusChange={handleWatchedStatus}
          />
        </div>

        {categoryName === activatedCategoryName ? (
          <div className="card">
            <CategoryCard
              categoryItems={categoryItems}
              categoryName={categoryName}
              onWatchStatusChange={handleWatchedStatus}
            />
          </div>
        ) : null}
      </div>
    );
  });

  return <>{category}</>;
}

function CategoriesContainer() {
  return (
    <div className="categories">
      <Category userData={userData} />
    </div>
  );
}

export default CategoriesContainer;
