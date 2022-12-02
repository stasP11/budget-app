import CategoriesContainer from "../components/category/category-container/CategoriesContainer";

import { useState, useRef, useEffect } from "react";
import { asyncFetchUserDataAction } from "../store/saga/data-fetch/index";
import { store } from "../store/index";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncFetchUserDataAction());
  }, []);

  store.subscribe(() => console.log(store.getState().userData));
  return <CategoriesContainer />;
}

export default Main;
