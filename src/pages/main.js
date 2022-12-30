import CategoriesContainer from "../components/category/category-container/CategoriesContainer";

import { useState, useRef, useEffect } from "react";
import { asyncFetchUserDataAction } from "../store/saga/data-fetch/index";
import { store } from "../store/index";
import { useDispatch } from "react-redux";

const userId = "user1";

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncFetchUserDataAction(userId));
  }, [userId]);

  return <CategoriesContainer />;
}

export default Main;
