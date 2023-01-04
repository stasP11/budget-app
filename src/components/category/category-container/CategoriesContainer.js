import CategoryButton from "../category-button/CategoryButton";
import Card from "../category-card/CategoryCard";
import { useEffect, useState } from "react";
import "./CategoriesContainer.scss";
import { store } from "../../../store/index";
import {
  setDataInSessionStorage,
  removeDataFromSessionStorage,
} from "../../../servises/helpers-functions/sessionStorage/index";
import {
  getCategoryItemsById,
  getCategoryButtonData,
  extractData,
  useExtractedData,
  useUserData,
} from "./servises";

function CardButtonsContainer(prop) {
  const { time, data, onButtonClick } = prop;
  const buttonsContainer = data.map(({ id, categoryName }) => {
    return (
      <div key={id}>
        <CategoryButton
          name={categoryName}
          id={id}
          onButtonClick={onButtonClick}
        />
      </div>
    );
  });

  return (
    <div>
      <time>{time}</time>
      <div className="buttons-container">{buttonsContainer}</div>
    </div>
  );
}

function CategoriesContainer() {
  const userData2 = useUserData(store);
  const categoryButtonsData = useExtractedData(store, getCategoryButtonData);
  const [openedCardState, setOpenedCardState] = useState({});

  useEffect(() => {
    /*
    here we check if the card has been opened.
    If yes, then we get the ID and name of the opened card from the session
    storage and through them we get the necessary data for the card
    */
    const data = extractData("openedCard", userData2);
    if (data) {
      setOpenedCardState(data);
    }
  }, [userData2]);

  function handleButtonClick([id, categoryName]) {
    const categoryItems = getCategoryItemsById(userData2, id);
    setOpenedCardState({ id, categoryName, categoryItems });
    setDataInSessionStorage("openedCard", JSON.stringify({ id, categoryName }));
  }

  function handleCardReset() {
    setOpenedCardState({});
    removeDataFromSessionStorage("openedCard");
  }

  return (
    <div>
      <div className="category-buttons">
        {Object.keys(categoryButtonsData).length ? (
          <CardButtonsContainer
            {...categoryButtonsData}
            onButtonClick={handleButtonClick}
          />
        ) : null}
      </div>

      <div className="card">
        {Object.keys(openedCardState).length ? (
          <Card categoryData={openedCardState} onReset={handleCardReset} />
        ) : null}
      </div>
    </div>
  );
}

export default CategoriesContainer;
