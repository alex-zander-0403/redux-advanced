import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";

//
const rootReducer = combineReducers({
  userReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

// тип state, Используется в useSelector для типизации
export type RootState = ReturnType<typeof rootReducer>;

// Тип всего store, Нужен для типизации при передаче store в Provider
export type AppStore = ReturnType<typeof setupStore>;

// Тип store.dispatch, Используется в useDispatch для типизации отправляемых экшенов
export type AppDispatch = AppStore["dispatch"];
