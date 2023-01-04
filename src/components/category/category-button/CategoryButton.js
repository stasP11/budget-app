import "./CategoryButton.scss";

function CategoryButton(prop) {
  const { id, name, onButtonClick } = prop;

  function handleButtonClick() {
    onButtonClick([id, name]);
  }

  return (
    <div className="category-button" onClick={handleButtonClick}>
      <p className="category-button__text">{name}</p>
    </div>
  );
}

export default CategoryButton;
