import { useState } from "react";
import {
  getDataFromSessionStorage,
} from "../../../servises/helpers-functions/sessionStorage/index";

export function getCategoryItemsById(data, id) {
  const { time, categories } = data;
  const category = categories.find((c) => c.id == id);
  return category ? Object.values(category.categoryItems) : [];
}

export function extractData(StorageKey, data) {
  if (getDataFromSessionStorage(StorageKey)) {
    const { id, categoryName } = JSON.parse(
      getDataFromSessionStorage(StorageKey)
    );
    if (id && Object.keys(data).length > 0) {
      const categoryItems = getCategoryItemsById(data, id);
      if (categoryItems.length) {
        return { id, categoryName, categoryItems };
      }
    }
  }
  return null;
}

export function getCategoryButtonData(obj) {
  if (Object.keys(obj).length) {
    const { time, categories } = obj;
    const data = categories.map((category) => ({
      id: category.id,
      categoryName: category.categoryName,
    }));

    return {
      time,
      data,
    };
  } else return {};
}

export function useExtractedData(store, fn) {
  const [state, setState] = useState({});
  store.subscribe(() => {
    if (Object.keys(store.getState()?.userData).length) {
      setState(store.getState()?.userData);
    }
  });
  return fn(state);
}

export function useUserData(store) {
  const [state, setState] = useState({});
  store.subscribe(() => {
    setState(store.getState()?.userData);
  });
  return state;
}
