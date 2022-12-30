import CategoryButton from "../category-button/CategoryButton";
import CategoryCard from "../category-card/CategoryCard";
import { useEffect, useState } from "react";
import "./CategoriesContainer.scss";
import { store } from "../../../store/index";
import {
  setDataInSessionStorage,
  getDataFromSessionStorage,
  removeDataFromSessionStorage,
} from "../../../servises/helpers-functions/sessionStorage/index";

function Category(data) {
  const [activatedCategoryName, setIActivatedCategoryName] = useState(null);
  const { time, categories } = data?.userData;
  const openedCategoryName = getDataFromSessionStorage("openedCategory");

  useEffect(() => {
    if (openedCategoryName) {
      setIActivatedCategoryName(openedCategoryName);
    }
  }, []);

  function handleWatchedStatus(name) {
<<<<<<< HEAD
    name
      ? setDataInSessionStorage("openedCategory", name)
      : removeDataFromSessionStorage("openedCategory");
=======
>>>>>>> master
    setIActivatedCategoryName((cardName) => (cardName = name));
  }

  function isActivatedCard(props, updatedState) {
    if (props == updatedState) {
      return "activated";
    }
    if (openedCategoryName == props) {
      return "activated";
    } else return "unactivated";
  }

  const categ = categories.map((category) => {
    const { id, categoryName, categoryItems } = category;
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

        {activatedCategoryName ? (
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

  return <>{categ}</>;
}

function CategoriesContainer() {
  const userData2 = useUserData();

  function ReturnRight() {
    let result;
    if (userData2?.categories && userData2?.time) {
      result = <Category userData={userData2} />;
    }
    return <>{result}</>;
  }

  return (
    <div className="categories">
      <ReturnRight />
    </div>
  );
}

export default CategoriesContainer;

function useUserData() {
  const [state, setState] = useState({});
  store.subscribe(() => {
    setState(store.getState()?.userData);
  });
  return state;
}
