import React from "react";
import { useState, useRef, useEffect, memo, useMemo } from "react";
import "./YesNoButtons.scss";

function YesNoButtons(props) {
  return (
    <div className="yes-no-buttons">
      <button type="button" onClick={props.onApproveUpdate}>
        Yes
      </button>
      <button type="button" onClick={props.onCancellUpdate}>
        No
      </button>
    </div>
  );
}

export default memo(YesNoButtons, (prevProps, nextProps) => {
  return (
    typeof prevProps.onApproveUpdate === "function" &&
    typeof nextProps.onCancellUpdate === "function"
  );
});
