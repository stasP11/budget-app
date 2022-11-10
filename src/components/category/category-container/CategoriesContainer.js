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
  const [isWatchedStatus, setIsWatchedStatus] = useState(false);

  function updatedWatchedStatus(value) {
    setIsWatchedStatus((currentStatus) => (currentStatus = value));
  }

  const category = categories.map((categoriesObj) => {
    const { categoryName, categoryItems } = categoriesObj;
    return (
      <div key={categoryName}>
        <CategoryButton
          categoryName={categoryName}
          watchStatus={updatedWatchedStatus}
        />
        <CategoryCard
          categoryItems={categoryItems}
          categoryName={categoryName}
          watchStatus={updatedWatchedStatus}
        />
      </div>
    );
  });

  console.log(isWatchedStatus);
  return <div>{category}</div>;
}

function CategoriesContainer() {
  return (
    <div className="categories">
      <Category userData={userData} />
    </div>
  );
}

export default CategoriesContainer;
