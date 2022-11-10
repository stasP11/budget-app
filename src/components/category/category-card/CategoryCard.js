import './CategoryCard.scss'
import cancelIcon from '../../../assets/icons/cancel-svgrepo-com.svg';

function CategoryCardHead(){
    return (
        <div className ="category-card__head">
          <p className ="category-card__close-icon">go back</p>
        </div>
      );
}

function CategoryCardSaveButton(){
    return (
    <div className ="category-card__save-button"> Save Result</div>
      );
}


function CategoryCardItem(){
    return (
        <div className ="category-item">
        <p className ="category-item__name">Some name</p>
        <div className="category-item__count">
           <button>-</button>
           <input defaultValue="0"/>
           <button>+</button>
        </div>
        </div>
      );
}



function CategoryCard(prop) {
    return (
      <div className ="category-card" onClick={()=>prop.watchStatus(false)}>
        <div><img className="category-card__cancel-icon" src={cancelIcon}></img></div>
    <CategoryCardHead></CategoryCardHead>
    <div className ="category-card__cards-container">
    <CategoryCardSaveButton></CategoryCardSaveButton>
    </div>
    <CategoryCardItem></CategoryCardItem>
      </div>
    );
  }
  
  export default CategoryCard;
  