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
  const [isWatchedStatus, setIsWatchedStatus] = useState(null);

  function updatedWatchedStatus(value) {
    setIsWatchedStatus((currentStatus) => (currentStatus = value));
  }

  function isWatchedCard(props, updatedState){
    return props == updatedState? "watched": "not-watched"
  }

  const category = categories.map((categoriesObj) => {
    const { categoryName, categoryItems } = categoriesObj;
    return (
      <div key={categoryName} className>
        <div>
        <CategoryButton
          categoryName={categoryName}
          watchStatus={updatedWatchedStatus}
        />
        </div>
        <div className= {isWatchedCard(categoryName, isWatchedStatus)}>
        <CategoryCard
          categoryItems={categoryItems}
          categoryName={categoryName}
          watchStatus={updatedWatchedStatus}
        />
        </div>
      </div>
    );
  });

  console.log(isWatchedStatus);
  return <div>{category}</div>;
}

function CategoriesContainer() {
  return (
    <div className="categories">
      <Category userData={userData}/>
    </div>
  );
}

export default CategoriesContainer;
