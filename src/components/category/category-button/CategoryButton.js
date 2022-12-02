import "./CategoryButton.scss";

function CategoryButton(prop) {
  const { onWatchStatusChange, categoryName } = prop;

  function changeStatus() {
    onWatchStatusChange(categoryName);
  }

  return (
    <div className="category-button" onClick={changeStatus}>
      <p className="category-button__text">{categoryName}</p>
    </div>
  );
}

export default CategoryButton;
