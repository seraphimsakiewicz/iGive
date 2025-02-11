import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers/rootReducer";
import getInitState from "./initState";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: getInitState(),
});

store.subscribe(() => {
  window.localStorage.setItem("redux", JSON.stringify(store.getState()));
});

export default store;
