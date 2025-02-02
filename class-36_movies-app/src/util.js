import { WATCH_LIST_KEY } from "./constant";

export const getWatchlistFromLocalStorage = () => {
  const watchList = localStorage.getItem(WATCH_LIST_KEY);

  let value;
  if (watchList) {
    value = JSON.parse(watchList);
  } else {
    value = [];
  }

  return value;
};
