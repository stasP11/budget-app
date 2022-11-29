import "./CancelIconButton.scss";
import cancelIcon from "../../../assets/icons/cancel-svgrepo-com.svg";

function CancellIconButton(prop) {
  const { onClose } = prop;

  return (
    <div className="cancell-icon">
      <img
        className="category-card__cancel-icon"
        onClick={() => {
          onClose(null);
        }}
        src={cancelIcon}
      ></img>
    </div>
  );
}

export default CancellIconButton;
