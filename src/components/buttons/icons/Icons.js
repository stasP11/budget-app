import "./Icons.scss";
import cancelIcon from "../../../assets/icons/cancel-svgrepo-com.svg";

export function CancellIcon({size, onReset}) {

  return (
    <div className='cancell-icon'>
      <img
        className={size}
        onClick={onReset}
        src={cancelIcon}
      ></img>
    </div>
  );
}

