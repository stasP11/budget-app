import './CategoryCard.scss'
import cancelIcon from '../../../assets/icons/cancel-svgrepo-com.svg';


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
      <div className ="category-card">
        <div><img className="category-card__cancel-icon" onClick={()=>{prop.watchStatus(null)}} src={cancelIcon}></img></div>
      </div>
    );
  }
  
  export default CategoryCard;
  