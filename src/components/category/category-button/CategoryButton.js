import './CategoryButton.scss'

function CategoryButton(prop) {

  function changeStatus(){
    prop.watchStatus(true)
  }

  return (
    <div className ="category-button" onClick={changeStatus}>
      <p className ="category-button__text">{prop.categoryName}</p>
    </div>
  );
}

export default CategoryButton;
